---
sidebar_position: 6
title: Tech-Stack
---

# Tech-Stack

Womit der skAInet Edge-Compute entworfen, gebaut und betrieben wird. Wir
bevorzugen offene Werkzeuge und offene Formate, wo immer es sie gibt – damit
nachvollziehbar ist, was auf Ihrem Edge-Compute läuft, und portabel bleibt,
was Sie darauf aufbauen.

## Hardware-Design & Fertigung

| | Werkzeug / Partner | Verwendet für |
|---|---|---|
| 🧩 | [KiCad](https://www.kicad.org/) | Alle Schaltplan- und Leiterplattendesigns – Trägerplatine, PoE-Switch-Platine und jedes Messgerät |
| 📐 | [build123d](https://build123d.readthedocs.io/) | Parametrisches CAD für das Gehäuse aus eloxiertem Aluminium, geschrieben als Python-Code |
| 🏭 | [HLH Prototypes](https://www.hlhprototypes.com/) | Fertigungspartner für die gefrästen und eloxierten Gehäuse |
| 🔌 | [GH Electronics](https://www.gh-electronics.com/) | Zertifizierte M12-PoE-Kabelkonfektionen (Cat-5e, M12 X-/D-kodiert) |
| 🟢 | [NextPCB](https://www.nextpcb.com/) | Leiterplattenfertigung und -bestückung (PCBA) |

## Auf dem Edge-Compute

| | Werkzeug | Verwendet für |
|---|---|---|
| 🐧 | [Yocto Project](https://www.yoctoproject.org/) | Die Linux-Distribution – ein reproduzierbares Image mit dokumentierter SBOM, im Einklang mit dem EU Cyber Resilience Act |
| 🔐 | [NetBird](https://netbird.io/) | Sicherer, WireGuard-basierter Fernzugriff für Wartung und Support *(optional)* |
| 🚏 | [Redis](https://redis.io/) | Datentransport auf dem Gerät – Messdatenströme fließen über Redis zwischen Mappern, Aggregatoren und APIs |
| 🐳 | [Docker](https://www.docker.com/) | Deployment-Einheit für Analysen an der Edge; Ihre Auswertung wird als Container ausgeliefert |
| ⚡ | [Crow](https://crowcpp.org/) | Hochperformantes C++-Web-Framework für die REST- und WebSocket-APIs des Geräts |
| 🅰️ | [Angular](https://angular.dev/) | Frontends, die direkt vom Edge-Compute ausgeliefert werden |

## Externe Integrationen *(optional)*

Der Edge-Compute arbeitet eigenständig. Angebunden an übergeordnete
Infrastruktur integriert er sich mit:

| | Werkzeug | Verwendet für |
|---|---|---|
| 🗄️ | [Ceph](https://docs.ceph.com/) | Dauerhafte Datenspeicherung – aggregierte Daten werden in einen externen Ceph-Cluster geschrieben |
| ☸️ | [Kubernetes](https://kubernetes.io/) | Hochperformante Analysen, die das Rechenbudget des Geräts übersteigen |
| 🧠 | [Ollama](https://ollama.com/) | Lokale Inferenz großer Sprachmodelle für Datenauswertungen – auf Ihrer Infrastruktur, nicht in der Cloud |

## Protokolle & Feldbus

| | Protokoll | Verwendet für |
|---|---|---|
| 🔬 | [EPICS](https://epics-controls.org/) | Integration in Steuerungssysteme der Experimentalphysik (z. B. der PANDA-Luminositätsdetektor bei GSI/FAIR) |
| 🏗️ | [Modbus TCP](https://modbus.org/) | Integration in Anlagennetzwerke, SPSen und SCADA-Systeme |

Die vollständige Liste der API-Optionen in Richtung übergeordneter Systeme –
REST, WebSocket, Webhooks, MQTT, OPC UA, gRPC und mehr – finden Sie in der
[Plattformübersicht](/#platform).

## Warum dieser Stack

- **Reproduzierbar**: Yocto baut jedes Mal dasselbe Image, und die SBOM
  listet jedes darin enthaltene Paket auf.
- **Portabel**: Ihr Code läuft in Docker-Containern gegen einen Redis-Stream –
  welches Compute-Modul im Gehäuse steckt, spielt dafür keine Rolle.
- **Offen**: KiCad, build123d, Yocto, Redis, Docker, Crow, Angular, Ceph,
  Kubernetes, Ollama, EPICS und Modbus sind allesamt Open Source oder offene
  Standards.
- **Wartbar**: Mit aktiviertem NetBird kann Auto-Intern Ihr Gerät aus der
  Ferne betreuen und aktualisieren – und Sie können das jederzeit abschalten.
