# skAInet Edge-Compute  
**by Auto-Intern GmbH, Germany**

Programmable M12-PoE Switch, Router, and Compute-Module for industrial edge applications.

---

## Overview

The **skAInet Edge-Compute** is a rugged compute module built into an anodized aluminum enclosure.  
- **Waterproof and shockproof** design  
- Operates from **48–72 V DC** via M12 power connector  
- Fully sealed with M12 connectors for all ports and backplate, allowing **operation under water up to 1 bar**  
  > For more information, contact [info@auto-intern.de](mailto:info@auto-intern.de)

### Compute Specifications
*(Industrial-grade compute module, comparable to a 32 GB embedded system-on-module)*

- 8-core 64-bit ARM CPU @ 1.5 GHz  
- 8 GB LPDDR4-3200 RAM  
- 32 GB eMMC storage  

---

## Networking Architecture

The Edge-Compute is designed to provide **PoE-powered measurement devices** (Auto-Intern skAInet products, but not exclusively) with a local compute node that:  
- Buffers and pre-processes data  
- Runs triggers and simple analytics  
- Streams or uploads aggregated data to higher layers in any Ethernet hierarchy  

### Ethernet Layout
- **2 Ethernet interfaces**:  
  - **WAN** (`eth1`): DHCP client, single M12 Ethernet connector  
  - **LAN** (`eth0`): DHCP server, internally connected to an 8-port switch  

- **7 external M12 LAN connectors**, each providing:  
  - Standard-compliant **Power-over-Ethernet (PoE)**  
  - Data connectivity  

This allows connecting skAInet measurement devices with a **single Cat-5e M12 Ethernet cable**.  
More devices can be found at: [www.skainet.io/measurements](https://www.skainet.io/measurements)

---

## Default Configuration & Access

1. Connect a computer (Windows, Linux, or macOS) to any LAN port using an M12-Ethernet cable.  
   - You will obtain an IP in the range `192.168.199.100–200/24`.

2. Access via SSH:  
```bash
ssh -p 22022 johndoe@192.168.199.1
```

* Default user password: `changeme443` (please change it on first login!)

3. Switch to root:

```bash
su -
```

* Default root password: `skAInet!` (must be changed immediately).

### Manufacturer Key

> Note: In addition to the password, a manufacturer **public key** is stored in `/root/.ssh/authorized_keys`.
> This key allows Auto-Intern to perform remote updates and maintenance.

* To disable this feature permanently, delete the `admin@skainet` key from that file.
* ⚠️ This will also disable Auto-Intern support and maintenance.

---

## SSH Configuration

* **SSH login over WAN:**
  Disabled by default. To enable, modify `/etc/ssh/sshd_config`.

* **SSH as root:**
  Password login for root is disabled by default.
  To allow root SSH access, add your own `.pub` key to `/root/.ssh/authorized_keys`.

---

## Recovery Options

If the network configuration is broken, you can recover the device.

⚠️ **Both methods void the manufacturer’s warranty.**

### Option 1 – Reflash the Image

1. Download the base image:
   [edge-compute-base-image.img.xz](https://cloud.gruppe.ai/s/XgmYK9My4nkWC3g)
2. Open device, remove compute module, mount on Raspberry Pi CM4 IO Board.
3. Set jumper to *disable eMMC boot*.
4. Connect IO board via Micro-USB to a Linux PC.
5. Install and run `rpiboot` to expose eMMC as mass storage.
6. Use **Raspberry Pi Imager** to flash the downloaded image.
7. Reinsert module into Edge-Compute, power up.

   * First boot takes up to 5 min for housekeeping scripts.

### Option 2 – Serial Console (Advanced)

1. Open device, connect serial adapter:

   * TX = J1.2
   * RX = J1.3
   * GND = J1.4
2. Start a serial terminal (minicom, PuTTY, etc.) at **115200 baud**.
3. Reboot device and access the TTY directly.

---

## Power Supply

* **Recommended:** ≥ 100 W PSU
* **Minimum (compute only, no PoE):** 25 W
* Lower-rated supplies may work but at your own risk.

---

## Mounting

Refer to the technical drawing:

```
./drawings/mounting
```

---

## More Information

* Documentation: [www.github.com/auto-intern-skainet/edge-compute-documentation](https://www.github.com/auto-intern-skainet/edge-compute-documentation)
* Company site: [www.skainet.io/edge-compute](https://www.skainet.io/edge-compute)
* Questions: [info@auto-intern.de](mailto:info@auto-intern.de)
* Issue tracking: GitHub Issues in this repository