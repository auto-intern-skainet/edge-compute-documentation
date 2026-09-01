import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import {useContent} from '../content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://edge-compute.skainet.io/contact',
  url: 'https://edge-compute.skainet.io/contact',
  name: 'Contact — skAInet Edge-Compute',
  about: {'@id': 'https://edge-compute.skainet.io/#product'},
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://www.auto-intern.de/#organization',
    name: 'Auto-Intern GmbH',
    email: 'info@auto-intern.de',
    telephone: '+49-234-9345-1121',
    vatID: 'DE220389702',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Herner Str. 299, Gebäude B29',
      postalCode: '44809',
      addressLocality: 'Bochum',
      addressCountry: 'DE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@auto-intern.de',
        telephone: '+49-234-9345-1121',
        availableLanguage: ['de', 'en'],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        url: 'https://github.com/auto-intern-skainet/edge-compute-documentation/issues',
        availableLanguage: ['de', 'en'],
      },
    ],
  },
};

export default function Contact() {
  const c = useContent();
  const t = c.contact;
  return (
    <Layout title={t.title} description={t.metaDescription}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <header className="pageHero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="pageHeroLead">{t.lead}</p>
        </div>
      </header>

      <main className="container useCaseList">
        <div className="row">
          <div className="col col--6 margin-bottom--lg">
            <div className="teamCard">
              <h3>{t.sales.title}</h3>
              <p>
                {t.sales.textPre}
                <strong>260 €</strong> (<strong>$299</strong>){t.sales.textPost}
              </p>
              <div className="heroButtons" style={{justifyContent: 'flex-start'}}>
                <Link className="button button--primary button--lg" href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute%20quote">
                  info@auto-intern.de
                </Link>
              </div>
              <p className="margin-top--md">
                {t.sales.phoneIntl}: <a href="tel:+492349345 1121">+49 234 9345 1121</a>
                <br />
                {t.sales.phoneDe}: <a href="tel:02349345 1123">0234 9345 1123</a>
              </p>
            </div>
          </div>

          <div className="col col--6 margin-bottom--lg">
            <div className="teamCard">
              <h3>{t.support.title}</h3>
              <p>{t.support.text}</p>
              <div className="heroButtons" style={{justifyContent: 'flex-start'}}>
                <Link
                  className="button button--secondary button--outline button--lg"
                  href="https://github.com/auto-intern-skainet/edge-compute-documentation/issues">
                  {t.support.button}
                </Link>
              </div>
              <p className="margin-top--md">{t.support.note}</p>
            </div>
          </div>

          <div className="col col--12 margin-bottom--lg">
            <div className="teamCard">
              <h3>{t.address.title}</h3>
              <p>
                <strong>Auto-Intern GmbH</strong> — {t.address.dept}
                <br />
                Herner Str. 299, Gebäude B29
                <br />
                44809 Bochum
                <br />
                {t.address.country}
              </p>
              <p className="pubMeta">
                {t.address.legal}
                <a href="https://gruppe.ai/">AI-Gruppe</a>
              </p>
              <p className="pubMeta">
                <Link to="/imprint">{t.address.imprint}</Link> · <Link to="/privacy">{t.address.privacy}</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
