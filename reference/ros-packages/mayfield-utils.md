---
layout: reference
title: mayfield_utils
category: package
---

## Overview
Mayfield-utils is a collection of Python utilities which ease onboard development.

## Usage
The inline documentation provides a nice summary of what this package's contents
might help you to do. To read this on a robot, run this in a Python console:
```python
import mayfield_utils
help(mayfield_utils)
```
This is the output from that command:
```
Help on package mayfield_utils:

NAME
    mayfield_utils

FILE
    /opt/gizmo/lib/python2.7/dist-packages/mayfield_utils/__init__.pyc

PACKAGE CONTENTS
    event
    exit
    logger
    node_waiter

CLASSES
    __builtin__.object
        mayfield_utils.event.Event
    
    class Event(__builtin__.object)
     |  A class that can register callbacks and call them when an event happens
     |  
     |  Methods defined here:
     |  
     |  __call__(self, *args, **kwargs)
     |  
     |  __init__(self, cb_args=1)
     |      Construct an Event object
     |      
     |      :param cb_args: Specifying an integer value will check that callbacks
     |      take the correct number of arguments when they connect.  Specifying
     |      an array of types will check that callbacks take the correct number of
     |      arguments when they connect AND that callers provide the correct types
     |      when invoking the callbacks.
     |  
     |  connect(self, cb)
     |      Connect a callback function that will be called when the event is
     |      is raised
     |      
     |      connect will verify that the callback function takes the correct
     |      number of arguments (as specified to the Event constructor) and raise
     |      a TypeError if the callback function's signature is not correct
     |      
     |      :param cb: A callback function.
     |  
     |  disconnect(self, cb)
     |      Disconnects a callback function that was previously connected
     |      
     |      :param cb: The function to disconnect
     |  
     |  is_connected(self, cb)
     |      Determines if a callback is connected or not
     |  
     |  ----------------------------------------------------------------------
     |  Data descriptors defined here:
     |  
     |  __dict__
     |      dictionary for instance variables (if defined)
     |  
     |  __weakref__
     |      list of weak references to the object (if defined)
     
FUNCTIONS
    exit(arg=0, timeout=10)
        Attempt to use sys.exit to exit while allowing finally blocks, etc. to run
        Non daemon threads may prevent this exit from terminating the process, so
        after 'timeout' seconds, use os._exit to really for real exit
    
    setup_handlers(name=None, syslog_level=20, screen_level=20)
        Sets up logging handlers to route things to stdout/stderr (the gizmo log)
        and to the syslog (uploaded to logly)
        
        :param name: The logger to attach the handlers to.  By default, the root
        logger
        
        :param syslog_level: The level of log messages to be sent to the syslog
        (logley)
        
        :param screen_level: The level of log messages to be sent to stdout (the
        gizmo log)
    
    setup_logger_to_rosout(name=None, level=20)
        Sets up logging for the process.  setup_logger will connect the
        python logger to rosout so that individual modules can log to rosout
        without having to know the intracacies of ROS
        
        It is recommended that setup_logger is called after rospy.init_node
        so that init_node does not clear out the custom handlers added
        
        Subsequent calls to setup_logger_to_rosout will not create additional
        handlers, but will set the logging level of the existing handler
        
        :param level: LogRecords with this level or higher will be sent to rosout
    
    setup_rosout_to_logger(name='rosout_monitor', level=20, node_levels={})
        Subscribes to the /rosout topic and plumbs the data to a python logger
        called 'rosout_monitor' by default
        
        :param name: The name of the logger that will handle the messages coming
        from rosout
        
        :param level: The log level to forward on to the python logger
        
        :node_levels: A dictionary of "node name": "logging level" that allows
        control of logging levels for individual ROS nodes.  If a node's name
        is in this dictionary, the general log level passed in the 'level' param
        will not be used for log messages from that node.
    
    wait_for_nodes(node_names, timeout=60.0)
        Monitors the ROS topic 'node_online' for notification from
        other nodes that they're up and ready to be interacted with.  It provides
        methods to wait for specific nodes to come online before proceeding
        
        Nodes that come online should use a latched publisher to publish a message
        to the 'node_online' topic when they're ready to be interacted with
        
        :param node_names: A node name or a list of node names to wait for
        :param timeout: The amount of time to wait for the specified nodes to come
        up
        
        Will raise a ROSException if the timeout is exceeded
```
