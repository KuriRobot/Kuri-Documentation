Punchcards
==========

#### What are they?

They are two things:

1. the interface definition to a logical component in the code: the `black box`.
   It consists of:
   1. a list of API calls `tasks`
   1. a list of events `triggers`
   1. a list of `properties`
1. a set of rules doing the following mapping (`trigger`, `state`) -> `task`,
   where `state` is the current state of all `properties`
   
   
## Rationale

This document defines a format that provides a solution to the following set of constraints:

- the rules have to be easily exchanged among tools (web interface?) and the robot
- the format should be human-readable to provide more flexibility
- the format should hint at (or enforce) conformity in the design of rules, with the
  expectation of being able to express all product intents with the fewest operations possible
- writing and/or editing rules should come easy to non-engineers and have a small learning curve
- rules should be easy to validate for bad syntax and inconsistencies


## Details

### Nomenclature

- `black box`: the code implementation of the system being interfaced with
- `property`: a single named value associated with the black box. This can also be a predicate (e.g. `is_docked`)
- `state`: the set of all properties of a black box and their value at a given point in time
- `task`: a function of the black box that can be matched and called by a rule
- `priority`: a numeric priority defined by the current task. Lower numbers are higher priorities.
- `trigger`: a string, and an object with arbitrary parameters that is matched against the set of rules


### Syntax

Punchcards use `JSON` as a serialization format for its data.

JSON can easily be parsed and exchanged among different tools and systems, and
provides good readability for human parsing & editing.

```json
{
    "version": 1,

    "properties": [
        "face_id"
    ],

    "triggers": [
        "saw face",
        "saw object",
        "heartbeat",
    ],

    "tasks": [
        {
            "name": "focus_on_face",
            "description": "robot focuses on a face",
            "default_params": {
                  "head_speed": 1.2
            }
        },
    ],

    "rules": [
        {
            "trigger": "saw face",
            "match": [
                "prop.task == 'focus_on_face'",
                "lastcalled('focus_on_face') > 10"
            ],
            "reaction": "smile",
            "task": "focus_on_face",
            "task_params": {
                  "head_speed": 1.3
            },
            "happy_delta": 0.1,
            "excited_delta": 0.1,
        }
    ]
}
```

For a quick peek into the JSON syntax, see this tutorial: https://www.tutorialspoint.com/json/json_syntax.htm

### Data structure

#### Top level

The document consists in a top-level object with the following keys:

- `version`: (number) the format version number. This document specifies version `1`.
- `properties`: (array) a list of strings, each of them being a property of the black box
- `tasks`: (array) a list of [task objects](#task)
- `triggers` (array) a list of strings, each of them being a trigger
- `rules`: (array) a list of [rule objects](#rule)

#### Task

- `name`: (string) the name of the black box API call (function name)
- `description`: (string) a short description of what that task is and/or does
- `priority`: (number) the priority number while running the task.
              If not set, the lowest priority (highest number) will be used, i.e. any
              rule match based on priority will succeed.
- `default_params`: (object) parameters to use when not otherwise specified in the rule

#### Rule

- `trigger`: (string) the name of the trigger the rule matches against.
             If not specified, match against any trigger
- `priority` (number) the lowest priority number that will match against this rule.
             If not specified, only match if the current task has no priority assigned.
- `match`: (array) a list of [match strings](#match-string). They must **ALL** match.
- `task`: (string) the name of the task to trigger. If not specified, the event will be matched
          and consumed, meaning that no further rules will be matched. If a reaction is specified, it
          will be executed by the blackbox directly. If a happy_delta and/or excited_delta is specified,
          they will take effect.
- `task_params`: (object) parameters for the task. This can be a partial subset of the `default_params`
                 specified in the [task object](#task)
- `reaction`: (string) the name of an animation to play as a reaction to the trigger.
              If not specified, do not play any animation.
              **Note**: the task implementation will have full control over the reaction,
                        whether it is played or not, if and when it is aborted, and whether
                        additional animations are played or not.
- `happy_delta`: (number) the increase (or decrease) in happiness, in the `[-1.0, 1.0]` range.
                 If not specified, happiness stays unchanged. See [the mood documentation](../mood.md)
- `excited_delta`: (number) the increase (or decrease) in excitement, in the `[-1.0, 1.0]` range
                   If not specified, excitement stays unchanged. See [the mood documentation](../mood.md)

#### Match string

Match conditional logic is expressed in a string with a C++/Python/JavaScript/...-like syntax:

```javascript
lastseen("trigger") < 12.0
```

```javascript
prop.is_docked == True
```

```javascript
random(0, 1000) < 12
```

```javascript
trigger.aparam == 'Some value'
```


- operators: `<`, `<=`, `>`, `>=`, `==`, `!=`
- literals:
  - string: single or double-quoted: `"I am a string"` or `'I am s string too!'`
  - numbers: integers or floating point: `10`, `3.14`, `-2.45012076e-10`
  - booleans: `true` or `false`
- functions:
  - `lastseen`: takes a string containing the name of a trigger as a parameter,
                returns the time (number, in seconds) since the black box last saw that trigger
  - `lastcalled`: takes a string containing the name of a task as a parameter,
                  returns the time (number, in seconds) since the task was last called
  - `random`: takes two numbers `(a, b)` as input and returns a number in the `[a, b)` range
              (i.e. a floating point number between `a` included and `b` excluded).
- properties: they start with `prop.`, and are followed by the property name.
              Properties can be booleans, numbers, or strings
- trigger parameters: they start with `trigger.` and are followed by the parameter name.
                      Trigger parameters can be booleans, numbers, or strings

#### Special properties

The following properties have a special meaning and always exist:

- `task`: (string) name of the currently running task
- `priority` (integer) priority level of the currently running task


#### Additional notes

- for any optional field, a value of `null` is equivalent to omitting the field entirely

## Implementation notes

#### Boolean values in match strings

- case should be ignored, e.g. `True`, `true`, `TRUE` shall all be valid and mean the same thing
