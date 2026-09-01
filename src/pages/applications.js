import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import {useContent} from '../content';

// Locale-independent metadata per use case: partner logos and photos.
const meta = {
  diana: {partners: [{name: 'DB Netz AG', file: 'db.svg'}]},
  kelvion: {partners: [{name: 'Kelvion', file: 'kelvion.svg'}]},
  nexufed: {
    partners: [
      {name: 'NexuFed AI', file: 'nexufed.png'},
      {name: 'Ruhr-Universität Bochum', file: 'rub.svg'},
    ],
  },
  horus: {partners: [{name: 'Kurtz Ersa', file: 'kurtz-ersa.svg'}], image: '/img/edge-branded.jpg'},
  panda: {
    partners: [
      {name: 'Ruhr-Universität Bochum', file: 'rub.svg'},
      {name: 'GSI / FAIR', file: 'gsi.svg'},
    ],
  },
  biofilm: {partners: [{name: 'Montana State University', file: 'msu.svg'}]},
};

function PartnerLogos({partners}) {
  return (
    <div className="useCaseLogos">
      {partners.map((p) => (
        <div className="logoCard logoCard--small" key={p.file} title={p.name}>
          <img src={useBaseUrl(`/img/logos/${p.file}`)} alt={p.name} />
        </div>
      ))}
    </div>
  );
}

function UseCase({uc, index}) {
  const m = meta[uc.id];
  const reversed = index % 2 === 1;
  return (
    <article className="useCase" id={uc.id}>
      <div className={`row row--align-center ${reversed ? 'useCase--reversed' : ''}`}>
        <div className="col col--7">
          <span className="useCaseSector">{uc.sector}</span>
          <h2>{uc.title}</h2>
          {uc.paras.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <ul className="useCaseBullets">
            {uc.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="col col--5 useCaseAside">
          {m.image && <img className="useCaseImage" src={useBaseUrl(m.image)} alt={uc.imageAlt || uc.title} />}
          <PartnerLogos partners={m.partners} />
        </div>
      </div>
    </article>
  );
}

export default function Applications() {
  const c = useContent();
  const t = c.applications;
  return (
    <Layout title={t.title} description={t.metaDescription}>
      <header className="pageHero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="pageHeroLead">{t.lead}</p>
        </div>
      </header>

      <main className="container useCaseList">
        {t.items.map((uc, i) => (
          <UseCase uc={uc} index={i} key={uc.id} />
        ))}
      </main>

      <section className="specStrip">
        <div className="container">
          <h2>{t.closer.title}</h2>
          <p className="specLabel closerText">{t.closer.text}</p>
          <div className="heroButtons margin-top--md">
            <Link
              className="button button--primary button--lg"
              href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute%20%E2%80%93%20our%20application">
              {t.closer.primary}
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/devices">
              {t.closer.secondary}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
