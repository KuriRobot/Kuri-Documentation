---
layout: guide
title: Using the vision bridge and modules
category: advanced
tags: 
- vision
---

## Goal
Understand how to work with vision bridge and modules. Starting with simple interaction, to configuration, to changing the object detector model.

## Overview
- The vision bridge takes frames from an Image topic or a socket provided by madmux. These are processed by vision modules. Results are gathered and published for the frame as a whole.
- The modules can be activated, deactivated and partially configured while the node is running through the `/vision/cmds` service. Full configuration of the bridge and the modules are done through the the .yaml files under the config directory. These are loaded during launch of the node.
- The face detector and the general object detector both use caffe models. It is possible to change the models as long as the input and output are compatible, and the model can successfully be compiled and run by caffe opencl.

## Configuration of the vision bride and modules
The configuration files are located in the vision_bridge package under the config directory.

#### vision_bridge
- Change frame source: 
    A socket will be used if he madmux_socket parameter is populated (not ""). Whatever path is listed here will be opened on node launch. If it is not populated, the image_sub_topic parameter will be used. This defaults to `webrtc/local/upward` if not present. This topic must publish Image messages.
- Change fps:
    The maximum fps any module can run is that listed under fps in vision_bridge.yaml. The fps for a module must be less or equal to this.
- Change resolution:
    The base resolution is configurable here. This is what the frame will be resized to before being prepared for individual modules. 
- Disable modules:
    A module can be disabled by removing it from the available_modules list.
- Block or unblock frame processing through `joint_states`:
    Frames are not processed while `joint_states.position[0]` (eyelids) are greater than `eyelid_position_max`. This can be disabled by setting this parameter high, for example, at 10. This could be modified to a different state by changing the `joints_sub_topic` or changing what is published at `position[0]`.

#### All modules
- Change fps:
    The fps can be changed to a value less than or equal to that of the vision_bridge. The modules are aligned to run on the same frames if possible. This occurs if they have the same fps or one is a multiple of another.
- Change priority:
    If you want aligned modules to run in a particular order (say one is dependent upon the output of another), you can do this through priority. Lower values are run before higher values.
- Change resolution: 
    Changing the module resolution will resize the frame from that of the vision_bridge to whatever is configured.
- Change the model:
    The model is found by combining the paths under models_path and model. 

#### face_detector
- Change the model:
    The model must conform to the MTCNN pattern of P, R and O nets. 
- Model settings:
    The resolution settings under the model configure the image pyramid the face detector uses. The width and height are the top of the pyramid. The scale_factor is multiplied by the resolution of the previous pyramid layer. The min_size governs how small a layer can be before the pyramid is finished. Note that changes to this will require a recompilation of the model. To more easily trade off between detection distance and processing time, use the skip_count under the detector key. This skips processing of the top N layers of the pyramid, which on its own does not require recompilation.
- Detector settings:
    The batch_size settings control how many of the refinement and output networks to batch. As changing the batch size sigfnicantly slows processing, there is a tradeoff between how many to run in a batch. These can be changed if you have very few or very many faces in view.
    The method and nms listed parameters are used to merge results from the pyramid of region proposals. The current settings are effective at reducing the number of proposals without significantly effecting accuracy for a small number of faces in view.
- Tracker settings:
    These govern how the LK tracker operates between detected frames. The tracker will always run, even if the ratio is set to zero, it will just be used to reconcile detections. The tracked points are the keypoints output by the detector.

#### object_detector
- Change the model:
    The model must be compatible with ssd. The model and classes can be changed as normal for caffe (look in the directory for the model as configured in object_detector.yaml). The classes must also be updated in the .yaml.
- Features and clustering:
    The module can also publish features from a model layer and perform cosine similarity based clustering upon them. The feature_layer must match that in the caffemodel. Understand that cosine similarity will be very expensive when many features are published, which can be ammeliorated though the feature_skip parameter.
- Excitement:
    This is a value generated through combining the detections to roughly measure how cluttered the view is. This is calculated through the excitement_thresholds and label_paramters.

#### image_quality
- The only configuration available is the values used to cast the sharpness value to [0,1].

## Activating, deactivating and configuring modules at runtime
All of these tasks are done through the /vision/cmds service. A list of commands can be provided to perform multiple requests at once. Configuration and parameters can be updated at the same time. To get a list of configuration and parameters that can be changed at runtime, use the ``/vision/get_config`` and ``/vision/get_params`` services.

#### Example: Activate 2 modules with config and params

```sh
rosservice call /vision/cmds '[["activate", "face_detector", ["fps": 6], ["skip_ratio", 3]], ["activate", "object_detector", ["fps": 6], []]]'
```

#### Example: Deactivate 2 modules
```sh
rosservice call /vision/cmds '[["deactivate", "face_detector", [], []], ["deactivate", "object_detector", [], []]]'
```

#### Example: Deactivate all running modules
```sh
rosservice call /vision/cmds '[["clean", "", [], []], ["deactivate", "object_detector", [], []]]'
```

## Changing the object detector model
This is a more complicated but could, for example be used to add a new class to the object detector.
- First, you will need to generate or modify a model compatible with [opencl caffe](https://github.com/01org/caffe). It must have input and output layers consistent with the current model. If you are familiar with training or finetuning caffe models this should be an approachable task.
- Once you have a model, you will need to either replace or add it to the model path configured in object_detector.yaml. Follow the pattern of the current one.
- To run the model, you will need to allow the vision_bridge to write new compiled kernels to the disk. This can be done by allowing write access to the directories under `/usr/share/caffe`. When the model first runs, it will compile and write the kernels here which can take several minutes depending on the model.