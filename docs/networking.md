---
sidebar_position: 4
title: Networking Architecture
---

# Networking Architecture

The Edge-Compute is designed to provide **PoE-powered measurement devices**
(Auto-Intern skAInet products, but not exclusively) with a local compute node
that:

- Buffers and pre-processes data
- Runs triggers and simple analytics
- Streams or uploads aggregated data to higher layers in any Ethernet hierarchy

## Ethernet layout

The device has **2 Ethernet interfaces**:

- **WAN** (`eth1`): DHCP client, single M12 Ethernet connector
- **LAN** (`eth0`): DHCP server, internally connected to an 8-port switch

## LAN ports

There are **7 external M12 LAN connectors**, each providing:

- Standard-compliant **Power-over-Ethernet (PoE)**
- Data connectivity

This allows connecting skAInet measurement devices with a **single Cat-5e M12
Ethernet cable**.

More devices can be found at
[www.skainet.io/measurements](https://www.skainet.io/measurements).
