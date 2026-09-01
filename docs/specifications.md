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
| CPU | 8-core 64-bit ARM @ 1.5 GHz |
| RAM | 8 GB LPDDR4-3200 |
| Storage | 32 GB eMMC |

## Networking

| | |
|---|---|
| WAN | 1× M12 Ethernet (`eth1`), DHCP client |
| LAN | 7× M12 Ethernet with PoE, internally connected to an 8-port switch (`eth0`, DHCP server) |
| PoE | Standard-compliant Power-over-Ethernet on all 7 LAN ports |
| Cabling | Single Cat-5e M12 Ethernet cable per device |

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
| Sealing | Fully sealed, M12 connectors on all ports and backplate |
| Water | Operation under water up to **1 bar** |

For more information, contact
[info@auto-intern.de](mailto:info@auto-intern.de).
