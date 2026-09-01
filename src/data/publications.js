// Curated publications by the Edge-Compute team, grouped by what they
// contribute to the platform. Sources: ORCID 0000-0002-2119-0064 (Bökelmann),
// RUB IKA publication list / Google Scholar (Glitza). Verified 2026-09-01.

export const publications = [
  // --- The platform itself ---
  {
    title: 'autowerkstatt4null: An Off-Board-Diagnostics Ecosystem for Car-Workshops',
    authors: 'S. Bökelmann, R. Glitza, M. Huang, O. Holmes, L. Jakubczyk, T. Röthemeyer',
    venue: 'arXiv preprint 2608.26911',
    year: 2026,
    url: 'https://arxiv.org/abs/2608.26911',
    summary:
      'A modular measurement platform, a secure data-exchange hub, and asynchronous "federated diagnostics" for independent workshops — the same architecture pattern the Edge-Compute follows.',
    related: [{label: 'The platform', href: '/#platform'}],
  },
  {
    title: 'Never Touch a Running System',
    authors: 'S. Bökelmann',
    venue: 'Poster, Data Science Ruhrgebiet 2021 (figshare)',
    year: 2022,
    url: 'https://doi.org/10.6084/M9.FIGSHARE.19314275',
    summary:
      'A generalized framework for condition-monitoring systems: data acquisition, conservation, and distribution as separate concerns.',
    related: [{label: 'The platform', href: '/#platform'}],
  },

  // --- River water quality (MSU) ---
  {
    title: 'Microfabricated Electrochemical Sensors as a Sentinel System to Detect Biofilms in River Systems',
    authors: 'M. Neubauer, S. Bökelmann, O. Holmes, C. Foreman, S. Warnat',
    venue: 'ECS Meeting Abstracts MA2025-02',
    year: 2025,
    url: 'https://doi.org/10.1149/MA2025-02632961mtgabs',
    summary:
      'Impedance-spectroscopy sensor arrays deployed in the Clark Fork River, driven by a custom data-acquisition station every 15 minutes; impedance rise tracks biofilm growth over 600 hours.',
    related: [{label: 'River water quality', href: '/applications#biofilm'}],
  },

  // --- PANDA / GSI-FAIR ---
  {
    title: 'PANDA Phase One',
    authors: 'PANDA Collaboration (incl. S. Bökelmann)',
    venue: 'Eur. Phys. J. A 57, 184',
    year: 2021,
    url: 'https://doi.org/10.1140/epja/s10050-021-00475-y',
    summary:
      'The physics programme of the start-up PANDA detector at the HESR storage ring of FAIR.',
    related: [{label: 'PANDA luminosity detector', href: '/applications#panda'}],
  },
  {
    title: 'Precision resonance energy scans with the PANDA experiment at FAIR',
    authors: 'PANDA Collaboration (incl. S. Bökelmann)',
    venue: 'Eur. Phys. J. A 55, 42',
    year: 2019,
    url: 'https://doi.org/10.1140/epja/i2019-12718-2',
    summary:
      'Energy scans at the HESR — precisely the kind of measurement whose accuracy depends on the luminosity detector.',
    related: [{label: 'PANDA luminosity detector', href: '/applications#panda'}],
  },

  // --- Federated learning & condition monitoring (NexuFed / RUB IKA) ---
  {
    title: 'Cooperative Multi-Agent Reinforcement Learning for Adaptive Aggregation in Semi-Supervised Federated Learning with non-IID Data',
    authors: 'R. Glitza, L. Becker, R. Martin',
    venue: 'IEEE ICASSP 2026',
    year: 2026,
    url: 'https://doi.org/10.1109/ICASSP55912.2026.11462172',
    summary:
      'Server- and client-side RL agents tune aggregation weights and personalization in federated learning — robust even with adversarial clients.',
    related: [{label: 'Pump condition monitoring', href: '/applications#nexufed'}],
  },
  {
    title: 'Unsupervised Anomalous Sound Detection Using Loss-Weighted Clustered Federated Pre-Training',
    authors: 'R. Glitza, L. Becker, R. Martin',
    venue: 'IEEE MLSP 2024',
    year: 2024,
    url: 'https://doi.org/10.1109/MLSP58920.2024.10734732',
    summary:
      'Clustered federated pre-training for machine anomalous-sound detection with fewer false positives.',
    related: [{label: 'Pump condition monitoring', href: '/applications#nexufed'}],
  },
  {
    title: 'First-Shot Anomalous Sound Detection with Frozen General Audio Encoders and Distance-Based Back-Ends',
    authors: 'R. Glitza et al.',
    venue: 'DCASE 2026 Challenge, Task 2 technical report',
    year: 2026,
    url: 'https://dcase.community/documents/challenge2026/technical_reports/DCASE2026_Glitza_39_t2.pdf',
    summary:
      'Training-free anomalous-sound detection for machine condition monitoring using frozen audio encoders and kNN/GMM back-ends.',
    related: [{label: 'Pump condition monitoring', href: '/applications#nexufed'}],
  },
  {
    title: 'Clustering-based Wake Word Detection in Privacy-aware Acoustic Sensor Networks',
    authors: 'T. Koppelmann, L. Becker, A. Nelus, R. Glitza, L. Schönherr, R. Martin',
    venue: 'Interspeech 2022',
    year: 2022,
    url: 'https://doi.org/10.21437/Interspeech.2022-842',
    summary:
      'Privacy-preserving processing in distributed acoustic sensor networks.',
    related: [{label: 'Pump condition monitoring', href: '/applications#nexufed'}],
  },
  {
    title: 'Unsupervised Clustered Federated Learning in Complex Multi-source Acoustic Environments',
    authors: 'A. Nelus, R. Glitza, R. Martin',
    venue: 'EUSIPCO 2021',
    year: 2021,
    url: 'https://doi.org/10.23919/EUSIPCO54536.2021.9615980',
    summary:
      'Federated clustering of sensor nodes without sharing raw audio — the basis for NexuFed-style deployments.',
    related: [{label: 'Pump condition monitoring', href: '/applications#nexufed'}],
  },
  {
    title: 'Estimation of Microphone Clusters in Acoustic Sensor Networks using Unsupervised Federated Learning',
    authors: 'A. Nelus, R. Glitza, R. Martin',
    venue: 'IEEE ICASSP 2021',
    year: 2021,
    url: 'https://arxiv.org/abs/2102.03109',
    summary: 'Unsupervised federated learning across a network of edge sensor nodes.',
    related: [{label: 'Pump condition monitoring', href: '/applications#nexufed'}],
  },
];
