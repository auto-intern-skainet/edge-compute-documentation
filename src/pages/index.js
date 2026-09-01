import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import {useContent} from '../content';

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

function LogoCarousel({t}) {
  // The list is rendered twice so the CSS animation can loop seamlessly.
  const items = [...customers, ...customers];
  return (
    <section className="customerSection">
      <div className="container">
        <h2 className="text--center">{t.title}</h2>
        <p className="text--center customerSubtitle">
          {t.subtitle}
          <Link to="/applications">{t.link}</Link>
        </p>
      </div>
      <div className="logoMarquee" aria-label="Customer logos">
        <div className="logoTrack">
          {items.map((c, i) => (
            <div className="logoCard" key={`${c.file}-${i}`} title={c.name}>
              <img src={useBaseUrl(`/img/logos/${c.file}`)} alt={c.name} />
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
  '@id': 'https://edge-compute.skainet.io/#product',
  name: 'skAInet Edge-Compute',
  alternateName: 'Edge-Compute v1.5',
  description:
    'Programmable M12-PoE switch, router, and compute module for industrial edge applications. Rugged anodized aluminum enclosure, sealed M12 connectors, operation under water up to 1 bar, 7 PoE LAN ports plus WAN, 8-core ARM CPU, 8 GB RAM, 32 GB eMMC, Yocto Linux with documented SBOM.',
  image: [
    'https://edge-compute.skainet.io/img/edge-in-use-2.jpg',
    'https://edge-compute.skainet.io/img/edge-branded.jpg',
    'https://edge-compute.skainet.io/img/edge-in-use-1.jpg',
  ],
  url: 'https://edge-compute.skainet.io/',
  brand: {'@id': 'https://www.skainet.io/#brand'},
  manufacturer: {'@id': 'https://www.auto-intern.de/#organization'},
  category: 'Industrial edge computing / IIoT gateway',
  countryOfOrigin: 'DE',
  additionalProperty: [
    {'@type': 'PropertyValue', name: 'CPU', value: '8-core 64-bit ARM @ 1.5 GHz'},
    {'@type': 'PropertyValue', name: 'RAM', value: '8 GB LPDDR4-3200'},
    {'@type': 'PropertyValue', name: 'Storage', value: '32 GB eMMC'},
    {'@type': 'PropertyValue', name: 'LAN ports', value: '7 × M12 Ethernet with PoE+ (IEEE 802.3at)'},
    {'@type': 'PropertyValue', name: 'WAN ports', value: '1 × M12 Gigabit Ethernet'},
    {'@type': 'PropertyValue', name: 'Power input', value: '48–72 V DC via M12'},
    {'@type': 'PropertyValue', name: 'Ingress protection', value: 'IP67, operation under water up to 1 bar'},
    {'@type': 'PropertyValue', name: 'Operating temperature', value: '−25 °C to +70 °C'},
    {'@type': 'PropertyValue', name: 'Operating system', value: 'Yocto Linux with documented SBOM'},
  ],
  offers: [
    {
      '@type': 'Offer',
      price: '260',
      priceCurrency: 'EUR',
      priceSpecification: {'@type': 'PriceSpecification', price: '260', priceCurrency: 'EUR', minPrice: '260', valueAddedTaxIncluded: false},
      availability: 'https://schema.org/InStock',
      url: 'https://edge-compute.skainet.io/contact',
      seller: {'@id': 'https://www.auto-intern.de/#organization'},
    },
    {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'USD',
      priceSpecification: {'@type': 'PriceSpecification', price: '299', priceCurrency: 'USD', minPrice: '299', valueAddedTaxIncluded: false},
      availability: 'https://schema.org/InStock',
      url: 'https://edge-compute.skainet.io/contact',
      seller: {'@id': 'https://www.auto-intern.de/#organization'},
    },
  ],
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const c = useContent();
  const t = c.index;
  return (
    <Layout description={t.metaDescription || siteConfig.tagline}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Head>
      <header className="heroBanner">
        <div className="container">
          <div className="row row--align-center">
            <div className="col col--6 heroText">
              <a href="https://www.skainet.io" title="skainet.io">
                <img className="heroLogo" src={useBaseUrl('/img/skainet-logo-weiss.png')} alt="skAInet" />
              </a>
              <h1>{t.heroTitle}</h1>
              <p className="heroTagline">
                {t.taglinePre}
                <a className="heroCompanyLink" href="https://www.auto-intern.de">
                  {t.company}
                </a>
                {t.taglinePost}
              </p>
              <div className="heroButtons">
                <Link className="button button--primary button--lg" href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute">
                  {c.common.contactUs}
                </Link>
                <Link className="button button--secondary button--outline button--lg" to="/docs/getting-started">
                  {c.common.getStarted}
                </Link>
              </div>
              <Link className="heroSecondaryLink" to="/docs/specifications">
                {t.specsLink}
              </Link>
              <p className="heroPrice">
                {t.pricePre}
                <strong>260 €</strong> / <strong>$299</strong> {t.priceNet} ·{' '}
                <a href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute%20quote">{t.requestQuote}</a>
              </p>
            </div>
            <div className="col col--6">
              <img className="heroImage" src={useBaseUrl('/img/edge-in-use-2.jpg')} alt={t.heroImageAlt} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="specStrip">
          <div className="container">
            <div className="row">
              {t.specs.map((s) => (
                <div className="col" key={s.label}>
                  <span className="specValue">{s.value}</span>
                  <span className="specLabel">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogoCarousel t={t.trusted} />

        <section className="featureSection">
          <div className="container">
            <div className="row">
              {t.features.map((f) => (
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

        <section className="platformSection" id="platform">
          <div className="container">
            <h2 className="text--center">{t.platform.title}</h2>
            <p className="text--center platformLead">{t.platform.lead}</p>
            <div className="row margin-top--lg">
              {t.platform.cards.map((card) => (
                <div className="col col--4 margin-bottom--lg" key={card.title}>
                  <div className="platformCard">
                    <h3>{card.title}</h3>
                    {card.paras.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="protocolBlock">
              <h3 className="text--center">{t.platform.apiTitle}</h3>
              <p className="text--center platformLead">{t.platform.apiLead}</p>
              <div className="protocolList">
                {protocols.map((p) => (
                  <span className="protocolChip" key={p}>
                    {p}
                  </span>
                ))}
                <span className="protocolChip protocolChip--more">{t.platform.andMore}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallerySection">
          <div className="container">
            <h2 className="text--center">{t.gallery.title}</h2>
            <p className="text--center gallerySubtitle">{t.gallery.subtitle}</p>
            <div className="row margin-top--lg">
              {[
                {src: '/img/edge-branded.jpg', ...t.gallery.figures[0]},
                {src: '/img/edge-in-use-1.jpg', ...t.gallery.figures[1]},
              ].map((f) => (
                <div className="col col--6 margin-bottom--lg" key={f.src}>
                  <figure className="galleryFigure">
                    <img src={useBaseUrl(f.src)} alt={f.alt} />
                    <figcaption>
                      <strong>{f.lead}</strong> {f.text}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="specStrip">
          <div className="container">
            <h2>{t.closer.title}</h2>
            <p className="specLabel closerText">{t.closer.text}</p>
            <div className="heroButtons margin-top--md">
              <Link className="button button--primary button--lg" href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute">
                {c.common.talkToUs}
              </Link>
              <Link className="button button--secondary button--outline button--lg" to="/docs">
                {c.common.readTheDocs}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
