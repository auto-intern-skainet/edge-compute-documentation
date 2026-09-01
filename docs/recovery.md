---
sidebar_position: 7
title: Recovery & Maintenance
---

# Recovery Options

If the network configuration is broken, you can recover the device.

:::danger
Both methods void the manufacturer's warranty.
:::

## Option 1 – Reflash the image

1. Download the base image:
   [edge-compute-base-image.img.xz](https://cloud.gruppe.ai/s/XgmYK9My4nkWC3g)
2. Open the device, remove the compute module, and mount it on a Raspberry Pi
   CM4 IO Board.
3. Set the jumper to *disable eMMC boot*.
4. Connect the IO board via Micro-USB to a Linux PC.
5. Install and run `rpiboot` to expose the eMMC as mass storage.
6. Use **Raspberry Pi Imager** to flash the downloaded image.
7. Reinsert the module into the Edge-Compute and power up.
   - First boot takes up to 5 min for housekeeping scripts.

## Option 2 – Serial console (advanced)

1. Open the device and connect a serial adapter:

   | Signal | Pin |
   |---|---|
   | TX | J1.2 |
   | RX | J1.3 |
   | GND | J1.4 |

2. Start a serial terminal (minicom, PuTTY, etc.) at **115200 baud**.
3. Reboot the device and access the TTY directly.
