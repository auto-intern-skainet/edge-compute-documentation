import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

const useCases = [
  {
    id: 'diana',
    sector: 'Railway infrastructure',
    title: 'Switch-point motor monitoring in the DB Netz DIANA project',
    partners: [{name: 'DB Netz AG', file: 'db.svg'}],
    body: (
      <>
        <p>
          In the <strong>DIANA</strong> project of DB Netz AG, a predecessor
          of the Edge-Compute works together with the <strong>DIR-IDS</strong>{' '}
          sensor to capture the power data of railway switch-point motors.
        </p>
        <p>
          Each switching operation leaves a characteristic current and power
          signature. Recording it continuously at the trackside — instead of
          during periodic inspections — turns every switch into a monitored
          asset and makes wear visible long before it causes a failure.
        </p>
      </>
    ),
    bullets: [
      'Trackside acquisition of motor power data via the DIR-IDS sensor',
      'Local buffering and pre-processing before upload',
      'Continuous condition data instead of interval-based inspection',
    ],
  },
  {
    id: 'kelvion',
    sector: 'Process industry · Heat exchangers',
    title: 'Fouling detection on air-fin coolers with infrared cameras',
    partners: [{name: 'Kelvion', file: 'kelvion.svg'}],
    body: (
      <>
        <p>
          At <strong>Kelvion</strong>, the Edge-Compute serves as the data
          acquisition platform for <strong>IR cameras</strong> that detect
          fouling on air-fin coolers.
        </p>
        <p>
          Fouling reduces heat transfer and drives up energy consumption.
          Thermal imaging shows it directly — the Edge-Compute powers the
          PoE cameras, collects the image streams, and provides the compute to
          evaluate them on site.
        </p>
      </>
    ),
    bullets: [
      'PoE power and data for multiple IR cameras over a single M12 cable each',
      'On-edge image acquisition and evaluation',
      'Aggregated fouling indicators forwarded upstream — not raw video',
    ],
  },
  {
    id: 'nexufed',
    sector: 'Predictive maintenance · Federated learning',
    title: 'Privacy-preserving pump condition monitoring',
    partners: [
      {name: 'NexuFed AI', file: 'nexufed.png'},
      {name: 'Ruhr-Universität Bochum', file: 'rub.svg'},
    ],
    body: (
      <>
        <p>
          <strong>NexuFed AI</strong> and the{' '}
          <strong>Institute of Communication Acoustics</strong> at
          Ruhr-Universität Bochum (Prof. Martin) use the Edge-Compute to
          analyze pump data and enable condition-based maintenance with
          maximum privacy.
        </p>
        <p>
          With federated learning, models are trained where the data is
          produced. The Edge-Compute's two separated Ethernet interfaces make
          this natural: sensor data stays on the LAN side, and only model
          updates — never raw measurements — cross into the upstream network.
        </p>
      </>
    ),
    bullets: [
      'Acoustic and vibration data analyzed on the edge',
      'Federated model training — raw data never leaves the site',
      'Condition-based maintenance without a central data lake',
    ],
  },
  {
    id: 'horus',
    sector: 'Electronics manufacturing · Soldering',
    title: 'HORUS Monitoring for continuous soldering processes',
    partners: [{name: 'Kurtz Ersa', file: 'kurtz-ersa.svg'}],
    image: {
      src: '/img/edge-branded.jpg',
      alt: 'Edge-Compute in HORUS Monitoring branding next to the opened enclosure',
    },
    body: (
      <>
        <p>
          <strong>Global Point</strong> and <strong>Kurtz Ersa</strong> use
          the Edge-Compute in <strong>HORUS Monitoring</strong> to ensure
          perfectly soldered circuit boards in continuous production
          processes.
        </p>
        <p>
          The device ships in HORUS branding — the front plate shown here —
          and acts as the compute and networking backbone of the monitoring
          system, collecting process data from the soldering line and
          making it available for quality assurance.
        </p>
      </>
    ),
    bullets: [
      'Custom-branded Edge-Compute as part of an OEM product',
      'Continuous process data acquisition on the soldering line',
      'Quality assurance for every board, not just samples',
    ],
  },
  {
    id: 'panda',
    sector: 'Fundamental research · Accelerator physics',
    title: 'Controlling the PANDA luminosity detector at GSI/FAIR',
    partners: [
      {name: 'Ruhr-Universität Bochum', file: 'rub.svg'},
      {name: 'GSI / FAIR', file: 'gsi.svg'},
    ],
    body: (
      <>
        <p>
          Together with the <strong>EP1 chair, Hadron and Nuclear Physics
          group</strong> at Ruhr-Universität Bochum (Prof. Fritsch), the
          Edge-Compute monitors and controls the <strong>linear shift
          mechanism</strong> of the <strong>PANDA luminosity detector</strong>{' '}
          for GSI/FAIR and the <strong>HESR</strong> storage ring currently
          under construction.
        </p>
        <p>
          In an accelerator environment, reliability and remote operability
          are everything. The sealed aluminum enclosure, M12 connectors, and
          an open Linux system with EPICS support make the Edge-Compute a
          natural fit for detector control.
        </p>
      </>
    ),
    bullets: [
      'Monitoring and control of a precision mechanical positioning system',
      'Integration into the experiment control system (EPICS)',
      'Rugged, sealed hardware for the accelerator hall',
    ],
  },
  {
    id: 'biofilm',
    sector: 'Environmental monitoring · Water quality',
    title: 'Impedance spectroscopy for river water quality across the continental US',
    partners: [{name: 'Montana State University', file: 'msu.svg'}],
    body: (
      <>
        <p>
          <strong>Prof. Warnat</strong> at the{' '}
          <strong>Center for Biofilm Engineering</strong>, Montana State
          University, uses Edge-Compute technology for{' '}
          <strong>electrochemical impedance spectroscopy</strong> to monitor
          the water quality of rivers across the continental United States.
        </p>
        <p>
          Impedance spectroscopy reveals changes in water chemistry and
          biofilm growth directly at the measurement site. The Edge-Compute
          powers the sensor electronics, runs the measurement cycles, and
          keeps working in the field where a lab instrument never could — in
          a sealed aluminum enclosure, outdoors, unattended.
        </p>
      </>
    ),
    bullets: [
      'Autonomous field measurement stations at remote river sites',
      'Electrochemical impedance spectroscopy executed and evaluated on the edge',
      'Waterproof, sealed hardware built for outdoor deployment',
    ],
  },
];

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
  const reversed = index % 2 === 1;
  return (
    <article className="useCase" id={uc.id}>
      <div className={`row row--align-center ${reversed ? 'useCase--reversed' : ''}`}>
        <div className="col col--7">
          <span className="useCaseSector">{uc.sector}</span>
          <h2>{uc.title}</h2>
          {uc.body}
          <ul className="useCaseBullets">
            {uc.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="col col--5 useCaseAside">
          {uc.image && (
            <img
              className="useCaseImage"
              src={useBaseUrl(uc.image.src)}
              alt={uc.image.alt}
            />
          )}
          <PartnerLogos partners={uc.partners} />
        </div>
      </div>
    </article>
  );
}

export default function Applications() {
  return (
    <Layout
      title="Applications"
      description="Where the skAInet Edge-Compute is already at work: railway infrastructure, process industry, electronics manufacturing, and fundamental research.">
      <header className="pageHero">
        <div className="container">
          <h1>Applications</h1>
          <p className="pageHeroLead">
            From the trackside to the riverbank to the accelerator hall: six places where the
            skAInet Edge-Compute is already collecting, analyzing, and
            controlling — 365/24/7.
          </p>
        </div>
      </header>

      <main className="container useCaseList">
        {useCases.map((uc, i) => (
          <UseCase uc={uc} index={i} key={uc.id} />
        ))}
      </main>

      <section className="specStrip">
        <div className="container">
          <h2>Your application is next.</h2>
          <p className="specLabel closerText">
            Together with PoE measurement devices and bus couplers, the
            Edge-Compute adapts to your use case — whether it is a single
            machine, a production line, or a research facility. Tell us what
            you need to measure, and we will configure the platform around
            it.
          </p>
          <div className="heroButtons margin-top--md">
            <Link
              className="button button--primary button--lg"
              href="mailto:info@auto-intern.de?subject=skAInet%20Edge-Compute%20%E2%80%93%20our%20application">
              Discuss Your Application
            </Link>
            <Link
              className="button button--secondary button--outline button--lg"
              href="https://www.skainet.io/measurements">
              PoE Measurement Devices
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
