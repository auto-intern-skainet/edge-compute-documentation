import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import {publications} from '../data/publications';

const SITE = 'https://edge-compute.skainet.io';
const ORG = 'https://www.auto-intern.de/#organization';
const RUB = {
  '@type': 'CollegeOrUniversity',
  '@id': 'https://www.ruhr-uni-bochum.de/#organization',
  name: 'Ruhr-Universität Bochum',
  url: 'https://www.ruhr-uni-bochum.de/',
};

// Each member: `primary` is the profile the name links to; `links` are
// secondary chips; the remaining fields feed the Person JSON-LD.
const team = [
  {
    id: 'stephan-boekelmann',
    name: 'Stephan Bökelmann',
    givenName: 'Stephan',
    familyName: 'Bökelmann',
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
    description:
      'System architect of the skAInet Edge-Compute. Chief Operating Officer of the AI-Gruppe, co-founder of skAInet, engineer and physicist working on FPGA/Zynq systems, PCB design, and high-throughput data acquisition; PhD candidate in experimental hadron physics (PANDA/FAIR) at Ruhr-Universität Bochum; lecturer; organizer of emBO++, KiCon Europe, and the Practical Data Science Congress.',
    links: [
      {label: 'About', href: 'https://maxclerkwell.tech/about/'},
      {label: 'Talks', href: 'https://maxclerkwell.tech/talks/'},
      {label: 'GitHub', href: 'https://github.com/maxclerkwell'},
      {label: 'Twitter / X', href: 'https://x.com/maxclerkwell'},
      {label: 'LinkedIn', href: 'https://de.linkedin.com/in/accelerator-stephan'},
      {label: 'ORCID', href: 'https://orcid.org/0000-0002-2119-0064'},
      {label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Stephan-Boekelmann'},
      {label: 'INSPIRE', href: 'https://inspirehep.net/authors/2177110'},
      {label: 'arXiv', href: 'https://arxiv.org/a/0000-0002-2119-0064.html'},
    ],
    jsonLd: {
      jobTitle: ['System Architect', 'Chief Operating Officer'],
      identifier: [
        {'@type': 'PropertyValue', propertyID: 'ORCID', value: '0000-0002-2119-0064'},
        {'@type': 'PropertyValue', propertyID: 'INSPIRE-HEP', value: '2177110'},
      ],
      affiliation: [
        {'@id': ORG},
        {'@type': 'Organization', name: 'AI-Gruppe', url: 'https://gruppe.ai/'},
        {...RUB, department: 'Institut für Experimentalphysik I (EP1)'},
        {'@type': 'CollegeOrUniversity', name: 'Technische Hochschule Georg Agricola', url: 'https://www.thga.de/'},
      ],
      memberOf: [
        {'@type': 'Organization', name: 'PANDA Collaboration', url: 'https://panda.gsi.de/'},
        {'@type': 'Organization', name: 'Open Skunkforce e.V.', url: 'https://skunkforce.org/'},
      ],
      knowsAbout: [
        'Embedded systems',
        'FPGA and Zynq SoC design',
        'PCB design (KiCad)',
        'Data acquisition systems',
        'Yocto Linux',
        'Experimental hadron physics',
        'Electrochemical impedance spectroscopy',
        'Condition monitoring',
      ],
    },
  },
  {
    id: 'odin-holmes',
    name: 'Odin Holmes',
    givenName: 'Odin',
    familyName: 'Holmes',
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
    description:
      'Hardware design and implementation of the skAInet Edge-Compute. Co-founder and managing director of Auto-Intern GmbH, head of development at skAInet, embedded C++ engineer with more than 20 years of bare-metal experience; creator of the Kvasir register-abstraction library, chair of the ISO C++ SG14 embedded study group, co-founder of the emBO++ conference, speaker at CppCon, C++Now, Meeting C++, and C++ Europe.',
    links: [
      {label: 'GitHub', href: 'https://github.com/odinthenerd'},
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/odin-holmes-99495bb6/'},
      {label: 'CppCon 2017 talk', href: 'https://www.youtube.com/watch?v=tNXyNa6kf4k'},
      {label: 'CppCast', href: 'https://cppcast.com/odin-holmes-kvasir/'},
      {label: 'Kvasir', href: 'https://github.com/kvasir-io/Kvasir'},
    ],
    jsonLd: {
      jobTitle: ['Hardware Design and Implementation', 'Managing Director', 'Head of Development'],
      affiliation: [{'@id': ORG}],
      memberOf: [
        {'@type': 'Organization', name: 'ISO C++ Standards Committee, SG14 (Low Latency / Embedded)', url: 'https://isocpp.org/std/the-committee'},
        {'@type': 'Organization', name: 'emBO++ Embedded C++ Conference', url: 'https://www.embo.io/'},
      ],
      knowsAbout: [
        'Embedded C++',
        'Bare-metal firmware',
        'Template metaprogramming',
        'Hardware abstraction (Kvasir)',
        'Interrupt service routines and concurrency',
        'Industrial hardware design',
      ],
    },
  },
  {
    id: 'tabea-boekelmann',
    name: 'Tabea Bökelmann',
    givenName: 'Tabea',
    familyName: 'Bökelmann',
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
    description:
      'User interaction for the skAInet Edge-Compute. Physicist and computer scientist at Auto-Intern GmbH since 2017, Head of Software and of Data & Analytics; led the design and construction of the sensor hardware for the 25square street-level weather sensor network.',
    links: [{label: 'Twitter / X', href: 'https://x.com/tabeatheunicorn'}],
    jsonLd: {
      additionalName: 'Viktoria',
      alternateName: [
        'Tabea Viktoria Bökelmann',
        'Tabea Röthemeyer',
        'Tabea Viktoria Röthemeyer',
      ],
      jobTitle: ['User Interaction', 'Head of Software', 'Head of Data & Analytics'],
      affiliation: [
        {'@id': ORG},
        {'@type': 'Organization', name: 'AI-Gruppe', url: 'https://gruppe.ai/'},
      ],
      knowsAbout: [
        'User interaction design',
        'Software engineering',
        'Data analytics',
        'Sensor hardware',
        'Physics',
        'Computer science',
      ],
    },
  },
  {
    id: 'rene-glitza',
    name: 'René Glitza',
    givenName: 'René',
    familyName: 'Glitza',
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
    description:
      'Analytics, machine learning, and AI for the skAInet Edge-Compute. Senior Engineer, Systems Design at Auto-Intern GmbH leading predictive-maintenance projects; researcher at the Institute of Communication Acoustics, Ruhr-Universität Bochum, on privacy-preserving federated learning, anomalous sound detection, and acoustic sensor networks; M.Sc. in electrical engineering and information technology (embedded systems); part of NexuFed AI.',
    links: [
      {label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=tHPrZugAAAAJ'},
      {label: 'ORCID', href: 'https://orcid.org/0009-0002-6437-5912'},
      {label: 'GitHub', href: 'https://github.com/Jearde'},
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/rene-glitza/'},
      {label: 'RUB IKA', href: 'https://www.ika.ruhr-uni-bochum.de/ika/team/glitza.html.en'},
      {label: 'NexuFed AI', href: 'https://nexufed.ai'},
    ],
    jsonLd: {
      jobTitle: ['Analytics, Learning and AI', 'Senior Engineer, Systems Design'],
      identifier: [
        {'@type': 'PropertyValue', propertyID: 'ORCID', value: '0009-0002-6437-5912'},
        {'@type': 'PropertyValue', propertyID: 'Google Scholar', value: 'tHPrZugAAAAJ'},
      ],
      affiliation: [
        {'@id': ORG},
        {...RUB, department: 'Institute of Communication Acoustics (IKA)'},
        {'@type': 'Organization', name: 'NexuFed AI', url: 'https://nexufed.ai'},
      ],
      knowsAbout: [
        'Federated learning',
        'Anomalous sound detection',
        'Acoustic sensor networks',
        'Predictive maintenance',
        'Condition monitoring',
        'Audio signal processing with neural networks',
        'Embedded systems',
      ],
    },
  },
  {
    id: 'philipp-lehmann',
    name: 'Philipp Lehmann',
    givenName: 'Philipp',
    familyName: 'Lehmann',
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
    description:
      'Cyber security for the skAInet Edge-Compute at Auto-Intern GmbH / AI-Gruppe: hardened Yocto Linux image, software bill of materials (SBOM), Cyber Resilience Act alignment, and the segmented network architecture between LAN and WAN.',
    links: [{label: 'Twitter / X', href: 'https://x.com/philippthecron'}],
    jsonLd: {
      jobTitle: ['Cyber Security'],
      affiliation: [
        {'@id': ORG},
        {'@type': 'Organization', name: 'AI-Gruppe', url: 'https://gruppe.ai/'},
      ],
      knowsAbout: [
        'Cyber security',
        'Embedded Linux hardening',
        'Software bill of materials (SBOM)',
        'EU Cyber Resilience Act',
        'Network segmentation',
      ],
    },
  },
];

function personJsonLd(m) {
  const {jsonLd = {}} = m;
  return {
    '@type': 'Person',
    '@id': `${SITE}/team#${m.id}`,
    name: m.name,
    givenName: m.givenName,
    ...(jsonLd.additionalName ? {additionalName: jsonLd.additionalName} : {}),
    familyName: m.familyName,
    ...(jsonLd.alternateName ? {alternateName: jsonLd.alternateName} : {}),
    jobTitle: jsonLd.jobTitle || m.role,
    description: m.description,
    url: m.primary.href,
    mainEntityOfPage: `${SITE}/team`,
    sameAs: [m.primary.href, ...m.links.map((l) => l.href)],
    ...(jsonLd.identifier ? {identifier: jsonLd.identifier} : {}),
    worksFor: {'@id': ORG},
    affiliation: jsonLd.affiliation || [{'@id': ORG}],
    ...(jsonLd.memberOf ? {memberOf: jsonLd.memberOf} : {}),
    ...(jsonLd.knowsAbout ? {knowsAbout: jsonLd.knowsAbout} : {}),
    workLocation: {
      '@type': 'Place',
      address: {'@type': 'PostalAddress', addressLocality: 'Bochum', addressCountry: 'DE'},
    },
  };
}

const teamJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SITE}/team`,
      name: 'Team & Research — skAInet Edge-Compute',
      url: `${SITE}/team`,
      about: {'@id': `${SITE}/#product`},
      isPartOf: {'@id': `${SITE}/#website`},
    },
    {
      '@type': 'Organization',
      '@id': ORG,
      name: 'Auto-Intern GmbH',
      url: 'https://www.auto-intern.de',
      employee: team.map((m) => ({'@id': `${SITE}/team#${m.id}`})),
    },
    ...team.map(personJsonLd),
    ...publications.map((p) => ({
      '@type': 'ScholarlyArticle',
      headline: p.title,
      author: p.authors,
      datePublished: String(p.year),
      isPartOf: {'@type': 'Periodical', name: p.venue},
      url: p.url,
      ...(p.url.startsWith('https://doi.org/') ? {identifier: {'@type': 'PropertyValue', propertyID: 'DOI', value: p.url.replace('https://doi.org/', '')}} : {}),
      abstract: p.summary,
    })),
  ],
};

function Member({m}) {
  return (
    <div className="col col--6 margin-bottom--lg" id={m.id}>
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
      <Head>
        <script type="application/ld+json">{JSON.stringify(teamJsonLd)}</script>
      </Head>
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
              <Member m={m} key={m.id} />
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
