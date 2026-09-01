---
sidebar_position: 5
title: Entwickeln auf dem Edge-Compute
---

# Entwickeln auf dem Edge-Compute

Der Edge-Compute läuft mit einem vollständigen Linux-System, auf das Sie per SSH
zugreifen und das Sie wie jede andere Embedded-Linux-Maschine nutzen können. Das
typische Muster sieht so aus:

1. Ein **Messgerät** an einem LAN-Port erzeugt Daten.
2. Ein **Mapper** auf dem Edge-Compute empfängt, dekodiert und transformiert
   diese Daten.
3. Ein **Aggregator** fasst die Ergebnisse zusammen und leitet sie an höhere
   Ebenen Ihres Netzwerks weiter.

## Minimale Beispiele

Wir stellen kleine, lauffähige Demoprojekte bereit, die jeden Schritt zeigen:

| Projekt | Sprache | Beschreibung |
|---|---|---|
| [edge-compute-minimal-mapper_cpp](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_cpp) | C++ | Ein einfacher Daten-Mapper auf dem skAInet Edge-Compute |
| [edge-compute-minimal-mapper_cpp-in-docker](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_cpp-in-docker) | C++ / Docker | Der C++-Mapper, containerisiert |
| [edge-compute-minimal-mapper_python](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_python) | Python | Ein einfacher Daten-Mapper in Python |
| [edge-compute-minimal-aggregator_python](https://github.com/auto-intern-skainet/edge-compute-minimal-aggregator_python) | Python | Ein minimaler Daten-Aggregator |
| [edge-compute-dummy-measurement_python](https://github.com/auto-intern-skainet/edge-compute-dummy-measurement_python) | Python | Eine Dummy-Messquelle zum Testen ohne Hardware |

Klonen Sie eines der Beispiele, passen Sie es an Ihr Datenformat an und
deployen Sie es per SSH auf das Gerät.
