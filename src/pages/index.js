import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const features = [
  {
    icon: '🌊',
    title: 'Rugged & Waterproof',
    text: 'Anodized aluminum enclosure, fully sealed M12 connectors. Shockproof and rated for operation under water up to 1 bar.',
  },
  {
    icon: '🔌',
    title: '7× M12 PoE Ports',
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
];

const specs = [
  {value: '8 cores', label: '64-bit ARM @ 1.5 GHz'},
  {value: '8 GB', label: 'LPDDR4-3200 RAM'},
  {value: '32 GB', label: 'eMMC storage'},
  {value: '7 ports', label: 'M12 PoE LAN'},
  {value: '1 bar', label: 'waterproof operation'},
];

const protocols = [
  'REST',
  'WebSocket',
  'Webhooks',
  'MQTT',
  'OPC UA',
  'Modbus-TCP',
  'EPICS',
  'gRPC',
  'AMQP',
  'CoAP',
  'SNMP',
  'Prometheus',
  'InfluxDB',
  'SFTP / rsync',
];

const customers = [
  {name: 'Kurtz Ersa', file: 'kurtz-ersa.svg'},
  {name: 'DB Netz AG', file: 'db.svg'},
  {name: 'Framatome', file: 'framatome.svg'},
  {name: 'Kelvion', file: 'kelvion.svg'},
  {name: 'RAG', file: 'rag.svg'},
  {name: 'Montana State University', file: 'msu.svg'},
  {name: 'GSI / FAIR', file: 'gsi.svg'},
  {name: 'NexuFed AI', file: 'nexufed.png'},
  {name: 'Ruhr-Universität Bochum', file: 'rub.svg'},
];

function LogoCarousel() {
  // The list is rendered twice so the CSS animation can loop seamlessly.
  const items = [...customers, ...customers];
  return (
    <section className="customerSection">
      <div className="container">
        <h2 className="text--center">
          Trusted in the field
        </h2>
        <p className="text--center customerSubtitle">
          Companies, research institutions, and partners already running
          skAInet Edge-Compute technology —{' '}
          <Link to="/applications">see the applications</Link>
        </p>
      </div>
      <div className="logoMarquee" aria-label="Customer logos">
        <div className="logoTrack">
          {items.map((c, i) => (
            <div className="logoCard" key={`${c.file}-${i}`} title={c.name}>
              <img
                src={useBaseUrl(`/img/logos/${c.file}`)}
                alt={c.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://auto-intern-skainet.github.io/edge-compute-documentation/#product',
  name: 'skAInet Edge-Compute',
  alternateName: 'Edge-Compute v1.5',
  description:
    'Programmable M12-PoE switch, router, and compute module for industrial edge applications. Rugged anodized aluminum enclosure, sealed M12 connectors, operation under water up to 1 bar, 7 PoE LAN ports plus WAN, 8-core ARM CPU, 8 GB RAM, 32 GB eMMC, Yocto Linux with documented SBOM.',
  image: [
    'https://auto-intern-skainet.github.io/edge-compute-documentation/img/edge-in-use-2.jpg',
    'https://auto-intern-skainet.github.io/edge-compute-documentation/img/edge-branded.jpg',
    'https://auto-intern-skainet.github.io/edge-compute-documentation/img/edge-in-use-1.jpg',
  ],
  url: 'https://auto-intern-skainet.github.io/edge-compute-documentation/',
  brand: {'@id': 'https://www.skainet.io/#brand'},
  manufacturer: {'@id': 'https://www.auto-intern.de/#organization'},
  category: 'Industrial edge computing / IIoT gateway',
  countryOfOrigin: 'DE',
  additionalProperty: [
    {'@type': 'PropertyValue', name: 'CPU', value: '8-core 64-bit ARM @ 1.5 GHz'},
    {'@type': 'PropertyValue', name: 'RAM', value: '8 GB LPDDR4-3200'},
    {'@type': 'PropertyValue', name: 'Storage', value: '32 GB eMMC'},
    {'@type': 'PropertyValue', name: 'LAN ports', value: '7 × M12 Ethernet with PoE Class 3'},
    {'@type': 'PropertyValue', name: 'WAN ports', value: '1 × M12 Ethernet'},
    {'@type': 'PropertyValue', name: 'Power input', value: '48–72 V DC via M12'},
    {'@type': 'PropertyValue', name: 'Ingress protection', value: 'Sealed, operation under water up to 1 bar'},
    {'@type': 'PropertyValue', name: 'Operating system', value: 'Yocto Linux with documented SBOM'},
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: 'mailto:info@auto-intern.de',
    seller: {'@id': 'https://www.auto-intern.de/#organization'},
  },
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Head>
      <header className="heroBanner">
        <div className="container">
          <div className="row row--align-center">
            <div className="col col--6 heroText">
              <a href="https://www.skainet.io" title="skainet.io">
                <img
                  className="heroLogo"
                  src={useBaseUrl('/img/skainet-logo-weiss.png')}
                  alt="skAInet"
                />
              </a>
              <h1>Edge-Compute</h1>
              <p className="heroTagline">
                The programmable M12-PoE switch, router, and compute module for
                industrial edge applications — by{' '}
                <a className="heroCompanyLink" href="https://www.auto-intern.de">
                  Auto-Intern GmbH
                </a>
                , Germany.
              </p>
              <div className="heroButtons">
                <Link className="button button--primary button--lg" to="/docs/getting-started">
                  Get Started
                </Link>
                <Link className="button button--secondary button--outline button--lg" to="/docs/specifications">
                  Technical Specifications
                </Link>
              </div>
            </div>
            <div className="col col--6">
              <img
                className="heroImage"
                src={useBaseUrl('/img/edge-in-use-2.jpg')}
                alt="skAInet Edge-Compute with M12 Ethernet cables connected"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="specStrip">
          <div className="container">
            <div className="row">
              {specs.map((s) => (
                <div className="col" key={s.label}>
                  <span className="specValue">{s.value}</span>
                  <span className="specLabel">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogoCarousel />

        <section className="featureSection">
          <div className="container">
            <div className="row">
              {features.map((f) => (
                <div className={clsx('col col--4', 'margin-bottom--lg')} key={f.title}>
                  <div className="featureCard">
                    <div className="featureIcon">{f.icon}</div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="platformSection">
          <div className="container">
            <h2 className="text--center">The universal data acquisition and monitoring platform</h2>
            <p className="text--center platformLead">
              The skAInet Edge-Compute is Auto-Intern's universal platform for
              data acquisition and monitoring — developed in Germany over years
              of hands-on work. The current version <strong>v1.5</strong> and
              its predecessors run 365/24/7 in numerous plants, collecting data,
              operating measurement devices, analyzing, and delivering useful
              insights from machines and equipment.
            </p>

            <div className="row margin-top--lg">
              <div className="col col--4 margin-bottom--lg">
                <div className="platformCard">
                  <h3>Inside the enclosure</h3>
                  <p>
                    At the heart of the skAInet Edge-Compute sits a compute
                    module that is pin-compatible with the Raspberry Pi Compute
                    Module family. On request, it can be replaced with a more
                    powerful or a more cost-effective variant — the enclosure,
                    carrier board, and ports stay the same.
                  </p>
                  <p>
                    Two separate Ethernet interfaces let the device join an
                    upstream company network via its WAN port while spanning its
                    own DHCP network across the 7 LAN ports — and powering all
                    7 LAN devices with <strong>PoE Class 3</strong> at the same
                    time.
                  </p>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg">
                <div className="platformCard">
                  <h3>Open, audited, compliant</h3>
                  <p>
                    The skAInet Edge-Compute runs a <strong>Yocto Linux</strong>{' '}
                    with a documented software bill of materials (SBOM), in line
                    with the EU Cyber Resilience Act and comparable regulations.
                  </p>
                  <p>
                    Open source software — quality-checked, configured, and
                    provisioned by Auto-Intern with more than{' '}
                    <strong>25 years of embedded expertise</strong>.
                  </p>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg">
                <div className="platformCard">
                  <h3>Your data, your rules</h3>
                  <p>
                    The Edge-Compute collects, polls, and receives information
                    from sensors, PLCs, computers, and any other network-enabled
                    device. With two separated Ethernet interfaces, data is
                    filtered on the edge and analyzed on powerful processors
                    before it goes anywhere.
                  </p>
                  <p>
                    Thanks to the modern security architecture,{' '}
                    <strong>no raw data reaches your upstream network</strong>{' '}
                    unless you want it to.
                  </p>
                </div>
              </div>
            </div>

            <div className="protocolBlock">
              <h3 className="text--center">One API for every upstream system</h3>
              <p className="text--center platformLead">
                At the same time, the skAInet Edge-Compute serves an API to all
                upstream devices — in whatever protocol they speak:
              </p>
              <div className="protocolList">
                {protocols.map((p) => (
                  <span className="protocolChip" key={p}>
                    {p}
                  </span>
                ))}
                <span className="protocolChip protocolChip--more">and more</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallerySection">
          <div className="container">
            <h2 className="text--center">Built for the field</h2>
            <p className="text--center gallerySubtitle">
              One solid block of anodized aluminum. Every port sealed. Ready for
              your rack, your machine, or your tank.
            </p>
            <div className="row margin-top--lg">
              <div className="col col--6 margin-bottom--lg">
                <figure className="galleryFigure">
                  <img
                    src={useBaseUrl('/img/edge-branded.jpg')}
                    alt="Edge-Compute front plate with labelled ports next to the opened enclosure showing the compute module"
                  />
                  <figcaption>
                    <strong>Inside and out.</strong> Seven PoE ports, one WAN
                    port, one 48 V DC input — and a swappable compute module on
                    a skAInet carrier board. Available with your own branding on
                    the front plate.
                  </figcaption>
                </figure>
              </div>
              <div className="col col--6 margin-bottom--lg">
                <figure className="galleryFigure">
                  <img
                    src={useBaseUrl('/img/edge-in-use-1.jpg')}
                    alt="Edge-Compute on a workbench with several M12 cables connected"
                  />
                  <figcaption>
                    <strong>On the bench.</strong> Plug in a PoE measurement
                    device, a WAN uplink, and power — that is the whole
                    installation.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="specStrip">
          <div className="container">
            <h2>Bring compute to your measurements.</h2>
            <p className="specLabel closerText">
              Whether you are connecting a single sensor or instrumenting an
              entire plant: the skAInet Edge-Compute gives you a rugged,
              secure, and open platform that is already proven in the field.
              Tell us what you want to measure — we will tell you how to get
              there.
            </p>
            <div className="heroButtons margin-top--md">
              <Link className="button button--primary button--lg" href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute">
                Talk to Us
              </Link>
              <Link className="button button--secondary button--outline button--lg" to="/docs/overview">
                Read the Docs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
