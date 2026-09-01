---
sidebar_position: 3
title: Erste Schritte
---

# Erste Schritte

![Frontplatte des Edge-Compute: PoE 1–7, WAN und 48 V DC In](/img/edge-branded.jpg)

Alle Ports sind auf der Frontplatte beschriftet: **PoE 1–7** (LAN), **WAN** und **48 V DC In**.

## Erste Verbindung

1. Verbinden Sie einen Rechner (Windows, Linux oder macOS) über ein
   M12-Ethernet-Kabel mit einem beliebigen LAN-Port. Sie erhalten eine IP-Adresse
   im Bereich `192.168.199.100–200/24`.

2. Greifen Sie per SSH auf das Gerät zu:

   ```bash
   ssh -p 22022 johndoe@192.168.199.1
   ```

   Standard-Benutzerpasswort: `changeme443`

   :::warning
   Ändern Sie das Standardpasswort bei der ersten Anmeldung!
   :::

3. Wechseln Sie zu root:

   ```bash
   su -
   ```

   Standard-Root-Passwort: `skAInet!` – **muss umgehend geändert werden.**

## SSH-Konfiguration

- **SSH-Anmeldung über WAN** ist standardmäßig deaktiviert. Um sie zu
  aktivieren, passen Sie `/etc/ssh/sshd_config` an.
- **Passwort-Anmeldung als root über SSH** ist standardmäßig deaktiviert. Um
  root-Zugang per SSH zu erlauben, fügen Sie Ihren eigenen `.pub`-Schlüssel in
  `/root/.ssh/authorized_keys` ein.

## Herstellerschlüssel

Zusätzlich zum Passwort ist ein **öffentlicher Schlüssel** des Herstellers in
`/root/.ssh/authorized_keys` hinterlegt. Dieser Schlüssel ermöglicht es
Auto-Intern, Fern-Updates und Wartung durchzuführen.

- Um diese Funktion dauerhaft zu deaktivieren, löschen Sie den Schlüssel
  `admin@skainet` aus dieser Datei.

:::caution
Mit dem Löschen des Herstellerschlüssels entfallen auch Support und Wartung
durch Auto-Intern.
:::
