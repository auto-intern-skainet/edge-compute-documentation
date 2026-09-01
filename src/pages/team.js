import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {publications} from '../data/publications';

const team = [
  {
    name: 'Odin Holmes',
    role: 'Co-founder & Managing Director, Auto-Intern GmbH · Head of Development, skAInet',
    bio: (
      <>
        Odin co-founded Auto-Intern in 2001 and has spent more than 20 years
        writing bare-metal embedded systems. He created the{' '}
        <a href="https://github.com/kvasir-io/Kvasir">Kvasir</a>{' '}
        register-abstraction library, chairs the embedded group of the ISO C++
        committee (SG14), co-founded the emBO++ conference, and has spoken at
        CppCon, C++Now, Meeting C++, and C++ Europe.
      </>
    ),
    links: [
      {label: 'GitHub', href: 'https://github.com/odinthenerd'},
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/odin-holmes-99495bb6/'},
      {label: 'CppCon 2017 talk', href: 'https://www.youtube.com/watch?v=tNXyNa6kf4k'},
      {label: 'CppCast', href: 'https://cppcast.com/odin-holmes-kvasir/'},
    ],
  },
  {
    name: 'Stephan Bökelmann',
    role: 'Chief Operating Officer, AI-Gruppe · Co-founder, skAInet',
    bio: (
      <>
        Stephan joined Auto-Intern in 2014 and, together with Odin Holmes,
        built its industrial process-diagnostics business into skAInet. He
        works on FPGA/Zynq systems, PCB design, and high-throughput data
        acquisition, is completing a PhD in experimental hadron physics
        (PANDA/FAIR) at Ruhr-Universität Bochum, teaches at THGA and
        Hochschule Bochum, and organizes emBO++, KiCon Europe, and the
        Practical Data Science Congress. He writes about embedded, FPGA, and
        DAQ work at <a href="https://maxclerkwell.tech">maxclerkwell.tech</a>.
      </>
    ),
    links: [
      {label: 'maxclerkwell.tech', href: 'https://maxclerkwell.tech'},
      {label: 'About', href: 'https://maxclerkwell.tech/about/'},
      {label: 'Talks', href: 'https://maxclerkwell.tech/talks/'},
      {label: 'GitHub', href: 'https://github.com/maxclerkwell'},
      {label: 'LinkedIn', href: 'https://de.linkedin.com/in/accelerator-stephan'},
      {label: 'ORCID', href: 'https://orcid.org/0000-0002-2119-0064'},
    ],
  },
  {
    name: 'René Glitza',
    role: 'Senior Engineer, Systems Design · Auto-Intern / skAInet · NexuFed AI',
    bio: (
      <>
        René leads predictive-maintenance projects at skAInet and researches
        privacy-preserving federated learning for acoustic sensor networks at
        the Institute of Communication Acoustics, Ruhr-Universität Bochum. He
        holds an M.Sc. in embedded systems and is part of{' '}
        <a href="https://nexufed.ai">NexuFed AI</a>.
      </>
    ),
    links: [
      {label: 'GitHub', href: 'https://github.com/Jearde'},
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/rene-glitza/'},
      {label: 'RUB IKA', href: 'https://www.ika.ruhr-uni-bochum.de/ika/team/glitza.html.de'},
      {label: 'NexuFed AI', href: 'https://nexufed.ai'},
    ],
  },
  {
    name: 'Philipp Lehmann',
    role: 'Engineering, skAInet',
    bio: (
      <>
        Philipp is part of the Edge-Compute engineering team — his signature
        is on the carrier board, right next to the others.
      </>
    ),
    links: [{label: 'GitHub', href: 'https://github.com/nerdforce1'}],
  },
];

function Member({m}) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className="teamCard">
        <h3>{m.name}</h3>
        <p className="teamRole">{m.role}</p>
        <p>{m.bio}</p>
        <div className="teamLinks">
          {m.links.map((l) => (
            <a className="teamLink" href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Publication({p}) {
  return (
    <li className="pubItem">
      <a href={p.url}>
        <strong>{p.title}</strong>
      </a>
      <div className="pubMeta">
        {p.authors} · <em>{p.venue}</em>, {p.year}
      </div>
      {p.summary && <div className="pubSummary">{p.summary}</div>}
      {p.related && p.related.length > 0 && (
        <div className="pubRelated">
          Related:{' '}
          {p.related.map((r, i) => (
            <span key={r.href}>
              {i > 0 && ', '}
              <Link to={r.href}>{r.label}</Link>
            </span>
          ))}
        </div>
      )}
    </li>
  );
}

export default function Team() {
  return (
    <Layout
      title="Team & Research"
      description="The engineers behind the skAInet Edge-Compute, and the research it grew out of.">
      <header className="pageHero">
        <div className="container">
          <h1>Team &amp; Research</h1>
          <p className="pageHeroLead">
            The skAInet Edge-Compute is built in Bochum, Germany, by a small
            team of embedded engineers and physicists — and it grew out of
            real research problems.
          </p>
        </div>
      </header>

      <main className="container useCaseList">
        <section className="margin-bottom--xl">
          <h2>The engineers</h2>
          <div className="row margin-top--lg">
            {team.map((m) => (
              <Member m={m} key={m.name} />
            ))}
          </div>
        </section>

        <section className="margin-bottom--xl" id="publications">
          <h2>Publications</h2>
          <p className="pubIntro">
            Peer-reviewed work by the team that informs the Edge-Compute — from
            federated learning on sensor networks to river monitoring and
            detector physics at GSI/FAIR. Each entry links to the application
            it relates to.
          </p>
          <ul className="pubList">
            {publications.map((p) => (
              <Publication p={p} key={p.url} />
            ))}
          </ul>
        </section>
      </main>

      <section className="specStrip">
        <div className="container">
          <h2>Want to work with us?</h2>
          <p className="specLabel closerText">
            Whether you are a company with a measurement problem or a research
            group with a detector to control — we would like to hear from you.
          </p>
          <div className="heroButtons margin-top--md">
            <Link className="button button--primary button--lg" href="mailto:info@auto-intern.de">
              Get in Touch
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/applications">
              See the Applications
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
