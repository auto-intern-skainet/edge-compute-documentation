import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import {useContent} from '../content';

function Device({d, t}) {
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
          {d.tags.map((tag) => (
            <span className="deviceTag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {d.related && (
          <div className="pubRelated margin-top--sm">
            {t.seeItInUse} <Link to={d.related.href}>{d.related.label}</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Devices() {
  const c = useContent();
  const t = c.devices;
  const devicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'skAInet PoE Measurement Devices',
    itemListElement: t.items.map((d, i) => ({
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
        isAccessoryOrSparePartFor: {'@id': 'https://edge-compute.skainet.io/#product'},
      },
    })),
  };
  return (
    <Layout title={t.title} description={t.metaDescription}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(devicesJsonLd)}</script>
      </Head>
      <header className="pageHero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="pageHeroLead">{t.lead}</p>
        </div>
      </header>

      <main className="container useCaseList">
        <section className="margin-bottom--lg">
          <p className="pubIntro">
            {t.introPre}
            <Link to="/team">{t.introLink}</Link>
            {t.introPost}
          </p>
        </section>
        <section>
          <div className="row">
            {t.items.map((d) => (
              <Device d={d} t={t} key={d.id} />
            ))}
          </div>
        </section>
      </main>

      <section className="specStrip">
        <div className="container">
          <h2>{t.closer.title}</h2>
          <p className="specLabel closerText">{t.closer.text}</p>
          <div className="heroButtons margin-top--md">
            <Link
              className="button button--primary button--lg"
              href="mailto:info@auto-intern.de?subject=skAInet%20%E2%80%93%20new%20measurement%20application">
              {t.closer.primary}
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/team">
              {c.common.meetTheTeam}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
