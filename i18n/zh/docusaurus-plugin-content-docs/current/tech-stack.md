---
sidebar_position: 6
title: 技术栈
---

# 技术栈

skAInet Edge-Compute 的设计、构建与运行所采用的技术与工具。我们优先选择开放工具和开放格式——只要有合适的选择——让您能够了解并审视 Edge-Compute 上运行的一切，同时确保您在其上构建的内容具备良好的可移植性。

## 硬件设计与制造

| | 工具 / 合作伙伴 | 用途 |
|---|---|---|
| 🧩 | [KiCad](https://www.kicad.org/) | 所有原理图与 PCB 设计——载板、PoE 交换板以及每一款测量设备 |
| 📐 | [build123d](https://build123d.readthedocs.io/) | 以 Python 代码编写的阳极氧化铝外壳参数化 CAD |
| 🏭 | [HLH Prototypes](https://www.hlhprototypes.com/) | 机加工与阳极氧化外壳的制造合作伙伴 |
| 🔌 | [GH Electronics](https://www.gh-electronics.com/) | 经认证的 M12 PoE 线缆组件（Cat-5e，M12 X 编码 / D 编码） |
| 🟢 | [NextPCB](https://www.nextpcb.com/) | PCB 制造与组装（PCBA） |

## Edge-Compute 上运行的组件

| | 工具 | 用途 |
|---|---|---|
| 🐧 | [Yocto Project](https://www.yoctoproject.org/) | Linux 发行版——可复现的镜像，附带有据可查的 SBOM，符合欧盟《网络弹性法案》 |
| 🔐 | [NetBird](https://netbird.io/) | 基于 WireGuard 的安全远程访问，用于维护与技术支持 *（可选）* |
| 🚏 | [Redis](https://redis.io/) | 设备内部的数据传输——测量数据流通过 Redis 在映射器、聚合器与 API 之间流转 |
| 🐳 | [Docker](https://www.docker.com/) | 边缘端分析的部署单元；您的分析程序以容器形式交付 |
| ⚡ | [Crow](https://crowcpp.org/) | 高性能 C++ Web 框架，用于设备的 REST 与 WebSocket API |
| 🅰️ | [Angular](https://angular.dev/) | 直接由 Edge-Compute 提供的前端界面 |

## 外部集成 *（可选）*

Edge-Compute 可独立运行。接入上游基础设施后，它可与以下系统集成：

| | 工具 | 用途 |
|---|---|---|
| 🗄️ | [Ceph](https://docs.ceph.com/) | 数据的永久存储——汇聚后的数据写入外部 Ceph 集群 |
| ☸️ | [Kubernetes](https://kubernetes.io/) | 超出设备自身算力预算的高性能分析 |
| 🧠 | [Ollama](https://ollama.com/) | 用于数据洞察的本地大语言模型推理——运行在您的基础设施上，而非云端 |

## 协议与现场总线

| | 协议 | 用途 |
|---|---|---|
| 🔬 | [EPICS](https://epics-controls.org/) | 集成到实验物理控制系统（例如 GSI/FAIR 的 PANDA 亮度探测器） |
| 🏗️ | [Modbus TCP](https://modbus.org/) | 集成到工厂网络、PLC 与 SCADA 系统 |

上游 API 的完整选项列表——REST、WebSocket、Webhooks、MQTT、OPC UA、gRPC 等——请参阅[平台概览](/#platform)。

## 为何选择这套技术栈

- **可复现**：Yocto 每次都构建出完全相同的镜像，SBOM 列出了其中的每一个软件包。
- **可移植**：您的代码在 Docker 容器中针对 Redis 数据流运行——无需关心外壳内装的是哪款计算模块。
- **开放**：KiCad、build123d、Yocto、Redis、Docker、Crow、Angular、Ceph、Kubernetes、Ollama、EPICS 与 Modbus 均为开源软件或开放标准。
- **易于维护**：启用 NetBird 后，Auto-Intern 可远程为您的设备提供支持与更新——您也可以随时将其关闭。
