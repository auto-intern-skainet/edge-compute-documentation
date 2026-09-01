---
sidebar_position: 4
title: Netzwerkarchitektur
---

# Netzwerkarchitektur

Der Edge-Compute ist darauf ausgelegt, **PoE-versorgten Messgeräten**
(skAInet-Produkten von Auto-Intern, aber nicht ausschließlich) einen lokalen
Rechenknoten bereitzustellen, der:

- Daten puffert und vorverarbeitet
- Trigger und einfache Analysen ausführt
- Aggregierte Daten an höhere Ebenen einer beliebigen Ethernet-Hierarchie
  streamt oder hochlädt

## Ethernet-Aufbau

Das Gerät verfügt über **2 Ethernet-Schnittstellen**:

- **WAN** (`eth1`): DHCP-Client, einzelner M12-Ethernet-Anschluss
- **LAN** (`eth0`): DHCP-Server, intern mit einem 8-Port-Switch verbunden

## LAN-Ports

Es gibt **7 externe M12-LAN-Anschlüsse**, die jeweils bieten:

- Normkonformes **Power-over-Ethernet (PoE)**
- Datenverbindung

So lassen sich skAInet-Messgeräte mit einem **einzigen Cat-5e-M12-Ethernet-Kabel**
anschließen.

Sehen Sie sich das gesamte Sortiment an [PoE-Messgeräten](/devices) an, die für
den Edge-Compute entwickelt wurden.
