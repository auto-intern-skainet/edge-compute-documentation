---
sidebar_position: 6
title: Tech Stack
---

# Tech Stack

What the skAInet Edge-Compute is designed, built, and run with. We prefer
open tools and open formats wherever they exist — so that what runs on your
Edge-Compute is inspectable, and what you build on it is portable.

## Hardware design & manufacturing

| | Tool / partner | Used for |
|---|---|---|
| 🧩 | [KiCad](https://www.kicad.org/) | All schematic and PCB designs — carrier board, PoE switch board, and every measurement device |
| 📐 | [build123d](https://build123d.readthedocs.io/) | Parametric CAD for the anodized aluminum enclosure, written as Python code |
| 🏭 | [HLH Prototypes](https://www.hlhprototypes.com/) | Manufacturing partner for the machined and anodized enclosures |
| 🔌 | [GH Electronics](https://www.gh-electronics.com/) | Certified M12 PoE cable assemblies (Cat-5e, M12 X-/D-coded) |
| 🟢 | [NextPCB](https://www.nextpcb.com/) | PCB fabrication and assembly (PCBA) |

## On the Edge-Compute

| | Tool | Used for |
|---|---|---|
| 🐧 | [Yocto Project](https://www.yoctoproject.org/) | The Linux distribution — a reproducible image with a documented SBOM, aligned with the EU Cyber Resilience Act |
| 🔐 | [NetBird](https://netbird.io/) | Secure, WireGuard-based remote access for maintenance and support *(optional)* |
| 🚏 | [Redis](https://redis.io/) | Data transport on the device — measurement streams flow through Redis between mappers, aggregators, and APIs |
| 🐳 | [Docker](https://www.docker.com/) | Deployment unit for on-edge analytics; your analysis ships as a container |
| ⚡ | [Crow](https://crowcpp.org/) | High-performance C++ web framework for the device's REST and WebSocket APIs |
| 🅰️ | [Angular](https://angular.dev/) | Frontends served directly from the Edge-Compute |

## External integrations *(optional)*

The Edge-Compute works standalone. When connected to upstream infrastructure,
it integrates with:

| | Tool | Used for |
|---|---|---|
| 🗄️ | [Ceph](https://docs.ceph.com/) | Permanent data storage — aggregated data is written to an external Ceph cluster |
| ☸️ | [Kubernetes](https://kubernetes.io/) | High-performance analytics that exceed the device's own compute budget |
| 🧠 | [Ollama](https://ollama.com/) | Local large-language-model inference for data insights — on your infrastructure, not a cloud |

## Protocols & fieldbus

| | Protocol | Used for |
|---|---|---|
| 🔬 | [EPICS](https://epics-controls.org/) | Integration into experimental-physics control systems (e.g. the PANDA luminosity detector at GSI/FAIR) |
| 🏗️ | [Modbus TCP](https://modbus.org/) | Integration into plant networks, PLCs, and SCADA systems |

For the full list of upstream API options — REST, WebSocket, Webhooks, MQTT,
OPC UA, gRPC, and more — see the [platform overview](/#platform).

## Why this stack

- **Reproducible**: Yocto builds the same image every time, and the SBOM
  lists every package in it.
- **Portable**: Your code runs in Docker containers against a Redis stream —
  it does not care which compute module is inside the enclosure.
- **Open**: KiCad, build123d, Yocto, Redis, Docker, Crow, Angular, Ceph,
  Kubernetes, Ollama, EPICS, and Modbus are all open source or open
  standards.
- **Serviceable**: With NetBird enabled, Auto-Intern can support and update
  your device remotely — and you can switch it off at any time.
