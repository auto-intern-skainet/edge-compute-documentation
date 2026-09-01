import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {publications} from '../data/publications';

// `primary` is the profile the name links to; `links` are secondary chips.
const team = [
  {
    name: 'Stephan Bökelmann',
    role: 'System Architect',
    primary: {label: 'maxclerkwell.tech', href: 'https://maxclerkwell.tech'},
    bio: (
      <>
        Stephan joined Auto-Intern in 2014 and, together with Odin Holmes,
        built its industrial process-diagnostics business into skAInet. He
        designs the overall system — from carrier board and FPGA/Zynq
        data-acquisition paths to the Yocto Linux image — and is completing a
        PhD in experimental hadron physics (PANDA/FAIR) at Ruhr-Universität
        Bochum. He writes about embedded, FPGA, and DAQ work at{' '}
        <a href="https://maxclerkwell.tech">maxclerkwell.tech</a>.
      </>
    ),
    links: [
      {label: 'About', href: 'https://maxclerkwell.tech/about/'},
      {label: 'Talks', href: 'https://maxclerkwell.tech/talks/'},
      {label: 'GitHub', href: 'https://github.com/maxclerkwell'},
      {label: 'LinkedIn', href: 'https://de.linkedin.com/in/accelerator-stephan'},
      {label: 'ORCID', href: 'https://orcid.org/0000-0002-2119-0064'},
    ],
  },
  {
    name: 'Odin Holmes',
    role: 'Hardware Design and Implementation',
    primary: {label: 'Twitter / X', href: 'https://x.com/odinthenerd'},
    bio: (
      <>
        Odin co-founded Auto-Intern in 2001 and has spent more than 20 years
        writing bare-metal embedded systems. He designs and implements the
        Edge-Compute hardware and firmware, created the{' '}
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
    name: 'Tabea Bökelmann',
    role: 'User Interaction',
    primary: {
      label: 'LinkedIn',
      href: 'https://de.linkedin.com/in/tabea-r%C3%B6themeyer-0b9794198',
    },
    bio: (
      <>
        Tabea is a physicist and computer scientist who has been with
        Auto-Intern since 2017. She shapes how people interact with the
        Edge-Compute and its measurement devices — from the software and data
        side to the sensor hardware she has led the design of in field
        projects such as the 25square weather sensor network.
      </>
    ),
    links: [],
  },
  {
    name: 'René Glitza',
    role: 'Analytics, Learning and AI',
    primary: {label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Rene-Glitza'},
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
      {label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=tHPrZugAAAAJ'},
      {label: 'ORCID', href: 'https://orcid.org/0009-0002-6437-5912'},
      {label: 'GitHub', href: 'https://github.com/Jearde'},
      {label: 'RUB IKA', href: 'https://www.ika.ruhr-uni-bochum.de/ika/team/glitza.html.en'},
      {label: 'NexuFed AI', href: 'https://nexufed.ai'},
    ],
  },
  {
    name: 'Philipp Lehmann',
    role: 'Cyber Security',
    primary: {label: 'GitHub', href: 'https://github.com/PhilippTheServer'},
    bio: (
      <>
        Philipp looks after the security side of the Edge-Compute — the
        hardened Yocto Linux image, its documented SBOM, and the network
        architecture that keeps raw data on the LAN side unless you decide
        otherwise.
      </>
    ),
    links: [],
  },
];

function Member({m}) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className="teamCard">
        <h3>
          <a href={m.primary.href}>{m.name}</a>
        </h3>
        <p className="teamRole">{m.role}</p>
        <p>{m.bio}</p>
        <div className="teamLinks">
          <a className="teamLink teamLink--primary" href={m.primary.href}>
            {m.primary.label}
          </a>
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
          <h2>The team</h2>
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
