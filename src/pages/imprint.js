import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Imprint() {
  return (
    <Layout title="Imprint / Impressum" description="Legal notice for edge-compute.skainet.io (Auto-Intern GmbH).">
      <header className="pageHero">
        <div className="container">
          <h1>Imprint / Impressum</h1>
          <p className="pageHeroLead">Angaben gemäß § 5 DDG · Information pursuant to § 5 DDG</p>
        </div>
      </header>

      <main className="container useCaseList legalPage">
        <h2>Anbieter / Provider</h2>
        <p>
          skAInet, das Ingenieurbüro für Auftragsentwicklung der
          <br />
          <strong>Auto-Intern GmbH</strong>
          <br />
          Herner Str. 299, Gebäude B29
          <br />
          44809 Bochum
          <br />
          Deutschland / Germany
        </p>

        <h2>Vertreten durch / Represented by</h2>
        <p>Geschäftsführer / Managing director: Odin Holmes</p>

        <h2>Kontakt / Contact</h2>
        <p>
          Telefon Deutschland: <a href="tel:02349345 1123">0234 9345 1123</a>
          <br />
          Telefon international: <a href="tel:+492349345 1121">+49 234 9345 1121</a>
          <br />
          E-Mail: <a href="mailto:info@auto-intern.de">info@auto-intern.de</a> ·{' '}
          <a href="mailto:info@skainet.io">info@skainet.io</a>
        </p>

        <h2>Registereintrag / Commercial register</h2>
        <p>
          Amtsgericht Bochum, HRB 11927
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG / VAT ID:
          DE220389702
        </p>
        <p>
          Die Auto-Intern GmbH ist ein Unternehmen der{' '}
          <a href="https://gruppe.ai/">AI-Gruppe</a>.
        </p>

        <h2>Streitbeilegung / Dispute resolution</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/">ec.europa.eu/consumers/odr</a>.
          Wir sind bereit, an einem außergerichtlichen Schlichtungsverfahren
          teilzunehmen.
        </p>

        <h2>Verantwortlich für den Inhalt / Responsible for content</h2>
        <p>Odin Holmes, Anschrift wie oben / address as above.</p>

        <h2>Hosting</h2>
        <p>
          Diese Website wird als statische Seite über GitHub Pages
          bereitgestellt (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
          Francisco, CA 94107, USA). Details zur Datenverarbeitung finden Sie
          in der <Link to="/privacy">Datenschutzerklärung</Link>.
        </p>

        <p className="pubMeta">
          Siehe auch das Impressum der Unternehmensseite:{' '}
          <a href="https://skainet.io/imprint/">skainet.io/imprint</a>
        </p>
      </main>
    </Layout>
  );
}
