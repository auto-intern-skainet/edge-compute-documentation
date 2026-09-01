---
sidebar_position: 7
title: 恢复与维护
---

# 恢复选项

如果网络配置损坏，您可以通过以下方式恢复设备。

:::danger
以下两种方法都会使制造商保修失效。
:::

## 方案 1 – 重新刷写镜像

1. 下载基础镜像：
   [edge-compute-base-image.img.xz](https://cloud.gruppe.ai/s/XgmYK9My4nkWC3g)
2. 打开设备，取出计算模块，并将其安装到 Raspberry Pi CM4 IO Board 上。
3. 将跳线设置为*禁用 eMMC 启动*。
4. 通过 Micro-USB 将 IO 板连接到 Linux PC。
5. 安装并运行 `rpiboot`，将 eMMC 作为大容量存储设备暴露出来。
6. 使用 **Raspberry Pi Imager** 刷写下载的镜像。
7. 将模块重新装回 Edge-Compute 并上电。
   - 首次启动需运行初始化脚本，最长可能需要 5 分钟。

## 方案 2 – 串口控制台（高级）

1. 打开设备并连接串口适配器：

   | 信号 | 引脚 |
   |---|---|
   | TX | J1.2 |
   | RX | J1.3 |
   | GND | J1.4 |

2. 以 **115200 波特率**启动串口终端（minicom、PuTTY 等）。
3. 重启设备，直接访问 TTY。
