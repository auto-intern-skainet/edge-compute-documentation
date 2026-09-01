---
sidebar_position: 7
title: Wiederherstellung & Wartung
---

# Wiederherstellungsoptionen

Sollte die Netzwerkkonfiguration beschädigt sein, können Sie das Gerät wiederherstellen.

:::danger
Beide Methoden führen zum Erlöschen der Herstellergarantie.
:::

## Option 1 – Image neu flashen

1. Laden Sie das Basis-Image herunter:
   [edge-compute-base-image.img.xz](https://cloud.gruppe.ai/s/XgmYK9My4nkWC3g)
2. Öffnen Sie das Gerät, entnehmen Sie das Compute-Modul und setzen Sie es auf
   ein Raspberry Pi CM4 IO Board.
3. Setzen Sie den Jumper auf *disable eMMC boot*.
4. Verbinden Sie das IO Board per Micro-USB mit einem Linux-PC.
5. Installieren und starten Sie `rpiboot`, um die eMMC als Massenspeicher
   bereitzustellen.
6. Flashen Sie das heruntergeladene Image mit dem **Raspberry Pi Imager**.
7. Setzen Sie das Modul wieder in den Edge-Compute ein und schalten Sie das
   Gerät ein.
   - Der erste Start dauert wegen der Housekeeping-Skripte bis zu 5 Minuten.

## Option 2 – Serielle Konsole (für Fortgeschrittene)

1. Öffnen Sie das Gerät und schließen Sie einen seriellen Adapter an:

   | Signal | Pin |
   |---|---|
   | TX | J1.2 |
   | RX | J1.3 |
   | GND | J1.4 |

2. Starten Sie ein serielles Terminal (minicom, PuTTY o. Ä.) mit **115200 Baud**.
3. Starten Sie das Gerät neu und greifen Sie direkt auf das TTY zu.
