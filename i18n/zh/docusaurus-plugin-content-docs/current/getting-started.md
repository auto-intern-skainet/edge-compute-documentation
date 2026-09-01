---
sidebar_position: 3
title: 快速上手
---

# 快速上手

![Edge-Compute 前面板：PoE 1–7、WAN 与 48 V DC 输入](/img/edge-branded.jpg)

所有端口均在前面板上标注：**PoE 1–7**（LAN）、**WAN** 和 **48 V DC In**。

## 首次连接

1. 使用 M12 以太网线缆将计算机（Windows、Linux 或 macOS）连接到任意 LAN 端口。您将获得 `192.168.199.100–200/24` 范围内的一个 IP 地址。

2. 通过 SSH 访问设备：

   ```bash
   ssh -p 22022 johndoe@192.168.199.1
   ```

   默认用户密码：`changeme443`

   :::warning
   首次登录后请立即修改默认密码！
   :::

3. 切换到 root 用户：

   ```bash
   su -
   ```

   默认 root 密码：`skAInet!`——**必须立即修改。**

## SSH 配置

- **通过 WAN 进行 SSH 登录**默认处于禁用状态。如需启用，请修改
  `/etc/ssh/sshd_config`。
- **root 用户通过 SSH 进行密码登录**默认处于禁用状态。如需允许 root 通过 SSH 访问，请将您自己的 `.pub` 公钥添加到 `/root/.ssh/authorized_keys`。

## 制造商密钥

除密码之外，`/root/.ssh/authorized_keys` 中还存有一把制造商**公钥**。该密钥使 Auto-Intern 能够执行远程更新与维护。

- 如需永久禁用此功能，请从该文件中删除 `admin@skainet` 密钥。

:::caution
删除制造商密钥后，Auto-Intern 将无法再提供技术支持与维护服务。
:::
