import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Privacy() {
  return (
    <Layout title="Privacy / Datenschutz" description="Privacy policy for edge-compute.skainet.io.">
      <header className="pageHero">
        <div className="container">
          <h1>Privacy / Datenschutz</h1>
          <p className="pageHeroLead">
            This site stores no personal data of its own. Here is what happens
            technically when you visit it.
          </p>
        </div>
      </header>

      <main className="container useCaseList legalPage">
        <h2>1. Verantwortlicher / Controller</h2>
        <p>
          Auto-Intern GmbH, Herner Str. 299, Gebäude B29, 44809 Bochum,
          Deutschland · <a href="mailto:info@auto-intern.de">info@auto-intern.de</a> ·
          Geschäftsführer Odin Holmes. Siehe <Link to="/imprint">Impressum</Link>.
        </p>

        <h2>2. Hosting (GitHub Pages)</h2>
        <p>
          Diese Website ist eine statische Seite und wird von GitHub Pages
          ausgeliefert (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
          Francisco, CA 94107, USA). Beim Aufruf verarbeitet GitHub technisch
          notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene URL,
          Browser-Kennung und Referrer in Server-Logs, um die Seite
          auszuliefern und die Sicherheit des Dienstes zu gewährleisten.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an einem sicheren und effizienten Betrieb). GitHub ist
          unter dem EU-US Data Privacy Framework zertifiziert; Details in der{' '}
          <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">
            GitHub Privacy Statement
          </a>
          .
        </p>
        <p>
          <em>English:</em> This static site is served by GitHub Pages. GitHub
          processes the technical data needed to deliver the page (IP address,
          timestamp, URL, user agent, referrer) in server logs on the basis of
          Art. 6(1)(f) GDPR.
        </p>

        <h2>3. Keine Cookies, kein Tracking / No cookies, no tracking</h2>
        <p>
          Wir setzen keine Cookies, keine Analyse-Tools und keine
          Werbe-Tracker ein. Schriftarten werden von dieser Domain selbst
          ausgeliefert; es werden keine Verbindungen zu Google Fonts oder
          anderen Font-Diensten aufgebaut. Die Seite speichert lediglich Ihre
          Wahl zwischen hellem und dunklem Design im{' '}
          <code>localStorage</code> Ihres Browsers; dieser Wert verlässt Ihr
          Gerät nicht.
        </p>

        <h2>4. Externe Links / External links</h2>
        <p>
          Die Seite verlinkt auf externe Angebote (u.a. GitHub, LinkedIn, X,
          ResearchGate, ORCID, Verlage). Beim Anklicken gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters. Es werden keine
          Inhalte dieser Anbieter eingebettet, solange Sie nicht klicken.
        </p>

        <h2>5. Kontaktaufnahme / Contacting us</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
          Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b
          DSGVO) und löschen sie, sobald der Zweck entfällt und keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>6. Ihre Rechte / Your rights</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
          (Art. 15–21 DSGVO) sowie das Recht auf Beschwerde bei einer
          Aufsichtsbehörde, für uns die Landesbeauftragte für Datenschutz und
          Informationsfreiheit Nordrhein-Westfalen.
        </p>

        <p className="pubMeta">
          Unternehmensweite Datenschutzerklärung / company-wide privacy policy:{' '}
          <a href="https://skainet.io/privacy/">skainet.io/privacy</a>
        </p>
      </main>
    </Layout>
  );
}
