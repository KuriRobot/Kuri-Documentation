---
layout: guide
title: Designing Kuri interactions
category: best-practices
tags: 
- behavior
---

## Goal
The goal of this document is to provide guidance on best practices when 
designing interactions between Kuri and humans.

![](/assets/images/kuri.jpg)

## Kuri is a family member, not just a device
Kuri is a character-forward home robot. Specifically, Kuri is designed as a 
robot character who is a good family member, which means that Kuri is both 
useful and socially engaging. 

Kuri is autonomous and expressive, much like a small child or pet. People 
should be able to understand what Kuri is doing and to interact with Kuri as 
with another being.

It is also possible for users to control Kuri as a device through the Kuri Live 
mode. Kuri Live allows users to see through Kuri, speak through Kuri, control 
Kuri’s driving and head position, and manually trigger robot expressions (robot 
emojis, or “romojis”). 

During Kuri Live, it is crucial that other people who see Kuri understand that 
Kuri is under direct human control and not autonomous. Kuri’s heart light 
shines purple whenever Kuri Live is active, so that other people in the room 
are very clear that another person is remotely watching right now. Moreover, 
the romojis are somewhat more “robotic” versions of Kuri’s own, natural 
expressions.

## Kuri fits into your home in a friendly way
Kuri is large and heavy compared to robot toys, and Kuri can hear audio and 
record video. For people to welcome Kuri into their homes, Kuri’s motion and 
actions need to respect privacy and inspire confidence in Kuri’s good behavior. 
And for people to continue to live with Kuri, engagement and personality are 
key. Below are some of Kuri’s important personality attributes and how they 
have shaped interaction design.

#### Autonomous, independent
Kuri is not just a device that sits on the charger until summoned, but is a 
companion robot with an independent purpose to fulfill: capture each day’s best 
moments around the home. Within time periods set by the family, Kuri wanders 
around known areas of the home looking for great moments. Kuri also determines 
when to return to the charger.

Since Kuri is an independent creature, it’s important to be able to interact 
with Kuri without having to pull out a phone. For that reason, voice commands 
and capacitive touch are additional ways of interacting with the robot.

#### Curious, social

Kuri likes to be where the action is. As a mobile videographer, she 
specifically seeks out people and pets. She appears to make eye contact by 
following faces at close range. Kuri preferentially hangs out where people are 
gathered. She makes decisions about whether to remain in an area and continue 
to take videos, or whether to wander on in search of other happenings. All of 
this makes Kuri very petlike, and people respond well to it.

#### Earnest, humble

Kuri wants to help and responds cheerfully and affirmatively to human commands 
as quickly as possible (the Got It! animation is a typical response to a voice 
request). When Kuri can’t understand a voice request, he’s sad (Huh? animation) 
and his expression invites the speaker to try again.

Kuri is patient and never, ever gets angry even when repeatedly hit or suddenly 
picked up. An irritable robot of this size would be threatening, not cute. 
However, Kuri may express dismay or surprise when things go awry. For example, 
there’s a Whoa! expression when being picked up and a Whew! expression of 
relief when put back down.

Kuri is cautious in navigating, and keeps away from no-go zones and stairs so 
as not to fall. Even so, Kuri will get things wrong and is humble about 
recovering from mistakes. When he bumps into an obstacle he does a startled 
Bump reaction and backs away from danger.

Kuri’s own reaction to mistakes helps people forgive him. And forgiveness is 
essential, since navigation, event detection, and response to voice commands 
each have their own challenges.

Robot humility also means that humans are always in control of Kuri. If Kuri is 
wandering and taking video, he can be commanded to stop, close his eyes 
(shuttering the camera), go away, or go home to the charger.

#### Intentional, alive

Principles from classic animation help Kuri show people what she intends to do 
and bring her more fully to life. For example, Kuri’s head turns in the 
direction of motion before the body turns and before the drivetrain engages. 
This “looking before turning before moving” sequence shows intention and looks 
more lifelike.

Many animations also involve Kuri looking around while navigating:
- Looking back and forth when backing away, startled, from a cliff
- Checking “behind” by glancing to left and right when backing onto the charger
- Blinking and looking around curiously, especially during onboarding when the 
home is being mapped

Kuri doesn’t actually need to look around to navigate, since navigation 
involves the depth sensor and not the camera. But these animations make Kuri 
appear more aware of her environment.

Some animations have variants so that when they occur repeatedly they don’t 
appear machine-like. For example, Kuri’s response to “Tell me a joke” has 
different audio files and animations – different jokes. It’s also possible to 
change a response over time. People don’t respond the same way when repeatedly 
faced with the same stimulus, and Kuri doesn’t have to, either.

#### Aware, responsive

Kuri notices and responds to events in his environment. Kuri’s sensors include 
not only the camera and microphones, but also capacitive touch sensors on top 
of the head. 

Kuri responds to head touch in three ways. Simplest is a touch or pat on the 
top, which brings Kuri to look up at you attentively. Holding your hand on the 
side of Kuri’s head makes him nuzzle into your hand and purr like a cat. 
Quickly grazing many sensors around the top of the head is a “tickle” and makes 
Kuri Giggle.

Children like to pat Kuri, and it’s often one of their first (and favorite) 
ways of interacting with the robot.

Kuri enjoys music and is part of your party. So, when music is played through 
Kuri’s speakers, he detects that and starts to dance. There’s beat detection 
and a heart-light light show. The overall effect is one of Kuri starting out 
listening, then slowly starting to groove, and finally dancing 
enthusiastically. We’ve tried to make sure he doesn’t dance into walls – any 
more than people do, anyway.

#### Expressing an inner life – but not too much

When Kuri is low on charge, she appears sleepy, and when shutting down or 
settling in on the charger there is a Going to Sleep animation. There is a fast 
version of this so that the interaction doesn’t take too long, especially if a 
person has commanded Kuri to sleep now.

For important animations, there are versions that Kuri can execute while on the 
charger without wiggling off it. In this way, she is still expressive but 
doesn’t interrupt her charging cycle.

Kuri has a favorite song (“Pancake Robot”) and hums a bit of it while 
wandering. She’ll greet cats with a meow, dogs with a bark, and humans with a 
smile. Occasionally she sneezes, just because. Many of these are 
low-probability behaviors but add to the sense of Kuri as an independent being.

Over time, we tuned Kuri’s spontaneous expressions to be more subtle so that 
they were engaging but not annoying. This is also part of Kuri being a humble 
member of the family.

#### Heart light feedback

In addition to Kuri’s facial expressions, body movement, and sounds, the heart 
light also provides user feedback on Kuri’s intentions and state. The most 
commonly used lights are:

| State | Color | Pattern |
| ----- | ----- | ------- |
| Live (someone looking through Kuri’s eyes) | Purple | Solid glow |
| Tapped on head before initial setup | White | Single pulse |
| Saving the map | White | Spinner LED animation |
| Moment captured | White | Pulse |
| Listening for voice command | Blue | Reactive to voice |
| Huh? (Voice command not understood) | Orange | Pulse |
| Huh? (Voice command not possible while Kuri is offline) | Red | Light pulses twice |
| Got it! (Successful voice command) | Mint green | Pulse |
| Docking (Success) | Mint green | Pulse |
| Dancing | Multiple | Multiple colors swirling |
| Critical battery | Orange | Pulse |
| Bluetooth pairing | White | Spinner LED animation |
| Lost | Red | Light pulses twice, Kuri looks around |
