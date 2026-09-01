// Simplified Chinese page content. Keys must stay in sync with en.js / de.js.

export default {
  common: {
    contactUs: '联系我们',
    getStarted: '快速上手',
    readTheDocs: '阅读文档',
    talkToUs: '与我们交流',
    getInTouch: '取得联系',
    meetTheTeam: '认识团队',
    seeTheApplications: '查看应用案例',
  },

  index: {
    metaDescription:
      '面向工业边缘应用的可编程 M12-PoE 交换机、路由器与计算模块。',
    heroTitle: 'Edge-Compute',
    taglinePre: '面向工业边缘应用的可编程 M12-PoE 交换机、路由器与计算模块——由德国 ',
    company: 'Auto-Intern GmbH',
    taglinePost: ' 出品。',
    specsLink: '技术规格 →',
    pricePre: '起售价 ',
    priceNet: '净价',
    requestQuote: '索取报价',
    heroImageAlt: '已连接 M12 以太网线缆的 skAInet Edge-Compute',
    specs: [
      {value: '8 核', label: '64 位 ARM @ 1.5 GHz'},
      {value: '8 GB', label: 'LPDDR4-3200 内存'},
      {value: '32 GB', label: 'eMMC 存储'},
      {value: '7 端口', label: 'M12 PoE+ LAN'},
      {value: '1 bar', label: '水下作业'},
    ],
    trusted: {
      title: '久经现场考验',
      subtitle: '已在实际运行 skAInet Edge-Compute 技术的企业、科研机构与合作伙伴——',
      link: '查看应用案例',
    },
    features: [
      {
        icon: '🌊',
        title: '坚固耐用，防水密封',
        text: '阳极氧化铝外壳，M12 连接器全密封。抗冲击，可在最高 1 bar 的水下环境中运行。',
      },
      {
        icon: '🔌',
        title: '7 个 M12 PoE+ 端口',
        text: '每个端口只需一根 Cat-5e M12 线缆，即可连接 skAInet 测量设备或任何 PoE 设备。供电与数据一线搞定。',
      },
      {
        icon: '🧠',
        title: '真正的边缘算力',
        text: '8 核 64 位 ARM CPU、8 GB LPDDR4 内存、32 GB eMMC。在数据产生的地方直接缓存、预处理并分析测量数据。',
      },
      {
        icon: '🌐',
        title: '交换机、路由器与计算节点三合一',
        text: '独立的 WAN 与 LAN 接口，内置 8 端口交换机。可接入任意以太网层级结构，并将汇聚后的数据向上游流式传输。',
      },
      {
        icon: '⚡',
        title: '48–72 V DC 工业供电',
        text: '专为工业供电母线设计的 M12 供电方案。一根线缆即可为模块及所有连接的 PoE 设备供电。',
      },
      {
        icon: '🛠️',
        title: '开放，随您编程',
        text: '完整的 Linux 系统，支持 SSH 访问。可使用 C++ 或 Python 编写数据映射器（mapper）与聚合器（aggregator）——附带最小可运行示例。',
      },
    ],
    platform: {
      title: '通用数据采集与监测平台',
      lead: 'skAInet Edge-Compute 是 Auto-Intern 的通用数据采集与监测平台——在德国经多年实践打磨而成。当前版本 v1.5 及其前代产品已在众多工厂中 365 天 × 24 小时不间断运行，采集数据、操作测量设备、进行分析，并从机器与设备中提炼出有价值的洞察。',
      cards: [
        {
          title: '外壳之内',
          paras: [
            'skAInet Edge-Compute 的核心是一块与 Raspberry Pi Compute Module 系列引脚兼容的计算模块。可按需更换为性能更强或成本更优的型号——外壳、载板与端口保持不变。',
            '两个独立的以太网接口使设备既可通过 WAN 端口接入上游企业网络，又能在 7 个 LAN 端口上构建自己的 DHCP 网络——并同时以 PoE+（IEEE 802.3at）为全部 7 台 LAN 设备供电。',
          ],
        },
        {
          title: '开放、经审计、合规',
          paras: [
            'skAInet Edge-Compute 运行 Yocto Linux，并提供有据可查的软件物料清单（SBOM），符合欧盟《网络弹性法案》及同类法规的要求。',
            '开源软件——由拥有 25 年以上嵌入式经验的 Auto-Intern 进行质量检验、配置与交付。',
          ],
        },
        {
          title: '您的数据，您做主',
          paras: [
            'Edge-Compute 从传感器、PLC、计算机及任何其他联网设备采集、轮询并接收信息。凭借两个相互隔离的以太网接口，数据在边缘端完成过滤，并在高性能处理器上完成分析，然后才会向外传输。',
            '得益于现代化的安全架构，除非您主动允许，否则任何原始数据都不会进入您的上游网络。',
          ],
        },
      ],
      apiTitle: '一套 API，对接所有上游系统',
      apiLead: '与此同时，skAInet Edge-Compute 以上游设备所使用的任意协议向其提供 API：',
      andMore: '及更多',
    },
    gallery: {
      title: '为现场而生',
      subtitle: '一整块阳极氧化铝。每个端口皆密封。随时可装入您的机柜、机器或水箱。',
      figures: [
        {
          alt: '带端口标识的 Edge-Compute 前面板，旁边是打开的外壳，可见其中的计算模块',
          lead: '由内而外。',
          text: '7 个 PoE 端口、1 个 WAN 端口、1 个 48 V DC 输入——以及安装在 skAInet 载板上的可更换计算模块。前面板可定制您自己的品牌标识。',
        },
        {
          alt: '工作台上连接了多根 M12 线缆的 Edge-Compute',
          lead: '工作台上。',
          text: '接上一台 PoE 测量设备、一路 WAN 上行链路和电源——安装就此完成。',
        },
      ],
    },
    closer: {
      title: '让算力贴近您的测量。',
      text: '无论是连接单个传感器，还是为整座工厂部署仪表：skAInet Edge-Compute 都为您提供一个坚固、安全、开放且经现场验证的平台。告诉我们您想测量什么——我们会告诉您如何实现。',
    },
  },

  devices: {
    title: 'PoE 测量设备',
    metaDescription:
      '面向 skAInet Edge-Compute 的下游连接盒与测量设备：功率、温度、数字 I/O、IO-Link、阻抗谱、红外与信号指示。',
    lead: '每台设备只需一根 M12 线缆——供电与数据兼备。Auto-Intern skAInet 团队已为 Edge-Compute 打造出一系列下游连接盒与测量设备。',
    introPre: '以下每台设备都可接入 Edge-Compute 的 7 个 PoE LAN 端口之一，并以网络节点的形式出现——无需单独供电，无需网关，无需安装驱动。它们由打造 Edge-Compute 本身的',
    introLink: '同一批工程师',
    introPost: '在波鸿（Bochum）设计、制造并交付。',
    seeItInUse: '实际应用：',
    items: [
      {
        id: 'powersense',
        name: 'skAInet PowerSense',
        category: '功率测量 · 电气直接耦合',
        icon: '⚡',
        text: '面向单相与三相负载的电气直接耦合功率测量系统产品系列。直接接入电路，精确读取电压、电流与功率。',
        tags: ['单相', '三相', '电压 / 电流 / 功率'],
      },
      {
        id: 'powerprobe',
        name: 'skAInet PowerProbe',
        category: '功率测量 · 电气隔离',
        icon: '🧲',
        text: '面向三相负载的电气隔离功率测量系统产品系列。通过电场与磁场感应进行测量——不与导体发生电气接触，无需中断现有安装。',
        tags: ['三相', '电场', '磁场', '非侵入式'],
      },
      {
        id: 'tempprobe',
        name: 'skAInet TempProbe',
        category: '温度',
        icon: '🌡️',
        text: '36 通道 K 型热电偶转换器，内置冷端补偿。一个 PoE 端口即可接入数十个测量点。',
        tags: ['36 通道', 'K 型', '冷端补偿'],
      },
      {
        id: 'io',
        name: 'skAInet IO',
        category: '数字 I/O',
        icon: '🔘',
        text: '多通道数字输入与输出。读取开关、传感器与机器状态；驱动继电器、指示灯与执行器——全部由 Edge-Compute 统一控制。',
        tags: ['数字输入', '数字输出', '多通道'],
      },
      {
        id: 'iolink',
        name: 'skAInet iolink',
        category: '现场总线耦合器',
        icon: '🔗',
        text: '最多可接入 6 个 IO-Link 传感器的总线耦合器。将标准工业传感器——距离、压力、流量、振动——接入 skAInet 网络。',
        tags: ['IO-Link', '最多 6 个传感器', '总线耦合器'],
      },
      {
        id: 'eis',
        name: 'skAInet EIS',
        category: '电化学',
        icon: '🧪',
        text: '电化学阻抗谱测量转换器，与蒙大拿州立大学生物膜工程中心（Center for Biofilm Engineering, Montana State University）合作开发。用于美国本土范围内的河流水质监测。',
        tags: ['阻抗谱', 'MSU CBE', '水质'],
        related: {label: '河流水质监测应用', href: '/applications#biofilm'},
      },
      {
        id: 'ircam',
        name: 'skAInet IRcam',
        category: '热成像',
        icon: '📷',
        text: '用于温度监测的红外相机。对机器、换热器与工艺过程进行非接触式热成像——并直接在 Edge-Compute 上完成评估。',
        tags: ['红外', '温度监测', '非接触式'],
        related: {label: '污垢检测应用', href: '/applications#kelvion'},
      },
      {
        id: 'stacklight',
        name: 'skAInet StackLight',
        category: '信号指示',
        icon: '🚦',
        text: '与 skAInet IO 配合使用的可扩展信号灯柱。基于 Edge-Compute 采集的数据，在车间现场直观显示机器与工艺状态。',
        tags: ['信号灯柱', '可扩展', '配合 skAInet IO'],
      },
    ],
    closer: {
      title: '您的下一个测量应用。',
      text: '还缺少适合您信号的设备？上述设备最初也都源于客户的测量难题。告诉我们您需要采集什么，我们将为此设计相应的连接盒：同样的外壳、同样的 M12 PoE 端口、同样的 Edge-Compute。',
      primary: '描述您的应用',
    },
  },

  applications: {
    title: '应用案例',
    metaDescription:
      'skAInet Edge-Compute 已投入使用的领域：铁路基础设施、流程工业、电子制造与基础科研。',
    lead: '从铁路轨旁到河岸，再到加速器大厅：skAInet Edge-Compute 已在六个场景中 365 天 × 24 小时不间断地采集、分析与控制。',
    items: [
      {
        id: 'diana',
        sector: '铁路基础设施',
        title: 'DB Netz DIANA 项目中的道岔电机监测',
        paras: [
          '在 DB Netz AG 的 DIANA 项目中，Edge-Compute 的前代产品与 DIR-IDS 传感器协同工作，采集铁路道岔电机的功率数据。',
          '每一次转辙动作都会留下特征性的电流与功率曲线。在轨旁持续记录这些数据——而非依赖定期巡检——使每组道岔都成为受监测的资产，让磨损在引发故障之前很久就清晰可见。',
        ],
        bullets: [
          '通过 DIR-IDS 传感器在轨旁采集电机功率数据',
          '上传前进行本地缓存与预处理',
          '以持续的状态数据取代按周期的巡检',
        ],
      },
      {
        id: 'kelvion',
        sector: '流程工业 · 换热器',
        title: '利用红外相机检测空冷器的污垢',
        paras: [
          '在 Kelvion，Edge-Compute 作为红外相机的数据采集平台，用于检测空冷器（翅片管空冷器）上的污垢。',
          '污垢会降低传热效率并推高能耗。热成像可以直接呈现污垢状况——Edge-Compute 为 PoE 相机供电、采集图像流，并提供在现场进行评估所需的算力。',
        ],
        bullets: [
          '每台红外相机仅需一根 M12 线缆即可同时获得 PoE 供电与数据传输',
          '在边缘端完成图像采集与评估',
          '仅向上游转发汇聚后的污垢指标——而非原始视频',
        ],
      },
      {
        id: 'nexufed',
        sector: '预测性维护 · 联邦学习',
        title: '保护隐私的水泵状态监测',
        paras: [
          'NexuFed AI 与波鸿鲁尔大学通信声学研究所（Ruhr-Universität Bochum，Prof. Martin）使用 Edge-Compute 分析水泵数据，在最大程度保护隐私的前提下实现基于状态的维护。',
          '借助联邦学习，模型在数据产生的地方进行训练。Edge-Compute 的两个相互隔离的以太网接口使这一切水到渠成：传感器数据留在 LAN 侧，只有模型更新——绝非原始测量值——才会进入上游网络。',
        ],
        bullets: [
          '在边缘端分析声学与振动数据',
          '联邦模型训练——原始数据永不离开现场',
          '无需中央数据湖即可实现基于状态的维护',
        ],
      },
      {
        id: 'horus',
        sector: '电子制造 · 焊接',
        title: '面向连续焊接工艺的 HORUS Monitoring',
        imageAlt: '采用 HORUS Monitoring 品牌标识的 Edge-Compute，旁边是打开的外壳',
        paras: [
          'Global Point 与 Kurtz Ersa 在 HORUS Monitoring 中采用 Edge-Compute，确保连续生产工艺中的电路板焊接质量完美无瑕。',
          '设备以 HORUS 品牌标识交付——即图中所示的前面板——作为监测系统的计算与网络中枢，从焊接线采集工艺数据并提供给质量保证环节使用。',
        ],
        bullets: [
          '定制品牌标识的 Edge-Compute 作为 OEM 产品的一部分',
          '在焊接线上持续采集工艺数据',
          '对每一块电路板进行质量保证，而非仅抽样检查',
        ],
      },
      {
        id: 'panda',
        sector: '基础科研 · 加速器物理',
        title: '控制 GSI/FAIR 的 PANDA 亮度探测器',
        paras: [
          'Edge-Compute 与波鸿鲁尔大学 EP1 教研室强子与核物理研究组（Prof. Fritsch）合作，为 GSI/FAIR 及在建的 HESR 储存环监测并控制 PANDA 亮度探测器的直线位移机构。',
          '在加速器环境中，可靠性与远程可操作性至关重要。密封铝外壳、M12 连接器以及支持 EPICS 的开放 Linux 系统，使 Edge-Compute 成为探测器控制的理想之选。',
        ],
        bullets: [
          '监测与控制精密机械定位系统',
          '集成到实验控制系统（EPICS）中',
          '适用于加速器大厅的坚固密封硬件',
        ],
      },
      {
        id: 'biofilm',
        sector: '环境监测 · 水质',
        title: '基于阻抗谱的美国本土河流水质监测',
        paras: [
          '蒙大拿州立大学生物膜工程中心的 Prof. Warnat 采用 Edge-Compute 技术进行电化学阻抗谱测量，监测美国本土各地河流的水质。',
          '阻抗谱能够直接在测量现场揭示水化学成分的变化与生物膜的生长。Edge-Compute 为传感器电子部件供电、执行测量周期，并在实验室仪器无法胜任的野外环境中持续工作——置于密封铝外壳内，露天放置，无人值守。',
        ],
        bullets: [
          '部署于偏远河段的自主野外测量站',
          '在边缘端执行并评估电化学阻抗谱',
          '专为户外部署打造的防水密封硬件',
        ],
      },
    ],
    closer: {
      title: '下一个应用，就是您的。',
      text: '搭配 PoE 测量设备与总线耦合器，Edge-Compute 可适配您的具体用例——无论是一台机器、一条生产线，还是一座科研设施。告诉我们您需要测量什么，我们将围绕它为您配置整个平台。',
      primary: '探讨您的应用',
      secondary: 'PoE 测量设备',
    },
  },

  team: {
    title: '团队与科研',
    metaDescription: 'skAInet Edge-Compute 背后的工程师，以及孕育它的科研工作。',
    lead: 'skAInet Edge-Compute 由德国波鸿的一支嵌入式工程师与物理学家小团队打造——它源自真实的科研难题。',
    teamHeading: '团队',
    publicationsHeading: '论文发表',
    publicationsIntro: '团队发表的同行评审成果，为 Edge-Compute 提供了理论与实践支撑——从传感器网络上的联邦学习，到河流监测以及 GSI/FAIR 的探测器物理。每条记录均链接到与之相关的应用案例。',
    related: '相关应用：',
    roles: {
      'stephan-boekelmann': '系统架构师',
      'odin-holmes': '硬件设计与实现',
      'tabea-boekelmann': '用户交互',
      'rene-glitza': '分析、学习与人工智能',
      'philipp-lehmann': '网络安全',
    },
    bios: {
      'stephan-boekelmann':
        'Stephan 于 2014 年加入 Auto-Intern，并与 Odin Holmes 一起将公司的工业过程诊断业务发展为 skAInet。他负责整体系统设计——从载板与 FPGA/Zynq 数据采集通路到 Yocto Linux 镜像——目前正在波鸿鲁尔大学攻读实验强子物理（PANDA/FAIR）博士学位。他在 maxclerkwell.tech 上撰写关于嵌入式、FPGA 与 DAQ 的文章。',
      'odin-holmes':
        'Odin 于 2001 年共同创立 Auto-Intern，拥有 20 余年裸机嵌入式系统开发经验。他负责 Edge-Compute 硬件与固件的设计与实现，创建了 Kvasir 寄存器抽象库，担任 ISO C++ 委员会嵌入式工作组（SG14）主席，共同创办了 emBO++ 大会，并曾在 CppCon、C++Now、Meeting C++ 与 C++ Europe 上发表演讲。',
      'tabea-boekelmann':
        'Tabea 是物理学家兼计算机科学家，自 2017 年起效力于 Auto-Intern。她负责塑造人们与 Edge-Compute 及其测量设备的交互方式——从软件与数据层面，到她在 25square 气象传感器网络等现场项目中主导设计的传感器硬件。',
      'rene-glitza':
        'René 在 skAInet 领导预测性维护项目，并在波鸿鲁尔大学通信声学研究所研究面向声学传感器网络的隐私保护联邦学习。他拥有嵌入式系统硕士学位，也是 NexuFed AI 的成员。',
      'philipp-lehmann':
        'Philipp 负责 Edge-Compute 的安全事务——经过加固的 Yocto Linux 镜像、有据可查的 SBOM，以及确保原始数据始终留在 LAN 侧（除非您另有决定）的网络架构。',
    },
    closer: {
      title: '想与我们合作？',
      text: '无论您是面临测量难题的企业，还是需要控制探测器的科研团队——我们都期待您的来信。',
    },
  },

  contact: {
    title: '联系方式',
    metaDescription: '就 Edge-Compute 的报价、应用与技术支持事宜，联系 Auto-Intern GmbH 的 skAInet 团队。',
    lead: '告诉我们您想测量什么。我们以德语或英语回复，通常在一个工作日内。',
    sales: {
      title: '销售与报价',
      textPre: 'Edge-Compute 起售价为 ',
      textPost: ' 净价（不含增值税）。请将您的应用需求发送给我们，我们将为您准备包含相应 PoE 测量设备的报价。',
      phoneIntl: '电话（国际）',
      phoneDe: '电话（德国）',
    },
    support: {
      title: '技术支持',
      text: '关于安装、网络或软件栈有疑问？请在文档仓库中提交 issue——打造这台设备的工程师会亲自阅读。',
      button: 'GitHub Issues',
      note: '签有支持协议的客户：请使用交付文件中的联系方式，或附上设备序列号给我们发送电子邮件。',
    },
    address: {
      title: '地址',
      dept: 'skAInet 研发部',
      country: '德国',
      legal: '总经理：Odin Holmes · 商业登记：AG Bochum HRB 11927 · 增值税号：DE220389702 · 隶属于 ',
      imprint: '法律声明',
      privacy: '隐私政策',
    },
  },
};
