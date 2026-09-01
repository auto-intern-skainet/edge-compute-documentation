import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

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
  return (
    <Layout
      title="Contact"
      description="Talk to the skAInet team at Auto-Intern GmbH about the Edge-Compute: quotes, applications, support.">
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <header className="pageHero">
        <div className="container">
          <h1>Contact</h1>
          <p className="pageHeroLead">
            Tell us what you want to measure. We answer in German or English,
            usually within one business day.
          </p>
        </div>
      </header>

      <main className="container useCaseList">
        <div className="row">
          <div className="col col--6 margin-bottom--lg">
            <div className="teamCard">
              <h3>Sales &amp; quotes</h3>
              <p>
                Pricing starts at <strong>260 €</strong> (<strong>$299</strong>) net, excl. VAT, for the Edge-Compute.
                Send us your application and we will put together a quote
                including the matching PoE measurement devices.
              </p>
              <div className="heroButtons" style={{justifyContent: 'flex-start'}}>
                <Link
                  className="button button--primary button--lg"
                  href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute%20quote">
                  info@auto-intern.de
                </Link>
              </div>
              <p className="margin-top--md">
                Phone (international): <a href="tel:+492349345 1121">+49 234 9345 1121</a>
                <br />
                Phone (Germany): <a href="tel:02349345 1123">0234 9345 1123</a>
              </p>
            </div>
          </div>

          <div className="col col--6 margin-bottom--lg">
            <div className="teamCard">
              <h3>Technical support</h3>
              <p>
                Questions about setup, networking, or the software stack?
                Open an issue in the documentation repository — the engineers
                who built the device read them.
              </p>
              <div className="heroButtons" style={{justifyContent: 'flex-start'}}>
                <Link
                  className="button button--secondary button--outline button--lg"
                  href="https://github.com/auto-intern-skainet/edge-compute-documentation/issues">
                  GitHub Issues
                </Link>
              </div>
              <p className="margin-top--md">
                Customers with a support agreement: use the contact details in
                your delivery documents, or e-mail us with your device serial
                number.
              </p>
            </div>
          </div>

          <div className="col col--12 margin-bottom--lg">
            <div className="teamCard">
              <h3>Address</h3>
              <p>
                <strong>Auto-Intern GmbH</strong> — skAInet, development
                department
                <br />
                Herner Str. 299, Gebäude B29
                <br />
                44809 Bochum
                <br />
                Germany
              </p>
              <p className="pubMeta">
                Managing director: Odin Holmes · Commercial register: AG
                Bochum HRB 11927 · VAT ID: DE220389702 · Part of the{' '}
                <a href="https://gruppe.ai/">AI-Gruppe</a>
              </p>
              <p className="pubMeta">
                <Link to="/imprint">Imprint</Link> · <Link to="/privacy">Privacy</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
