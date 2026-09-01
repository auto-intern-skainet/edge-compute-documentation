---
sidebar_position: 2
title: 技术规格
---

# 技术规格

## 计算

工业级计算模块，性能相当于一款 32 GB 的嵌入式系统模块（SoM）：

| | |
|---|---|
| 计算模块 | Raspberry Pi Compute Module 4（标准配置）；可按需选配 CM5 或 NVIDIA Jetson——引脚兼容，可更换 |
| CPU | 8 核 64 位 ARM @ 1.5 GHz |
| 内存 | 8 GB LPDDR4-3200 |
| 存储 | 32 GB eMMC |
| 操作系统 | 带有据可查 SBOM 的 Yocto Linux；可通过上游端口进行加密的 OTA 更新，或通过 USB 镜像离线更新 |

## 网络

| | |
|---|---|
| WAN | 1× M12 千兆以太网（`eth1`），DHCP 客户端 |
| LAN | 7× 带 PoE 的 M12 以太网，内部连接至 8 端口交换机（`eth0`，DHCP 服务器） |
| PoE | 全部 7 个 LAN 端口均提供符合标准的以太网供电（PoE）；典型 PoE 供电设备功耗最高约 10 W |
| 布线 | 每台设备仅需一根 Cat-5e M12 以太网线缆 |
| 数据接口 | 通过 WebSocket（`ws://<edge-ip>:8001`）及 Redis 主题 `measurement`（JSON，纳秒级时间戳）提供实时数据；上游支持 REST、MQTT、OPC UA、Modbus-TCP、EPICS 等 |
| 容量 | 通道数量几乎不受限制——已有 250 个以上并发通道的部署投入生产；仅受采样率与边缘端分析负载限制 |

## 电源

| | |
|---|---|
| 输入 | 通过 M12 电源连接器输入 48–72 V DC |
| 推荐电源 | ≥ 100 W |
| 最低要求（仅计算，不含 PoE） | 25 W |

:::caution
功率较低的电源或许也能工作，但风险自负。
:::

## 环境

| | |
|---|---|
| 外壳 | 阳极氧化铝，抗冲击 |
| 防护等级 | **IP67**——全密封，所有端口及背板均采用 M12 连接器 |
| 水下 | 可在最高 **1 bar** 的水下环境中运行 |
| 工作温度 | **−25 °C 至 +70 °C** |

如需了解更多信息，请联系
[info@auto-intern.de](mailto:info@auto-intern.de)。
