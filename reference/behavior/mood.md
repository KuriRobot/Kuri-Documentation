# Mood
Kuri's mood is maintained on two orthagonal axes
```
             Excited
                +
               / \
              /   \
         Sad -  0  + Happy
              \   /
               \ /
                -
              Calm
```

Activities like [picking kuri up](events/picked_up.md) and patting Kuri on the head will affect Kuri's mood.  Over time, Kuri's mood will automatically shift towards Neutral (0), Calm.

## Interactions that move Mood
* [Picking kuri up and putting kuri down](events/picked_up.md) will:
    * Increase excitement
    * Decrease happiness
* [Touching Kuri's head](commanded_behavior/at_attention.md) will:
    * Decrease exitement
    * Increase happiness

## Mood Decay
Kuri's mood will decay from Happy/Sad to Neutral (0) and from Excited to Calm naturally over time.

* From maximum *Sad*/*Happy*, Kuri will take 3 minutes without any mood updates to decay to Neutral (0)
* From maximum *Excited*, Kuri will take 6 minutes without any mood updates to decay to *Calm*
