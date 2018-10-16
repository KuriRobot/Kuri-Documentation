---
layout: reference
title: mobile_base
package: mobile_base_driver
category: node
---

## Description
This node is the interface between the hardware and the high level
robot functions. This includes:

  * control of the drive and DoF motors
  * accessing and communicating sensor data
  * the interface to the safety controls
  * acquiring IMU date from the IMU on the system board

There are three micro controller boards in the robot:

  * body board
  * head board
  * chest LED board

The mobile base driver communicate with these via two high speed UARTS, /dev/ttyS1 and /dev/ttyS2.

### Body Board
This board controls the drive motors and the head pan motor. It also gathers input from these sensors: bump, wheel drop, battery power and dock IR receiver.  
The status LED (on the power button) is controlled by this board.
The system power is controlled by this board.
Depth sensor reset is controlled by this board.

### Head Board
This board controls the head tilt and eyelids motors. It also gathers data from the cap touch sensor.

### Chest LED Board
This board controls the 15 LEDs in the chest board.

## Dependencies
The firmware must be loaded on the two controller boards. The depth
sensor needs to be operating and providing depth scans.

## Subscribed Topics
``/commands/chest_leds`` mobile_base_driver::ChestLeds  
Controls the color of the chest LEDs  

## Published Topics
#### `/mobile_base/imu`
sensor_msgs::Imu
Data from the IMU device (BNO055)

#### `/mobile_base/safety_status`
mobile_base_driver::SafetyStatus
Safety status from sensors that prevent the robot from hurting itself.  

#### `/mobile_base/sensors`
mobile_base_driver::Sensors
Contains the current state of most of the sensors in the robot.  

#### `/mobile_base/touch`
mobile_base_driver::Touch
The cap touch sensor  

#### `/mobile_base/power`
mobile_base_driver::Power
The power state, ie., battery charge, dock status.  

#### `/mobile_base/stall`
mobile_base_driver::Stall
Motor stall state.  

#### `/mobile_base/telescope`
mobile_base_driver::Telescope
IR receivers that detect the dock, one in front and one in the back.  

#### `/mobile_base/rear_cliff`
mobile_base_driver::CliffArray
The cliff sensors in the back of the robot. These are only active if the at least one of the drive wheels is being commanded backwards.  

#### `/mobile_base/diagnostics`
diagnostic_msgs::DiagnosticArray 

## Services
#### `/mobile_base/debug_logger``See ROS logging documentation  

#### `/mobile_base/get_embedded_regs`
mobile_base_driver::GetEmbeddedRegs
Get the value of the specified register  

#### `/mobile_base/set_embedded_regs`
mobile_base_driver::SetEmbeddedRegs
Set the value of the specified register  

#### `/mobile_base/ir_filter``Unused  

#### `/mobile_base/safety_clear`
mobile_base_driver::SafetyClear
Clear the specified safety condition  

#### `/mobile_base/safety_control`
mobile_base_driver::SafetyOverride
Override the safety controller for the specified conditions  

#### `/mobile_base/pwr_btn_led`
mobile_base_driver::PwrBtnLed
Set the color of the power button LED  

#### `/mobile_base/depth_sensor_reset`
std_srvs::Empty
Holds the depth sensor in reset for 200ms  

#### `/mobile_base/arm_shutdown`
std_srvs::Empty
Start the shutdown process  

#### `/mobile_base/cancel_shutdown`
std_srvs::Empty
Cancel the shutdown process  

#### `/mobile_base/home_head_pan`
std_srvs::Trigger
Causes the pan motor to re-home to the homing sensor  

#### `/mobile_base/home_head_tilt`
std_srvs::Trigger
Causes the tilt motor to re-home to the homing sensor  

#### `/mobile_base/home_eyelids`
std_srvs::Trigger
Causes the eyelids motor to re-home to the homing sensor  

## Parameters
### Parameters from /opt/gizmo/share/mobile_base_driver/config/p3.yaml

* mobile_base/uart1  
  /dev/ttyS1, used to communicate with the body board  

* mobile_base/uart2  
/dev/rrtS2, used to communicate with the head board and chest light  

* mobile_base/timing/imu  
The polling rate for reading data from the IMU

#### Non-Adjustable Parameters
* mobile_base/imu_i2c_bus_no
* mobile_base/has_body
* mobile_base/joints/left_wheel/encoder_ticks_per_unit
* mobile_base/joints/left_wheel/direction
* mobile_base/joints/right_wheel/encoder_ticks_per_unit
* mobile_base/joints/right_wheel/direction
* mobile_base/joints/head_pan/encoder_ticks_per_unit
* mobile_base/joints/head_pan/neutral_ticks
* mobile_base/joints/head_pan/direction
* mobile_base/joints/head_tilt/encoder_ticks_per_unit
* mobile_base/joints/head_tilt/neutral_ticks
* mobile_base/joints/head_tilt/direction
* mobile_base/joints/eyelids/encoder_ticks_per_unit
* mobile_base/joints/eyelids/neutral_ticks
* mobile_base/joints/eyelids/direction

### Parameters from /opt/gizmo/share/mobile_base_driver/config/iris_common.yaml

* mobile_base/timing/publish  
The ros topic publish rate  

* mobile_base/timing/ros_control_rate  
The main control loop processing rate  

* mobile_base/timing/error_check_rate  
The rate the control board are polled for errors  

* mobile_base/timing/loop_check_rate_hz  
The rate the control boards are polled to check their loop run times  

* mobile_base/timing/status_update_rate_hz  
The rate the power status is monitored to control the status LED on the power button  

* mobile_base/queue_size  
Queue size used for ROS publishers

## Launch File
``mobile_base.launch``  
