---
sidebar_position: 2
title: Technische Daten
---

# Technische Daten

## Rechenleistung

Industrietaugliches Compute-Modul, vergleichbar mit einem 32-GB-Embedded-
System-on-Module:

| | |
|---|---|
| Compute-Modul | Raspberry Pi Compute Module 4 (Standard); CM5 oder NVIDIA Jetson auf Anfrage – pinkompatibel, austauschbar |
| CPU | 8-Kern 64-Bit ARM @ 1,5 GHz |
| RAM | 8 GB LPDDR4-3200 |
| Speicher | 32 GB eMMC |
| Betriebssystem | Yocto Linux mit dokumentierter SBOM; verschlüsselte Over-the-Air-Updates über den Upstream-Port oder offline per USB-Image |

## Netzwerk

| | |
|---|---|
| WAN | 1× M12 Gigabit Ethernet (`eth1`), DHCP-Client |
| LAN | 7× M12 Ethernet mit PoE, intern mit einem 8-Port-Switch verbunden (`eth0`, DHCP-Server) |
| PoE | Normkonformes Power-over-Ethernet an allen 7 LAN-Ports; typische PoE-versorgte Geräte nehmen bis zu ~10 W auf |
| Verkabelung | Ein einziges Cat-5e-M12-Ethernet-Kabel pro Gerät |
| Datenschnittstelle | Live-Daten per WebSocket (`ws://<edge-ip>:8001`) und über das Redis-Topic `measurement` (JSON, Zeitstempel in Nanosekunden); REST, MQTT, OPC UA, Modbus-TCP, EPICS und mehr in Richtung übergeordneter Systeme |
| Kapazität | Praktisch unbegrenzte Kanalzahl – Installationen mit über 250 gleichzeitigen Kanälen sind im Produktiveinsatz; begrenzt nur durch Abtastrate und Analyselast an der Edge |

## Stromversorgung

| | |
|---|---|
| Eingang | 48–72 V DC über M12-Stromanschluss |
| Empfohlenes Netzteil | ≥ 100 W |
| Minimum (nur Rechenmodul, ohne PoE) | 25 W |

:::caution
Schwächer dimensionierte Netzteile können funktionieren – jedoch auf eigenes Risiko.
:::

## Umgebungsbedingungen

| | |
|---|---|
| Gehäuse | Eloxiertes Aluminium, stoßfest |
| Schutzart | **IP67** – vollständig abgedichtet, M12-Steckverbinder an allen Ports und der Rückplatte |
| Wasser | Betrieb unter Wasser bis **1 bar** |
| Betriebstemperatur | **−25 °C bis +70 °C** |

Für weitere Informationen wenden Sie sich an
[info@auto-intern.de](mailto:info@auto-intern.de).
