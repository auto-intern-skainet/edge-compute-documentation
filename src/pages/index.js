import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <header className="heroBanner">
        <div className="container">
          <div className="row row--align-center">
            <div className="col col--6 heroText">
              <img
                className="heroLogo"
                src={useBaseUrl('/img/skainet-logo-weiss.png')}
                alt="skAInet"
              />
              <h1>Edge-Compute</h1>
              <p className="heroTagline">
                The programmable M12-PoE switch, router, and compute module for
                industrial edge applications — by Auto-Intern GmbH, Germany.
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
            <h2>Ready to bring compute to your measurements?</h2>
            <p className="specLabel">
              Explore the documentation, clone a minimal example, or talk to us
              directly.
            </p>
            <div className="heroButtons margin-top--md">
              <Link className="button button--primary button--lg" to="/docs/overview">
                Read the Docs
              </Link>
              <Link className="button button--secondary button--outline button--lg" href="mailto:info@auto-intern.de">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
