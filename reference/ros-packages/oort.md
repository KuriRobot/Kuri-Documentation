---
layout: reference
title: oort
category: package
tags:
- mapping
- slam
- oort
---

## Nodes
``oort_ros``

## Scripts

### `oort_bag`

Runs oort offline. `oort_bag` expects the same topics and transforms as `oort_ros` except that it expects all its messages to be in a given bagfile and the name of the scan topic can be specified as an argument:

```bash
rosrun oort oort_bag <bagname> <scan topic> <params.json (optional)> <resume_map (optional)>
```

### `oort_conv`
Renders a raw Oort Cap'n Proto map as `png`s:
```
rosrun oort oort_conv <capnp_file> <output_prefix> <params.json>
```
