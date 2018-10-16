---
layout: reference
title: oort_ros
package: oort
category: node
tags:
- oort
- slam
- mapping
---

## Description

2D laser-based SLAM package for Kuri. To map using Kuri's low-cost depth sensor with its limited range and resolution, Oort formulates the 2D SLAM problem with [switchable constraints](https://nikosuenderhauf.github.io/assets/papers/ICRA13-comparisonRobustSLAM.pdf) (with [Ceres](http://ceres-solver.org) as the optimizer) using primarily [libfrsm](https://github.com/abachrach/frsm)'s scan matcher as a front end to generate graph links. The final map rendering process uses a combination of [Cartographer](https://github.com/googlecartographer/)'s probability grids and OpenCV to generate maps appropriate for navigation. Beyond basic mapping, Oort supports:

* Looking for loop closure hints using Kuri's dock.
* Mapping over multiple sessions.
* CRD (create, read, delete) operations over pointers to 2D locations in the map.


Note that although Cartographer's scan matchers have been integrated and
can be selected in Oort's configuration (`params.json`), they tend not to work as robustly in this setting; with limited resolution sensors, libfrsm's matching using detected line segments is often more reliable.

To support multi-session mapping, Oort stores its maps as [Cap'n Proto](https://capnproto.org/) (a relative format of protobuf) files. The Cap'n Proto definition is included at the end of this document for reference. Each new session needs an approximate start pose (refined internally by scan matching), and is added as a separate chain of graph nodes that may or may not have loop closure links to the existing graph.

## Running

To run the ROS node do:

```bash
rosrun oort oort_ros scan:=scan_reduced_mapping
```

To process bags online, in separate terminals, do:

```
roscore
rviz
rosbag play --clock yourbagname.bag
rosparam set use_sim_time true
rosrun oort oort_ros scan:=scan_reduced_mapping
```

Note that normally Kuri's main process assumes that it has sole control of `oort_ros`, and so changing the map representation using Oort's services independently while it's running as part of Kuri's nodes is not advised. It's much better to run Oort while the rest of Kuri's processes have been shutdown with `sudo service gizmo stop`.

## Basic Usage

### Making a map and storing locations while doing it

```bash
# Launch Oort with robot at the dock.
rosservice call oort_slam/map/start "/home/account/map.capnp"
rosservice call oort_slam/graph_loc/create "dock"
# ... drive robot around to map.
# (optional) rosservice call oort_slam/graph_loc/create "waypoint"
# ... drive robot back to dock.
rosservice call oort_slam/map/notify_docked
rosservice call oort_slam/map/stop
# Start localizer (amcl) and wait till the below returns true.
rosservice call oort_slam/graph_loc/is_ready
# (optional) rosservice call oort_slam/graph_loc/create "waypoint"
```
The dock related calls are optional but highly suggested to make good maps.

### Starting a new mapping session with a map made or already loaded

```bash
rosservice call oort_slam/map/clear
rosservice call oort_slam/map/start "/home/account/new_map.capnp"
# ... same as above
```

### Running with a pre-made map

```bash
# Launch Oort
rosservice call oort_slam/map/load "/home/account/new_map.capnp"
# Start localizer (amcl) and wait till the below returns true.
rosservice call oort_slam/graph_loc/is_ready
# (optional) rosservice call oort_slam/graph_loc/create "waypoint"
```

### Docks
Docks are treated as locations that live under the namespace "dock". For on-boarding purposes, clients would use the following sequence:

```bash
rosservice call oort_slam/graph_loc/create dock  # After docking for the very first time.
rosservice call oort_slam/map/notify_docked  # For subsequent dockings, so that Oort knows to loop close.
```

### Saving/Loading Maps & Locations

The nominal sequence for creating new maps starts with calling `map/start` with a path and then calling `map/stop`.

```bash
rosservice call oort_slam/map/start "/home/account/map.capnp"
# ... drive robot around
rosservice call oort_slam/map/stop
```
Oort will save a map to the path given after processing the first `map/start`, every 15 seconds, whenever it
processes a command to create/delete/clear locations, and when `map/stop` is called.

To load a map:

```bash
rosservice call oort_slam/map/load "/home/account/map.capnp"
```

After a `map/stop` or `map/load` call, Oort will listen for transforms between the sensor and map frame to
support location services and will save a new map file to the path supplied (to either `map/start` or `map/load`)
whenever changes to locations are made using create/delete/clear calls.

> **NOTE:** This means that loaded maps will be modified (overwritten with new versions) whenever the locations inside are modified.

### Resume Mapping

First, load a map:

```bash
rosservice call oort_slam/map/load "/home/account/map.capnp"
```

And then call resume with a new path and a known pose:

```bash
rosservice call oort_slam/map/resume "new_map_loc: '/home/account/new_map.capnp'
pose:
  x: 0.0
  y: 0.0
  theta: 0.0"
```

## Subscribed Topics

#### `scan`
[sensor_msgs/LaserScan](http://docs.ros.org/api/sensor_msgs/html/msg/LaserScan.html)

#### `tf`
[tf/tfMessage](http://docs.ros.org/api/tf/html/msg/tfMessage.html)

## Published Topics

#### `/tf`
[tf/tfMessage](http://docs.ros.org/api/tf/html/msg/tfMessage.html)

#### `map`
[nav_msgs/OccupancyGrid](http://docs.ros.org/api/nav_msgs/html/msg/OccupancyGrid.html) [Latched](http://wiki.ros.org/roscpp/Overview/Publishers%20and%20Subscribers#Publisher_Options)

#### `~/queue_size`
[std_msgs/Int64](http://docs.ros.org/jade/api/std_msgs/html/msg/Int64.html)

Number of messages (laser scans, & start/stop/pause/etc requests) that's
currently in Oort's queue on systems where sensor processing lags behind
realtime.

#### `~/file_changed`
[std_msgs/String](http://docs.ros.org/jade/api/std_msgs/html/msg/String.html)

Notification for when Oort write the map & metadata file to disk or just the
metadata file. Will contain either `map` or `meta` as values.

## Required Transforms

#### `/hokuyo_laser_link` => `/base_footprint`
Position of laser on robot. Required once on startup.

#### `/hokuyo_laser_link` => `/odom`
Position of laser according to odometry. Required to be published as often as
there are laser scans.

#### `/hokuyo_laser_link` => `/map`
Position of the laser frame in the map frame but only when Oort is NOT mapping.

## Output Transform

`/odom` => `/map`, position of the odom frame in the map frame but only when Oort is mapping.

## Services

### Mapping Session Management

#### `map/start(map_path)`
oort_msgs/SetString

> **IMPORTANT!!!** This must be called once to tell Oort to start mapping, otherwise, it'll sit there and do nothing.

* `map_path` should be a `/fully/qualified/absolute/path/map.capnp` and sets the path for map saving triggered by other service calls. An empty string will tell Oort to not save anything to disk.
* Begins publishing maps to `map`, and `odom => map` to `tf`.
* Also used to resume after `map/pause`.
* Triggers map saving every 15 seconds.
* `map/state` will return `mapping` after this takes effect.

#### `map/load(map_path)` 
oort_msgs/SetString

* `map_path` should be a `/fully/qualified/absolute/path/map.capnp`.
* Instead of calling `map/start`, call this to load a map made in a previous mapping session.
* Has similar effects as `map/clear` in that it'll clear out any currently active mapping session (but it'll replace the current map with a loaded map).
* Begins publishing maps to `map`, and **listens** for `odom => map` **from** `tf`.
* `map/state` will remain `not_mapping`.
* `map/has_map` will return true.
* If `map_path` is invalid (doesn't exist, fails md5 checksum, etc), the service call will fail.

#### `map/resume(map_path, pose2d)` 
oort_msgs/MapResume

* Assumes that client has `map/load()`ed a map.
* `map_path` should be a `/fully/qualified/absolute/path/map.capnp` to a file where the new map will be saved.
* Pose2D should be pose of the sensor frame in the map frame.
* Instead of calling `map/start`, call this to resuming mapping on a previously created map at the given pose 2D.
* Begins publishing maps to `map`, and `odom => map` to `tf`.
* Triggers map saving every 15 seconds.
* `map/state` will return `mapping` after this takes effect.
* `map/has_map` will return true.

#### `map/notify_docked()`
std_srvs/Empty

* Notifies Oort that the current position is the dock that it saw earlier.
* Links the closest dock node and the current node in the map.
* Should be used in conjunction with `graph_loc/create dock`.

#### `map/pause()`
std_srvs/Empty

* Can publish new maps to `map` if there are any queued, and will provide old maps as `map` is a latched topic.
* Continues publishing the last known `odom => map` to `tf`.
* Mapping can be resumed again by calling `map/resume_from_paused` or `map/start`.
* Used when input laser scan & tf data are not reliable (e.g. when robot is picked up).
* `map/state` will return `paused` after this takes effect.

#### `map/resume_from_paused()`
std_srvs/Empty

* Used for resuming mapping after pausing. This call inserts node with a large
  covariance link in the graph so that the optimizer knows that the pose is
  uncertain due, presumably, to interruptions such as the robot being picked up
  while mapping was paused.
* Resumes publishing maps to `map`, and `odom => map` to `tf`.
* Re-triggers map saving every 15 seconds.
* `map/state` will return `mapping` after this takes effect.

#### `map/stop()`
std_srvs/Empty

* Publishes maps to `map`, and `odom => map` to `tf`.
* Does not publish to `tf`.
* This call exists to allow future implementations of Oort to save maps to disk/close maps when stopped.
* `map/state` will return `not_mapping` after this takes effect.
* Triggers map saving.
* **IMPORTANT**: Blocks until Oort finishes processing all mapping inputs so far.
This means that `queue_size` needs to go to zero before `map/stop` will return.

#### `map/clear()`
std_srvs/Empty

* Stops mapping & clears any map made and ALL known locations.
* To map again, clients have to start over with `map/start`.
* `map/state` will return `not_mapping` after this takes effect.

#### `map/state() => string`
oort_msgs/GetString

* Current mapping state. Is either `mapping`, `paused`, or `not_mapping` with
`not_mapping` being the default value on startup.

#### `map/map() => nav_msgs/OccupancyGrid`
oort_msgs/GetMap

* Returns most updated occupancy grid map.
* Will wait up to 10 seconds for a map if one is not available. When this call
time out, it'll return false, resulting in a `ServiceException`.

#### `map/name() => string`
oort_msgs/GetString

* Returns the current path used for map saving.

#### `map/has_map() => bool`
oort_msgs/GetBool

* True whenever at least one start_map/stop_map pair has been called.

#### `map/republish_maps`

* Republish currently loaded map.

#### `map/num_nodes`
oort_msgs/GetUInt

* Number of nodes in current map.


### Locations

A location is a 2D (x, y, theta) pose stored by Oort in the reference frame of
the closest graph node while mapping. Storing 2D poses as relative poses in the
graph in this way makes sure that as SLAM warps the map during updates, 2D poses
stored will move with the map rather than left behind (which is what would
happen if they instead were anchored to a global reference frame).

Here, each location has a namespace which it gets created under so that
different clients can create namespaces for their own set of locations. To use
this API, clients would first ask Oort to `create()` a location at the current
map pose and then clients would then call `locate()` on the UUID returned to
get the current estimate of that location.

#### `graph_loc/create(string nspace, string id)`
oort_msgs/LocCreate

* Records the current position in the graph.
* ID can be used to look up location's (x, y, theta) pose.
* Will fail (throws ROS Service Exception) if `graph_loc/is_ready` is false.
* Triggers map saving.
* **IMPORTANT** If Oort is backed up (`queue_size` topic has values larger than 1), the returned UUID can only be used for pose lookups once Oort catches up to the time the location creation request was made.

#### `graph_loc/create_points([pt_1..., pt_n], [ns_1..., ns_n], [id_1..., id_n])`
oort_msgs/LocCreatePoints

* Given a set of points in the map's coordinate frame, each with a possibly different namespace, each with its own ID,
create a location for each point such that all the resulting locations are attached to the same
graph node. This selects the graph node to attach to by looking for the node closest to the
geometry center of the given points array.
* The given IDs can be used to look up each location's (x, y, theta) pose.

#### `graph_loc/is_ready() => bool`
oort_msgs/GetBool

* True if `graph_loc/create` is currently supported.
* Clients should check this after calling `map/stop` or `map/load` **before** calling `graph_loc/create`.
This is because while SLAM is not running, Oort does not have localization information to allow it to know
where on the SLAM graph a location should be attached. To make locations work, Oort listens to transforms between the
`hokuyo_laser_link` and `map` frame to get the current pose of the robot. As Oort depends on an outside source for these
transforms, waiting until `is_ready` returns true ensure that when clients call `graph_loc/create`, Oort will be able
to create the location.

#### `graph_loc/list(string nspace, bool use_as_prefix) => [id_1, ...], [ns_1, ...] (array of strings)`
oort_msgs/LocNamespace

* Returns array of UUIDs for locations stored under this namespace and the namespace each location is defined under.
If use as prefix is True, list ids in all namespaces with `nspace` as prefix.

#### `graph_loc/list_namespaces() => [ns1, ...] (array of strings)`
oort_msgs/GetStrings

* Returns all namespaces known to Oort.

#### `graph_loc/delete(string nspace, string id) => (bool)`
oort_msgs/LocDelete

* Remove a place from the graph.
* Triggers map saving.
* Returns whether it was successful.

#### `graph_loc/locate(string nspace, string id) => pose (geometry_msgs/Pose2D)`
oort_msgs/Place

* Gets the pose for given place ID.
* Returns the pose as determined from our graph
* **IMPORTANT** This call will fail if Oort doesn't know about the location OR if Oort's sensor processing has not
caught up to populate the location with a valid relative pose estimate.

#### `graph_loc/clear(string nspace, bool use_as_prefix)`
oort_msgs/LocNameSpace

* Remove all places stored. If use as prefix is True, will additionally remove all namespaces with `nspace` as prefix.
* Triggers map saving.


## Parameters

Included below is the `params.json` file included with Oort, but with
explanatory comments (these aren't provided in the actual file itself as json
doesn't quite support comments).

```
{
    # Robot's TF frame, used to relate to odom frame.
    "base_frame": "base_footprint",

    # Odom's TF frame.
    "odom_frame": "odom",

    # Frame of the depth sensor/laser scanner.
    "sensor_frame": "hokuyo_laser_link",

    # Frame of the map.
    "map_frame": "map",

    # Amount of linear translation of base_frame in odom_frame (in meters)
    # before creating a new graph node.
    "linear_update": 0.2,

    # Amount of angular rotation (in radians) of base_frame in odom_frame (in
    # meters) before creating a new graph node.
    "angular_update": 0.6,

    # Point clouds with less points than this will not be used by Oort for
    # mapping.
    "min_pointcloud_size": 3,

    # Scalar to apply to switchable constraint prior's error.
    "switchable_constraint_scale": 2,

    # Scale on prior constraint for switching variable. By default, switching
    # variables are biased to to turn on so larger values make turning off loop
    # closure constraints more expensive, and thus less likely.
    "switchable_constraint_scale": 2,

    # Params controlling what published rendered maps look like.
    "output_map": {

        # Params controlling rendering laser hits to a probability grid.
        # Mostly from https://google-cartographer.readthedocs.io/
        # en/latest/configuration.html#cartographer-mapping-2d-proto-rangedatainserteroptions
        "probability_grid": {
            # Resolution of map to generate in meters.
            "resolution": 0.05,

            # If ‘false’, free space will not change the probabilities in the
            # occupancy grid.
            "insert_free_space": true,

            # Probability change for a hit (this will be converted to odds and
            # therefore must be greater than 0.5).
            "hit_probability": 0.55,

            # Probability change for a miss (this will be converted to odds and
            # therefore must be less than 0.5).
            "miss_probability": 0.49,

            # Whether to interpret inf readings as evidence of freespace.
            "clear_infs": true,

            # Distance in meters to clear when processing inf readings.
            "inf_clear_dist": 0.5
        },

        # Params controlling thresholding of generated probability grid to
        # create ROS OccupancyGrid
        "threshold":
            {
                # Max occupancy probability for a cell to be labeled freespace.
                "max_free": 48,

                # Min occupancy probability for a cell to be labeled occupied
                "min_occupied": 55
            },

        # Footprint of robot in meters to use for clearing OccupancyGrid in
        # spots where the robot traveled. Helpful for keeping doorways &
        # hallways navigable.
        "robot_radius": 0.15,

        # Strategy to use for clearing speckle noise in final rendered map.
        # either "median" or "morphological".
        "speckle_strategy": "median",

        # In the morphological strategy, Oort splits the rendered map into a
        # map of freespace pixels, and another map of occupied pixels and then
        # it runs morphological iterations on each separately. The two maps
        # are then layered, with freespace first and occupied cells last.
        "morphological":
        {
            # Number of morphological iterations to run on freespace layer.
            "free_space_morpho_iterations": 1,

            # Number of morphological iterations to run on occupied layer.
            "occupied_morpho_iterations": 1
        },

        # In the median strategy, Oort runs a median filter.
        "median":
        {
            # Size of kernel in pixels.
            "kernel_size": 3,

            # Number of iterations of median filtering to run.
            "iter": 2
        }
    },

    # Params controlling how links between consecutive poses are formed in
    # graph.
    "incremental_graph_builder":
        {
            # Covariance to use in the x, y, and theta direction when falling
            $ back to using wheel odometry.
            "odom_cov_xx": 0.02,
            "odom_cov_yy": 0.02,
            "odom_cov_tt": 0.01,

            # Which scanmatcher to use.
            # Either "frsm_matcher" or "cartographer_matcher".
            "scanmatcher": "frsm_matcher",

            # Params when using libfrsm's scanmatcher. This scanmatcher tends
            # to perform better when the pointcloud is less dense as it's able
            # to connect points into line segments.
            "frsm_matcher":
                {
                    # Whether to show opencv debug viewer for the scanmatcher
                    # (need to run Oort in environment with X11 available to
                    # work).
                    "debug": false,

                    # Params for the debug viewer.
                    "debug_viewer":
                    {
                        # How much to scale up the debug viewer.
                        "viewer_scale": 4,

                        # Length of pose history to show.
                        "history_length": 30,

                        # Resolution of debug map.
                        "resolution": 0.025,

                        # Params for probability grid used by debug viewer (see
                        # "probability_grid" above).
                        "insert_free_space": false,
                        "hit_probability": 0.55,
                        "miss_probability": 0.49
                    },

                    # Unused.
                    "meters_per_pixel": 0.01,

                    # Unused.
                    "theta_resolution": 0.01,

                    # Max number of scans to keep as history in scanmatcher.
                    # Note: This is fairly important as it controls how much
                    # information the scanmatcher's incremental mini-map
                    # contains.
                    "max_num_scans": 20,

                    # Params from libfrsm (see
                    # https://github.com/abachrach/frsm/blob/master/src/libfrsm/ScanMatcher.hpp#L64)
                    "initial_search_range_xy": 0.01,
                    "initial_search_range_theta": 0.01,
                    "max_search_range_xy": 0.1,
                    "max_search_range_theta": 0.1,
                    "add_scan_hit_thresh": 0.95,
                    "stationary_motion_model": false,

                    # Standard deviation of motion model estimate. Below .1 the
                    # prior isn't used, and otherwise specifies the standard
                    # deviation for a Gaussian around the odometry estimate.
                    # This controls how closely scanmatching will try to keep
                    # to the odometry estimate.
                    "std_mot_model": 0.4,

                    # Amount to scale the covariance returned by the
                    # scanmatcher.
                    "scanmatch_cov_scale": 5,

                    # Amount to scale the covariance by when mapping is paused
                    # and then "resume from paused".
                    "inflate_scanmatch_cov_scale": 40,

                    # Amount to scale covariance by when a new mapping session
                    # is initiated. This type of resume mapping assumes that
                    # mapping was stopped and then restarted with a guess of an
                    # initial location.
                    "resume_scanmatch_cov_scale": 50,

                    # Unused
                    "sm_dist_accept_threshold": 0.06,

                    # Unused.
                    "sm_angle_accept_threshold": 0.07,

                    # Unused.
                    "min_sm_accept_score": 0.45,

                    # Params controlling whether we should trust scanmatching
                    # over initial odometry estimate.
                    "match_filtering":
                    {
                        # Unused.
                        "dist_accept_threshold": 0.06,

                        # Params below apply to difference in pose resulting
                        # from taking the scanmatcher's estimated pose and
                        # subtracting the estimated pose according to odometry.

                        # Mininum value of x translation to accept in meters.
                        # Used to keep from accepting results where the
                        # scanmatcher says that the robot has moved backwards.
                        "x_min_accept": -0.05,

                        # Maximum value of x translation to accept in meters.
                        # Used to filter out outlier scanmatcher estimates.
                        "x_max_accept": 0.12,

                        # Maximum absolute value of y translation in meters.
                        # As our robot doesn't translate sideways, this keeps
                        # Oort from accepting crazy scanmatching results.
                        "y_abs_accept": 0.11,

                        # Maximum absolute value rotation difference in
                        # radians to accept.
                        "theta_abs_accept": 0.07,

                        # Minimum score for scan matching result to be
                        # accepted.
                        "min_accept_score": 0.45
                    }
                },

            # Params when using cartographer's RealTimeCorrelativeScanMatcher.
            # Unused by default.
            "cartographer_matcher":
                {
                    "debug": false,
                    "debug_viewer_scale": 4,

                    "history_length": 30,
                    "resolution": 0.05,
                    "insert_free_space": true,
                    "hit_probability": 0.55,
                    "miss_probability": 0.49,

                    "linear_search_window": 0.1,
                    "angular_search_window": 0.1,
                    "translation_delta_cost_weight": 0.1,
                    "rotation_delta_cost_weight": 0.1,

                    "use_ceres_refinement": true,
                    "ceres_scan_matcher":
                    {
                        "resolution": 0.025,
                        "insert_free_space": false,
                        "hit_probability": 0.55,
                        "miss_probability": 0.49,

                        "occupied_space_cost_functor_weight": 20.0,
                        "previous_pose_translation_delta_cost_functor_weight": 1.0,
                        "initial_pose_estimate_rotation_delta_cost_functor_weight": 100.0,
                        "covariance_scale": 0.50,
                        "ceres_solver_options":
                        {
                            "use_nonmonotonic_steps": true,
                            "max_num_iterations": 50,
                            "num_threads": 1
                        }
                    },

                    "scanmatch_cov_scale": 10,
                    "inflate_scanmatch_cov_scale": 40,
                    "resume_scanmatch_cov_scale": 50,

                    "sm_dist_accept_threshold": 0.05,
                    "sm_dist_accept_x_min": -0.12,
                    "sm_dist_accept_x_max": 0.05,
                    "sm_dist_accept_threshold_y": 0.11,
                    "sm_angle_accept_threshold": 0.10,
                    # Minimum hit percent a scanmatch result has to have for it
                    # to be accepted (else Oort uses the odometry estimate).
                    "min_sm_accept_score": 0.0,

                    "use_second_stage_matcher": false,
                    "second_stage_matcher": {
                        "ceres_scan_matcher":
                        {
                            "resolution": 0.01,
                            "insert_free_space": false,
                            "hit_probability": 0.55,
                            "miss_probability": 0.49,

                            "occupied_space_cost_functor_weight": 20.0,
                            "previous_pose_translation_delta_cost_functor_weight": 20.0,
                            "initial_pose_estimate_rotation_delta_cost_functor_weight": 50.0,
                            "covariance_scale": 6.00,
                            "ceres_solver_options":
                            {
                                "use_nonmonotonic_steps": true,
                                "max_num_iterations": 50,
                                "num_threads": 1
                            }
                        },

                        # Max distance from odometry estimate scanmatching result
                        # can be before Oort falls back to using just the odometry
                        # estimate.
                        "sm_dist_accept_threshold": 0.051,
                        # Max angle from odometry estimate.
                        "sm_angle_accept_threshold": 0.07,
                        "min_sm_accept_score": 0.0
                    }
                }
        },

    # Params controlling loop closure searches.
    "loop_closure_graph_builder":
        {
            "candidate_search":
                {
                    # Number of k nearest neighbor candidates to search. Larger
                    # values increase CPU usage, but also increase number of
                    # loop closure matches.
                    "knearest_neighbors": 5,

                    # When considering a node's pointcloud as a loop closure
                    # candidate, how large of a neighborhood (in number of
                    # nodes on its chain) to use to build the submap for that
                    # node.

                    # And if a node is selected as a candidate,
                    # nodes within max(ceil(submap_neighborhood_size/2), 1)
                    # hops of that node will not be considered as loop closure
                    # candidates. This is as these nodes' scans are accounted
                    # for in the original node's submap.

                    "submap_neighborhood_size": 15,

                    # Given that nodes are given consecutive integer IDs, this
                    # parameter control how close a candidate node's ID can be
                    # before it's considered.
                    "closest_allowed_id_threshold_large": 30,

                    # If the k-nearest candidate search yields zero nodes
                    # using "closest_allowed_id_threshold_large", Oort runs
                    # a less restrictive search using this param.
                    "closest_allowed_id_threshold_small": 5,

                    # Unused.
                    "max_dist_allowed_threshold": 4.0
                },

            # Which scanmatcher to use to look for loop closures.
            # Either "frsm_matcher" or "branch_and_bound_matcher".
            "scanmatcher": "frsm_matcher",

            "frsm_matcher":
                {
                    # Minimum number of neighbors a node can have before it's
                    # rejected from being a candidate.
                    "submap_min_neighborhood_size": 3,

                    # Hit percent threshold for initial rough match.
                    "rough_match_hitpct_threshold": 0.3,

                    # Hit percent threshold for fine scale matching.
                    "fine_match_hitpct_threshold": 0.6,

                    "match_filter":
                        {
                            # If the node ID distance (difference in ID between
                            # candidate node and query node) is less than
                            # closest_allowed_id_threshold_large use thresholds
                            # below to decide whether to accept the loop closure
                            # match result. And for the params below, Oort
                            # defines the match difference as the difference
                            # between the candidate's pose according to the
                            # current estimate, and the pose the loop closure
                            # scanmatch predicts.

                            # If a match's hit percentage is at least
                            # "close_node_hitpct_threshold", and its match
                            # difference is distance less than
                            # "close_node_max_dist", and angle is less than
                            # "match_max_ang_diff", then accept the match.
                            "close_node_hitpct_threshold": 0.8,
                            "close_node_max_dist": 0.5,
                            "match_max_ang_diff": 2.09,

                            # If the node ID distance is equal or greater than
                            # "closest_allowed_id_threshold_large", use the
                            # params bellow to decide whether to accept
                            # candidate matches.

                            # If the hit percentage is greater than
                            # "match_hitpct_threshold", and the match
                            # difference is less than "match_max_dist", then we
                            # accept the match.
                            "match_hitpct_threshold": 0.7,
                            "match_max_dist": 0.5,

                            # If the hit percentage is greater than
                            # "match_hitpct_threshold_high", and the match
                            # difference is less than "match_max_dist_high",
                            # then we also accept the match.
                            "match_hitpct_threshold_high": 0.80,
                            "match_max_dist_high": 2.0

                            # Alternatively, if the candidate's estimated
                            # heading before scanmatching is in the opposite
                            # direction (controlled by
                            # "opposite_dir_threshold"), then use
                            # "match_hitpct_threshold_opposite_dir" and
                            # "match_hitpct_threshold_opposite_dir".
                            "opposite_dir_threshold": 1.74,
                            "match_hitpct_threshold_opposite_dir": 0.67,
                            "match_hitpct_threshold_high_opposite_dir": 0.75,
                        }
                },

            "branch_and_bound_matcher":
                {
                    "debug": false,
                    "debug_draw_original_cloud": false,
                    "debug_only_show_matched": true,

                    "submap_min_neighborhood_size": 3,
                    "global_localization_min_score": 0.21,
                    "min_score": 0.55,

                    "probability_grid":
                    {
                        "resolution": 0.05,
                        "insert_free_space": false,
                        "hit_probability": 0.55,
                        "miss_probability": 0.49
                    },

                    "adaptive_voxel_filter":
                    {
                        "max_length": 0.9,
                        "min_num_points": 150,
                        "max_range": 50.0
                    },

                    "fast_correlative_scan_matcher" :
                    {
                        "linear_search_window": 7.0,
                        "angular_search_window": 0.524,
                        "branch_and_bound_depth": 7
                    },

                    "ceres_scan_matcher":
                    {
                        "occupied_space_cost_functor_weight": 20.0,
                        "previous_pose_translation_delta_cost_functor_weight": 10.0,
                        "initial_pose_estimate_rotation_delta_cost_functor_weight": 1.0,
                        "covariance_scale": 0.125,
                        "ceres_solver_options":
                        {
                            "use_nonmonotonic_steps": true,
                            "max_num_iterations": 10,
                            "num_threads": 1
                        }
                    },

                    "match_filter":
                        {
                            "close_node_hitpct_threshold": 0.0,
                            "close_node_max_dist": 0.5,
                            "match_max_ang_diff": 2.09,

                            "match_hitpct_threshold": 0.0,
                            "match_hitpct_threshold_high": 0.0,

                            "opposite_dir_threshold": 1.74,
                            "match_hitpct_threshold_opposite_dir": 0.0,
                            "match_hitpct_threshold_high_opposite_dir": 0.0,

                            "match_max_dist": 0.5,
                            "match_max_dist_high": 2.0
                        }
                }
        }

    # Params for loop closure matching when Oort gets a hint that the robot
    # has returned to its dock (using the service call map/notify_docked).
    "dock_graph_builder":
        {
            # Number of nodes at the beginning of the graph to use to create a
            # reference submap for matching.
            "dock_submap_size": 31,

            # Number of nodes at the end of the graph to use to create a submap
            # to match to the dock reference submap.
            # IMPORTANT:
            # Should be smaller than dock_submap_size to avoid scenes with lots
            # of aliasing (like hallways).
            "dock_match_submap_size": 7,

            # Size of contacts on the dock. We need this as the robot will
            # report that it's on the dock whenever it touches any part of the
            # contact.
            "dock_contacts_size": 0.15,

            # Max distance we assume user will move dock between when we see
            # it.
            "dock_max_translation": 0.25,

            # Max distance we expect for loop closure constraints to the same
            # dock.
            "dock_match_max_dist": 0.4,

            # Minimum hit percent (overlap) before accepting a dock closure
            # hypothesis.
            "dock_match_min_hit_pct": 0.6
        }
}
```

## Cap'n Proto Map Definition

```
@0xfb2c8b83b3af128b;

using Cxx = import "/capnp/c++.capnp";
$Cxx.namespace("oort::capnp");

struct Point2d @0x86eb3abaf30b3dab {
    x @0 :Float64;
    # X coordinate. Can be nan or +inf.

    y @1 :Float64;
    # Y coordinate. If x is nan or +inf, stores the angle in radians of the
    # original sensor beam.

    z @2 :Float64 = 1.0;
    # Stores a homogeneous coordinate 1 for a valid point, or nan which
    # represents either:
    # 1. A point with normal x & y but is less than than min range or greater
    #    or equal to max range in the original laser scan message.
    # 2. A point with a nan or +inf range.
}

struct Pose2d @0xef9347c8a4ec3f3b {
    x @0 :Float64;
    y @1 :Float64;
    t @2: Float64;
}

struct Matrix3d @0x8bf10fa249db2c04 {
    v @0 :List(Float64);
}

struct Pose2dCov @0x8ca5f336b2fcc26d {
    pose @0 :Pose2d;
    cov @1 :Matrix3d;
}

struct Node2d @0xe51b2aac4150d637 {
    id @0 :UInt64;
    pose @1 :Pose2d;
}

struct Sensor2dConstraint @0x9e8d9650484abd02 {
    time @0 :Float64;
    # ID of node this constraint was calculated at (has no implications on the
    # direction of transforms).
    id @1 :UInt64;
    pose @2 :Pose2dCov;
    type @3 :Type;

    enum Type {
        laser @0;
        odom @1;
    }
}

struct Edge2d @0xdcbcc7844d8936a0 {
    id @0 :UInt64;
    i @1 :UInt64;
    j @2 :UInt64;
    # i_T_j
    props @3 :Sensor2dConstraint;
}

struct Edge2dSwitchable @0xaafd6e34d5cc28cf {
    id @0 :UInt64;
    i @1 :UInt64;
    j @2 :UInt64;
    # i_T_j
    props @3 :Sensor2dConstraint;
    switch @4 :Float64;
}

struct Graph2d @0xf0829dca2aeac818 {
    nodes @0 :List(Node2d);
    edges @1 :List(Edge2d);
    edgesSwitch @2 :List(Edge2dSwitchable);
}

struct PointCloud2d @0xf0211b9259d37f5f {
    # ID of node this pointcloud was captured at.
    id @0 :UInt64;
    points @1 :List(Point2d);
    time @2 :Float64;
}

struct Location @0xd16e2058832c0e78 {
    namespace @0 :Text;
    nodeid @1 :UInt64;
    nTsensor @2 :Pose2d;
    uuid @3 :Text;
}

struct IncrGraphResult @0x815530c5e1acb0df {
    # ID of node this result was produced at.
    id @0 :UInt64;
    target @1 :UInt64;
    # posecov: Pose in scan matcher's global frame
    smTid @2 :Pose2dCov;
    # pose_delta: pose between adjacent time steps.
    targetTid @3 :Pose2d;
    hitPct @4 :Float64;
}

struct LoopGraphResult @0xd836671ff6e61ea9 {
    # ID of node this result was produced at.
    id @0 :UInt64;
    target @1 :UInt64;
    idTtarget @2 :Pose2dCov;
    hitPct @3 :Float64;
}

struct SidecarDb @0xad039fab7cfb237c {
    clouds @0 :List(PointCloud2d);

    incrs @1 :List(IncrGraphResult);

    loops @2 :List(LoopGraphResult);
}

struct Map2dMetadata @0xa74d65c2b1e77767 {
    locations @0 :List(Location);
}

struct Map2d @0xd9ca05175c083d2b {
    graph @0 :Graph2d;
    sidecardb @1 :SidecarDb;
}

```
