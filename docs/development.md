---
sidebar_position: 5
title: Developing on the Edge-Compute
---

# Developing on the Edge-Compute

The Edge-Compute runs a full Linux system that you can access via SSH and use
like any embedded Linux machine. The typical pattern is:

1. A **measurement device** on a LAN port produces data.
2. A **mapper** on the Edge-Compute receives, decodes, and transforms that
   data.
3. An **aggregator** combines and forwards the results to higher layers in your
   network.

## Minimal examples

We provide small, working demo projects that show each step:

| Project | Language | Description |
|---|---|---|
| [edge-compute-minimal-mapper_cpp](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_cpp) | C++ | A simple data mapper on the skAInet Edge-Compute |
| [edge-compute-minimal-mapper_cpp-in-docker](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_cpp-in-docker) | C++ / Docker | The C++ mapper, containerized |
| [edge-compute-minimal-mapper_python](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_python) | Python | A simple data mapper in Python |
| [edge-compute-minimal-aggregator_python](https://github.com/auto-intern-skainet/edge-compute-minimal-aggregator_python) | Python | A minimal data aggregator |
| [edge-compute-dummy-measurement_python](https://github.com/auto-intern-skainet/edge-compute-dummy-measurement_python) | Python | A dummy measurement source for testing without hardware |

Clone one of the examples, adapt it to your data format, and deploy it to the
device over SSH.
