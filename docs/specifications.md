---
sidebar_position: 2
title: Technical Specifications
---

# Technical Specifications

## Compute

Industrial-grade compute module, comparable to a 32 GB embedded
system-on-module:

| | |
|---|---|
| Compute module | Raspberry Pi Compute Module 4 (standard); CM5 or NVIDIA Jetson on request — pin-compatible, swappable |
| CPU | 8-core 64-bit ARM @ 1.5 GHz |
| RAM | 8 GB LPDDR4-3200 |
| Storage | 32 GB eMMC |
| Operating system | Yocto Linux with documented SBOM; encrypted over-the-air updates via the upstream port, or offline via USB image |

## Networking

| | |
|---|---|
| WAN | 1× M12 Gigabit Ethernet (`eth1`), DHCP client |
| LAN | 7× M12 Ethernet with PoE, internally connected to an 8-port switch (`eth0`, DHCP server) |
| PoE | Standard-compliant Power-over-Ethernet on all 7 LAN ports; typical PoE-powered devices draw up to ~10 W |
| Cabling | Single Cat-5e M12 Ethernet cable per device |
| Data interface | Live data via WebSocket (`ws://<edge-ip>:8001`) and the Redis topic `measurement` (JSON, nanosecond timestamps); REST, MQTT, OPC UA, Modbus-TCP, EPICS and more upstream |
| Capacity | Practically unlimited channels — deployments with 250+ concurrent channels are in production; limited only by sampling rate and on-edge analytics load |

## Power

| | |
|---|---|
| Input | 48–72 V DC via M12 power connector |
| Recommended PSU | ≥ 100 W |
| Minimum (compute only, no PoE) | 25 W |

:::caution
Lower-rated supplies may work, but at your own risk.
:::

## Environmental

| | |
|---|---|
| Enclosure | Anodized aluminum, shockproof |
| Ingress protection | **IP67** — fully sealed, M12 connectors on all ports and backplate |
| Water | Operation under water up to **1 bar** |
| Operating temperature | **−25 °C to +70 °C** |

For more information, contact
[info@auto-intern.de](mailto:info@auto-intern.de).
