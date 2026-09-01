// English page content (default locale). German and Chinese live in
// de.js / zh.js with the identical structure. Keys must stay in sync.

export default {
  common: {
    contactUs: 'Contact Us',
    getStarted: 'Get Started',
    readTheDocs: 'Read the Docs',
    talkToUs: 'Talk to Us',
    getInTouch: 'Get in Touch',
    meetTheTeam: 'Meet the Team',
    seeTheApplications: 'See the Applications',
  },

  index: {
    metaDescription:
      'Programmable M12-PoE switch, router, and compute module for industrial edge applications.',
    heroTitle: 'Edge-Compute',
    taglinePre: 'The programmable M12-PoE switch, router, and compute module for industrial edge applications — by ',
    company: 'Auto-Intern GmbH',
    taglinePost: ', Germany.',
    specsLink: 'Technical specifications →',
    pricePre: 'Starting from ',
    priceNet: 'net',
    requestQuote: 'request a quote',
    heroImageAlt: 'skAInet Edge-Compute with M12 Ethernet cables connected',
    specs: [
      {value: '8 cores', label: '64-bit ARM @ 1.5 GHz'},
      {value: '8 GB', label: 'LPDDR4-3200 RAM'},
      {value: '32 GB', label: 'eMMC storage'},
      {value: '7 ports', label: 'M12 PoE+ LAN'},
      {value: '1 bar', label: 'waterproof operation'},
    ],
    trusted: {
      title: 'Trusted in the field',
      subtitle: 'Companies, research institutions, and partners already running skAInet Edge-Compute technology — ',
      link: 'see the applications',
    },
    features: [
      {
        icon: '🌊',
        title: 'Rugged & Waterproof',
        text: 'Anodized aluminum enclosure, fully sealed M12 connectors. Shockproof and rated for operation under water up to 1 bar.',
      },
      {
        icon: '🔌',
        title: '7× M12 PoE+ Ports',
        text: 'Connect skAInet measurement devices — or any PoE device — with a single Cat-5e M12 cable per port. Power and data included.',
      },
      {
        icon: '🧠',
        title: 'Real Compute at the Edge',
        text: '8-core 64-bit ARM CPU, 8 GB LPDDR4 RAM, 32 GB eMMC. Buffer, pre-process, and analyze measurement data right where it is produced.',
      },
      {
        icon: '🌐',
        title: 'Switch, Router & Node in One',
        text: 'Separate WAN and LAN interfaces with an internal 8-port switch. Drop it into any Ethernet hierarchy and stream aggregated data upward.',
      },
      {
        icon: '⚡',
        title: '48–72 V DC Industrial Power',
        text: 'M12 power delivery designed for industrial supply rails. One cable powers the module and every attached PoE device.',
      },
      {
        icon: '🛠️',
        title: 'Open for Your Code',
        text: 'Full Linux system with SSH access. Write data mappers and aggregators in C++ or Python — minimal working examples included.',
      },
    ],
    platform: {
      title: 'The universal data acquisition and monitoring platform',
      lead: "The skAInet Edge-Compute is Auto-Intern's universal platform for data acquisition and monitoring — developed in Germany over years of hands-on work. The current version v1.5 and its predecessors run 365/24/7 in numerous plants, collecting data, operating measurement devices, analyzing, and delivering useful insights from machines and equipment.",
      cards: [
        {
          title: 'Inside the enclosure',
          paras: [
            'At the heart of the skAInet Edge-Compute sits a compute module that is pin-compatible with the Raspberry Pi Compute Module family. On request, it can be replaced with a more powerful or a more cost-effective variant — the enclosure, carrier board, and ports stay the same.',
            'Two separate Ethernet interfaces let the device join an upstream company network via its WAN port while spanning its own DHCP network across the 7 LAN ports — and powering all 7 LAN devices with PoE+ (IEEE 802.3at) at the same time.',
          ],
        },
        {
          title: 'Open, audited, compliant',
          paras: [
            'The skAInet Edge-Compute runs a Yocto Linux with a documented software bill of materials (SBOM), in line with the EU Cyber Resilience Act and comparable regulations.',
            'Open source software — quality-checked, configured, and provisioned by Auto-Intern with more than 25 years of embedded expertise.',
          ],
        },
        {
          title: 'Your data, your rules',
          paras: [
            'The Edge-Compute collects, polls, and receives information from sensors, PLCs, computers, and any other network-enabled device. With two separated Ethernet interfaces, data is filtered on the edge and analyzed on powerful processors before it goes anywhere.',
            'Thanks to the modern security architecture, no raw data reaches your upstream network unless you want it to.',
          ],
        },
      ],
      apiTitle: 'One API for every upstream system',
      apiLead: 'At the same time, the skAInet Edge-Compute serves an API to all upstream devices — in whatever protocol they speak:',
      andMore: 'and more',
    },
    gallery: {
      title: 'Built for the field',
      subtitle: 'One solid block of anodized aluminum. Every port sealed. Ready for your rack, your machine, or your tank.',
      figures: [
        {
          alt: 'Edge-Compute front plate with labelled ports next to the opened enclosure showing the compute module',
          lead: 'Inside and out.',
          text: 'Seven PoE ports, one WAN port, one 48 V DC input — and a swappable compute module on a skAInet carrier board. Available with your own branding on the front plate.',
        },
        {
          alt: 'Edge-Compute on a workbench with several M12 cables connected',
          lead: 'On the bench.',
          text: 'Plug in a PoE measurement device, a WAN uplink, and power — that is the whole installation.',
        },
      ],
    },
    closer: {
      title: 'Bring compute to your measurements.',
      text: 'Whether you are connecting a single sensor or instrumenting an entire plant: the skAInet Edge-Compute gives you a rugged, secure, and open platform that is already proven in the field. Tell us what you want to measure — we will tell you how to get there.',
    },
  },

  devices: {
    title: 'PoE Measurement Devices',
    metaDescription:
      'Downstream connector boxes and measurement devices for the skAInet Edge-Compute: power, temperature, digital I/O, IO-Link, impedance spectroscopy, infrared, and signaling.',
    lead: 'One M12 cable per device — power and data included. The Auto-Intern skAInet team has already built a family of downstream connector boxes and measurement devices for the Edge-Compute.',
    introPre: 'Every device below plugs into one of the seven PoE LAN ports of the Edge-Compute and shows up as a network node — no separate power supply, no gateway, no driver installation. They are designed, built, and provisioned in Bochum by the ',
    introLink: 'same engineers',
    introPost: ' who built the Edge-Compute itself.',
    seeItInUse: 'See it in use:',
    items: [
      {
        id: 'powersense',
        name: 'skAInet PowerSense',
        category: 'Power measurement · galvanically coupled',
        icon: '⚡',
        text: 'A product series of galvanically coupled power measurement systems for single- and three-phase loads. Direct connection to the circuit for precise voltage, current, and power readings.',
        tags: ['1-phase', '3-phase', 'Voltage / current / power'],
      },
      {
        id: 'powerprobe',
        name: 'skAInet PowerProbe',
        category: 'Power measurement · galvanically isolated',
        icon: '🧲',
        text: 'A product series of galvanically isolated power measurement systems for three-phase loads. Measures via E-field and B-field sensing — no electrical contact with the conductor, no interruption of the installation.',
        tags: ['3-phase', 'E-field', 'B-field', 'Non-invasive'],
      },
      {
        id: 'tempprobe',
        name: 'skAInet TempProbe',
        category: 'Temperature',
        icon: '🌡️',
        text: '36-channel Type-K thermocouple converter with integrated cold-junction compensation. Dozens of measurement points on a single PoE port.',
        tags: ['36 channels', 'Type K', 'Cold-junction compensation'],
      },
      {
        id: 'io',
        name: 'skAInet IO',
        category: 'Digital I/O',
        icon: '🔘',
        text: 'Multi-channel digital inputs and outputs. Read switches, sensors, and machine states; drive relays, indicators, and actuators — all from the Edge-Compute.',
        tags: ['Digital in', 'Digital out', 'Multi-channel'],
      },
      {
        id: 'iolink',
        name: 'skAInet iolink',
        category: 'Fieldbus coupler',
        icon: '🔗',
        text: 'Bus coupler for up to 6 IO-Link sensors. Bring standard industrial sensors — distance, pressure, flow, vibration — onto the skAInet network.',
        tags: ['IO-Link', 'Up to 6 sensors', 'Bus coupler'],
      },
      {
        id: 'eis',
        name: 'skAInet EIS',
        category: 'Electrochemistry',
        icon: '🧪',
        text: 'Measurement converter for electrochemical impedance spectroscopy, developed in cooperation with the Center for Biofilm Engineering at Montana State University. Used for river water quality monitoring across the continental US.',
        tags: ['Impedance spectroscopy', 'MSU CBE', 'Water quality'],
        related: {label: 'River water quality application', href: '/applications#biofilm'},
      },
      {
        id: 'ircam',
        name: 'skAInet IRcam',
        category: 'Thermal imaging',
        icon: '📷',
        text: 'Infrared camera for temperature monitoring. Contactless thermal images of machines, heat exchangers, and processes — evaluated directly on the Edge-Compute.',
        tags: ['Infrared', 'Temperature monitoring', 'Contactless'],
        related: {label: 'Fouling detection application', href: '/applications#kelvion'},
      },
      {
        id: 'stacklight',
        name: 'skAInet StackLight',
        category: 'Signaling',
        icon: '🚦',
        text: 'Extensible stack light in combination with the skAInet IO. Show machine and process states on the shop floor, driven by the data the Edge-Compute collects.',
        tags: ['Stack light', 'Extensible', 'With skAInet IO'],
      },
    ],
    closer: {
      title: 'Your new measurement application.',
      text: "Missing a device for your signal? The devices above started the same way — as a customer's measurement problem. Tell us what you need to capture, and we will design the connector box for it: same enclosure, same M12 PoE port, same Edge-Compute.",
      primary: 'Describe Your Application',
    },
  },

  applications: {
    title: 'Applications',
    metaDescription:
      'Where the skAInet Edge-Compute is already at work: railway infrastructure, process industry, electronics manufacturing, and fundamental research.',
    lead: 'From the trackside to the riverbank to the accelerator hall: six places where the skAInet Edge-Compute is already collecting, analyzing, and controlling — 365/24/7.',
    items: [
      {
        id: 'diana',
        sector: 'Railway infrastructure',
        title: 'Switch-point motor monitoring in the DB Netz DIANA project',
        paras: [
          'In the DIANA project of DB Netz AG, a predecessor of the Edge-Compute works together with the DIR-IDS sensor to capture the power data of railway switch-point motors.',
          'Each switching operation leaves a characteristic current and power signature. Recording it continuously at the trackside — instead of during periodic inspections — turns every switch into a monitored asset and makes wear visible long before it causes a failure.',
        ],
        bullets: [
          'Trackside acquisition of motor power data via the DIR-IDS sensor',
          'Local buffering and pre-processing before upload',
          'Continuous condition data instead of interval-based inspection',
        ],
      },
      {
        id: 'kelvion',
        sector: 'Process industry · Heat exchangers',
        title: 'Fouling detection on air-fin coolers with infrared cameras',
        paras: [
          'At Kelvion, the Edge-Compute serves as the data acquisition platform for IR cameras that detect fouling on air-fin coolers.',
          'Fouling reduces heat transfer and drives up energy consumption. Thermal imaging shows it directly — the Edge-Compute powers the PoE cameras, collects the image streams, and provides the compute to evaluate them on site.',
        ],
        bullets: [
          'PoE power and data for multiple IR cameras over a single M12 cable each',
          'On-edge image acquisition and evaluation',
          'Aggregated fouling indicators forwarded upstream — not raw video',
        ],
      },
      {
        id: 'nexufed',
        sector: 'Predictive maintenance · Federated learning',
        title: 'Privacy-preserving pump condition monitoring',
        paras: [
          'NexuFed AI and the Institute of Communication Acoustics at Ruhr-Universität Bochum (Prof. Martin) use the Edge-Compute to analyze pump data and enable condition-based maintenance with maximum privacy.',
          "With federated learning, models are trained where the data is produced. The Edge-Compute's two separated Ethernet interfaces make this natural: sensor data stays on the LAN side, and only model updates — never raw measurements — cross into the upstream network.",
        ],
        bullets: [
          'Acoustic and vibration data analyzed on the edge',
          'Federated model training — raw data never leaves the site',
          'Condition-based maintenance without a central data lake',
        ],
      },
      {
        id: 'horus',
        sector: 'Electronics manufacturing · Soldering',
        title: 'HORUS Monitoring for continuous soldering processes',
        imageAlt: 'Edge-Compute in HORUS Monitoring branding next to the opened enclosure',
        paras: [
          'Global Point and Kurtz Ersa use the Edge-Compute in HORUS Monitoring to ensure perfectly soldered circuit boards in continuous production processes.',
          'The device ships in HORUS branding — the front plate shown here — and acts as the compute and networking backbone of the monitoring system, collecting process data from the soldering line and making it available for quality assurance.',
        ],
        bullets: [
          'Custom-branded Edge-Compute as part of an OEM product',
          'Continuous process data acquisition on the soldering line',
          'Quality assurance for every board, not just samples',
        ],
      },
      {
        id: 'panda',
        sector: 'Fundamental research · Accelerator physics',
        title: 'Controlling the PANDA luminosity detector at GSI/FAIR',
        paras: [
          'Together with the EP1 chair, Hadron and Nuclear Physics group at Ruhr-Universität Bochum (Prof. Fritsch), the Edge-Compute monitors and controls the linear shift mechanism of the PANDA luminosity detector for GSI/FAIR and the HESR storage ring currently under construction.',
          'In an accelerator environment, reliability and remote operability are everything. The sealed aluminum enclosure, M12 connectors, and an open Linux system with EPICS support make the Edge-Compute a natural fit for detector control.',
        ],
        bullets: [
          'Monitoring and control of a precision mechanical positioning system',
          'Integration into the experiment control system (EPICS)',
          'Rugged, sealed hardware for the accelerator hall',
        ],
      },
      {
        id: 'biofilm',
        sector: 'Environmental monitoring · Water quality',
        title: 'Impedance spectroscopy for river water quality across the continental US',
        paras: [
          'Prof. Warnat at the Center for Biofilm Engineering, Montana State University, uses Edge-Compute technology for electrochemical impedance spectroscopy to monitor the water quality of rivers across the continental United States.',
          'Impedance spectroscopy reveals changes in water chemistry and biofilm growth directly at the measurement site. The Edge-Compute powers the sensor electronics, runs the measurement cycles, and keeps working in the field where a lab instrument never could — in a sealed aluminum enclosure, outdoors, unattended.',
        ],
        bullets: [
          'Autonomous field measurement stations at remote river sites',
          'Electrochemical impedance spectroscopy executed and evaluated on the edge',
          'Waterproof, sealed hardware built for outdoor deployment',
        ],
      },
    ],
    closer: {
      title: 'Your application is next.',
      text: 'Together with PoE measurement devices and bus couplers, the Edge-Compute adapts to your use case — whether it is a single machine, a production line, or a research facility. Tell us what you need to measure, and we will configure the platform around it.',
      primary: 'Discuss Your Application',
      secondary: 'PoE Measurement Devices',
    },
  },

  team: {
    title: 'Team & Research',
    metaDescription: 'The engineers behind the skAInet Edge-Compute, and the research it grew out of.',
    lead: 'The skAInet Edge-Compute is built in Bochum, Germany, by a small team of embedded engineers and physicists — and it grew out of real research problems.',
    teamHeading: 'The team',
    publicationsHeading: 'Publications',
    publicationsIntro: 'Peer-reviewed work by the team that informs the Edge-Compute — from federated learning on sensor networks to river monitoring and detector physics at GSI/FAIR. Each entry links to the application it relates to.',
    related: 'Related:',
    roles: {
      'stephan-boekelmann': 'System Architect',
      'odin-holmes': 'Hardware Design and Implementation',
      'tabea-boekelmann': 'User Interaction',
      'rene-glitza': 'Analytics, Learning and AI',
      'philipp-lehmann': 'Cyber Security',
    },
    bios: {
      'stephan-boekelmann':
        'Stephan joined Auto-Intern in 2014 and, together with Odin Holmes, built its industrial process-diagnostics business into skAInet. He designs the overall system — from carrier board and FPGA/Zynq data-acquisition paths to the Yocto Linux image — and is completing a PhD in experimental hadron physics (PANDA/FAIR) at Ruhr-Universität Bochum. He writes about embedded, FPGA, and DAQ work at maxclerkwell.tech.',
      'odin-holmes':
        'Odin co-founded Auto-Intern in 2001 and has spent more than 20 years writing bare-metal embedded systems. He designs and implements the Edge-Compute hardware and firmware, created the Kvasir register-abstraction library, chairs the embedded group of the ISO C++ committee (SG14), co-founded the emBO++ conference, and has spoken at CppCon, C++Now, Meeting C++, and C++ Europe.',
      'tabea-boekelmann':
        'Tabea is a physicist and computer scientist who has been with Auto-Intern since 2017. She shapes how people interact with the Edge-Compute and its measurement devices — from the software and data side to the sensor hardware she has led the design of in field projects such as the 25square weather sensor network.',
      'rene-glitza':
        'René leads predictive-maintenance projects at skAInet and researches privacy-preserving federated learning for acoustic sensor networks at the Institute of Communication Acoustics, Ruhr-Universität Bochum. He holds an M.Sc. in embedded systems and is part of NexuFed AI.',
      'philipp-lehmann':
        'Philipp looks after the security side of the Edge-Compute — the hardened Yocto Linux image, its documented SBOM, and the network architecture that keeps raw data on the LAN side unless you decide otherwise.',
    },
    closer: {
      title: 'Want to work with us?',
      text: 'Whether you are a company with a measurement problem or a research group with a detector to control — we would like to hear from you.',
    },
  },

  contact: {
    title: 'Contact',
    metaDescription: 'Talk to the skAInet team at Auto-Intern GmbH about the Edge-Compute: quotes, applications, support.',
    lead: 'Tell us what you want to measure. We answer in German or English, usually within one business day.',
    sales: {
      title: 'Sales & quotes',
      textPre: 'Pricing starts at ',
      textPost: ' net, excl. VAT, for the Edge-Compute. Send us your application and we will put together a quote including the matching PoE measurement devices.',
      phoneIntl: 'Phone (international)',
      phoneDe: 'Phone (Germany)',
    },
    support: {
      title: 'Technical support',
      text: 'Questions about setup, networking, or the software stack? Open an issue in the documentation repository — the engineers who built the device read them.',
      button: 'GitHub Issues',
      note: 'Customers with a support agreement: use the contact details in your delivery documents, or e-mail us with your device serial number.',
    },
    address: {
      title: 'Address',
      dept: 'skAInet, development department',
      country: 'Germany',
      legal: 'Managing director: Odin Holmes · Commercial register: AG Bochum HRB 11927 · VAT ID: DE220389702 · Part of the ',
      imprint: 'Imprint',
      privacy: 'Privacy',
    },
  },
};
