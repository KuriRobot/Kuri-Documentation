# Internal Relocalization Behavior

Kuri's actions to relocalize herself is an interplay of two things: events that
cause her to be confused about where she is, and her attempt to get somewhere.

Currently, her belief of where she is becomes less certain when she's picked
up, and when the lost detector fires. In response, if Kuri is asked to go
anywhere, she will go in the direction which she believes the goal is based on
where she believe she is. And as she drives, she then figures out more about
where she is because of new things that she sees, and that increased certainty
then might cause her to think that she is now at a different location in her
map, and that she needs to drive in yet a different direction to get to her
original goal.

So it is because of anomalous events that Kuri become less certain about where
she is, i.e. lost, and it is by driving, i.e. collecting more data, that she
can figure out where she is again.


## Reponses to Events Disrupting Localization

Kuri will attempt to relocalize, i.e. adjust her belief of where she is in her
map, whenever she detects an event signaling that she might not be where she
think she is. Currently, there are two events that will trigger relocalization:

* When picked-up, and then placed on the ground.
* When the lost detector transitions from tier 1 lost or not lost to tier 2
  lost, and Kuri is on the ground.

In response to the first event, where Kuri is physically transported, Kuri
will, upon being placed on the ground, guess that she is where she was but with
much less confidence, because we are hoping here that the user did not move
Kuri far from where she was, and that when on the ground, she will be able to
more precisely figure out where she is based on depth sensor readings.

In response to the second event, Kuri will guess that she could be anywhere in
the mapped environment.

Note that both of these responses cause changes only in Kuri's belief of
where she is. She does not perform any actions to disambiguate her beliefs
until she is asked to autonomously navigate somewhere. Although, these belief
changes could also happen *while* Kuri is autonomously navigating.

## Navigation While Lost

If Kuri is more confused about where she is because of the events above, when
she is told to navigate somewhere autonomously, she might initially go in the
wrong direction to get to that goal. And as she moves, her beliefs will change,
and will cause her to change direction. This will repeat until her belief of
where she is actually matches her real location in the world, or she gives up
navigation.

## Docking While Lost

Kuri's behavior is the same as in the previous section except that if Kuri
detects a dock using her ILS sensor, she will terminate navigation, and attempt
ILS docking. As docking is much more persistent than normal navigation, Kuri
will look like she's trying much harder to relocalize. Note that this also
means that Kuri will likely to dock with any dock she discovers while lost.

# External Observable Behavior

When picked-up, and then put down on the ground, if Kuri was placed on the
ground far from where she was (more than 1 meter), and then told to navigate,
if what she sees with the depth sensor does not match her guess, she will
decide that she is lost, and then drive in a random direction. This will repeat
until she is sure of where she is, or until she believes she has reached her
goal.

In addition, while navigating, if Kuri believes that she is lost, she will
exhibit the same drive-in-a-random-direction behavior.


## Lost Detector

The lost detector has 3 states:

* `normal`: Kuri believes she knows where she is, and that everything is
  normal.
* `confused`: Kuri is uncertain about where she is momentarily.
* `lost`: Kuri has been uncertain about where she is for a while now, and
  is probably not where she think she is.

To see what the current lost status is echo the content of the lost status
using ROS:
```
rostopic echo /lost_detector/status
```

## MQTT Localization Statuses

The lost *service* (there's a distinction between this and the lost
*detector*), is responsible for merging noisy lost detector outputs with
knowledge of whether the robot was kidnapped to determine if the robot is
actually lost, and sets this result as a status in the `LOCALIZATION` domain
over MQTT. There are four level of statuses:

* `LOCALIZATION_NORMAL` (tier 0): Everything is normal.
* `LOCALIZATION_CONFUSED` (tier 1): Kuri is a little confused about where she
  is.
* `LOCALIZATION_LOST` (tier 2): Kuri believes that she is lost, and is trying
  to recover her pose if she is moving.
* `LOCALIZATION_NEED_HELP` (tier 3): Kuri believes that she is lost, has tried
  recover her position, has failed, and now needs assistance. NOTE: this status
  is currently not implemented.

The specific mapping between kidnapped and lost detector status to MQTT
status is summarized in the file `app/src/gizmo/services/lost.py`. In addition,
each localization status has a data payload of the following format:

```python
{
    'lost_detector_status': 'normal'/'confused'/'lost',

    # Whether Kuri considers herself lost, and will admit that she lost when
    # asked "Hey, Kuri are you lost?" Note that Kuri will not wander while
    # lost.
    'is_lost': True/False,

    # Whether Kuri has been "kidnapped" (picked up for more than 2 seconds)
    # and has not been back to her dock.
    'kidnapped': True/False,
}
```

The status will be sent whenever it changes, or an element of the data payload
changes.

### Getting lost
* The robot has been kidnapped, meaning that it has been picked up more than 2
  seconds, and has not yet returned to the dock.

### Getting un-lost
* The robot is placed on its dock.
