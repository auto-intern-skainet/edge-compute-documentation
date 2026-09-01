import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const devices = [
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
];

function Device({d}) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className="deviceCard" id={d.id}>
        <div className="deviceHeader">
          <span className="deviceIcon">{d.icon}</span>
          <div>
            <span className="useCaseSector">{d.category}</span>
            <h3>{d.name}</h3>
          </div>
        </div>
        <p>{d.text}</p>
        <div className="deviceTags">
          {d.tags.map((t) => (
            <span className="deviceTag" key={t}>
              {t}
            </span>
          ))}
        </div>
        {d.related && (
          <div className="pubRelated margin-top--sm">
            See it in use: <Link to={d.related.href}>{d.related.label}</Link>
          </div>
        )}
      </div>
    </div>
  );
}

const devicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'skAInet PoE Measurement Devices',
  itemListElement: devices.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      '@id': `https://edge-compute.skainet.io/devices#${d.id}`,
      name: d.name,
      category: d.category,
      description: d.text,
      brand: {'@id': 'https://www.skainet.io/#brand'},
      manufacturer: {'@id': 'https://www.auto-intern.de/#organization'},
      isAccessoryOrSparePartFor: {
        '@id': 'https://edge-compute.skainet.io/#product',
      },
    },
  })),
};

export default function Devices() {
  return (
    <Layout
      title="PoE Measurement Devices"
      description="Downstream connector boxes and measurement devices for the skAInet Edge-Compute: power, temperature, digital I/O, IO-Link, impedance spectroscopy, infrared, and signaling.">
      <Head>
        <script type="application/ld+json">{JSON.stringify(devicesJsonLd)}</script>
      </Head>
      <header className="pageHero">
        <div className="container">
          <h1>PoE Measurement Devices</h1>
          <p className="pageHeroLead">
            One M12 cable per device — power and data included. The Auto-Intern
            skAInet team has already built a family of downstream connector
            boxes and measurement devices for the Edge-Compute.
          </p>
        </div>
      </header>

      <main className="container useCaseList">
        <section className="margin-bottom--lg">
          <p className="pubIntro">
            Every device below plugs into one of the seven PoE LAN ports of
            the Edge-Compute and shows up as a network node — no separate
            power supply, no gateway, no driver installation. They are
            designed, built, and provisioned in Bochum by the{' '}
            <Link to="/team">same engineers</Link> who built the Edge-Compute
            itself.
          </p>
        </section>

        <section>
          <div className="row">
            {devices.map((d) => (
              <Device d={d} key={d.id} />
            ))}
          </div>
        </section>
      </main>

      <section className="specStrip">
        <div className="container">
          <h2>Your new measurement application.</h2>
          <p className="specLabel closerText">
            Missing a device for your signal? The devices above started the
            same way — as a customer's measurement problem. Tell us what you
            need to capture, and we will design the connector box for it: same
            enclosure, same M12 PoE port, same Edge-Compute.
          </p>
          <div className="heroButtons margin-top--md">
            <Link
              className="button button--primary button--lg"
              href="mailto:info@auto-intern.de?subject=skAInet%20%E2%80%93%20new%20measurement%20application">
              Describe Your Application
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/team">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
