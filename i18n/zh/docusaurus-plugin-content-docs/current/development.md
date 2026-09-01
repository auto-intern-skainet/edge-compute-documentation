---
sidebar_position: 5
title: 在 Edge-Compute 上开发
---

# 在 Edge-Compute 上开发

Edge-Compute 运行完整的 Linux 系统，您可以通过 SSH 访问，并像使用任何嵌入式 Linux 设备一样使用它。典型的工作模式如下：

1. LAN 端口上的**测量设备**产生数据。
2. Edge-Compute 上的**映射器（mapper）**接收、解码并转换这些数据。
3. **聚合器（aggregator）**汇总结果，并将其转发到您网络中的上层。

## 最小示例

我们提供了一些小而完整的演示项目，分别展示上述各个环节：

| 项目 | 语言 | 说明 |
|---|---|---|
| [edge-compute-minimal-mapper_cpp](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_cpp) | C++ | 运行于 skAInet Edge-Compute 上的简单数据映射器 |
| [edge-compute-minimal-mapper_cpp-in-docker](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_cpp-in-docker) | C++ / Docker | 容器化的 C++ 映射器 |
| [edge-compute-minimal-mapper_python](https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_python) | Python | 用 Python 编写的简单数据映射器 |
| [edge-compute-minimal-aggregator_python](https://github.com/auto-intern-skainet/edge-compute-minimal-aggregator_python) | Python | 最小数据聚合器 |
| [edge-compute-dummy-measurement_python](https://github.com/auto-intern-skainet/edge-compute-dummy-measurement_python) | Python | 用于在无硬件情况下进行测试的模拟测量数据源 |

克隆其中一个示例，根据您的数据格式加以调整，然后通过 SSH 部署到设备上。
