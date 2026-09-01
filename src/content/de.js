// German page content. Structure and keys are identical to en.js and
// must stay in sync.

export default {
  common: {
    contactUs: 'Kontakt aufnehmen',
    getStarted: 'Erste Schritte',
    readTheDocs: 'Zur Dokumentation',
    talkToUs: 'Sprechen Sie mit uns',
    getInTouch: 'Kontakt aufnehmen',
    meetTheTeam: 'Das Team kennenlernen',
    seeTheApplications: 'Zu den Anwendungen',
  },

  index: {
    metaDescription:
      'Programmierbarer M12-PoE-Switch, Router und Compute-Modul für industrielle Edge-Anwendungen.',
    heroTitle: 'Edge-Compute',
    taglinePre: 'Der programmierbare M12-PoE-Switch, Router und Compute-Modul für industrielle Edge-Anwendungen – von ',
    company: 'Auto-Intern GmbH',
    taglinePost: ', Deutschland.',
    specsLink: 'Technische Daten →',
    pricePre: 'Ab ',
    priceNet: 'netto',
    requestQuote: 'Angebot anfragen',
    heroImageAlt: 'skAInet Edge-Compute mit angeschlossenen M12-Ethernet-Kabeln',
    specs: [
      {value: '8 Kerne', label: '64-Bit-ARM @ 1,5 GHz'},
      {value: '8 GB', label: 'LPDDR4-3200 RAM'},
      {value: '32 GB', label: 'eMMC-Speicher'},
      {value: '7 Ports', label: 'M12 PoE+ LAN'},
      {value: '1 bar', label: 'Betrieb unter Wasser'},
    ],
    trusted: {
      title: 'Bewährt im Einsatz',
      subtitle: 'Unternehmen, Forschungseinrichtungen und Partner, die bereits auf skAInet Edge-Compute-Technologie setzen – ',
      link: 'zu den Anwendungen',
    },
    features: [
      {
        icon: '🌊',
        title: 'Robust & wasserdicht',
        text: 'Gehäuse aus eloxiertem Aluminium, vollständig abgedichtete M12-Steckverbinder. Stoßfest und für den Betrieb unter Wasser bis 1 bar ausgelegt.',
      },
      {
        icon: '🔌',
        title: '7× M12 PoE+ Ports',
        text: 'Verbinden Sie skAInet-Messgeräte – oder beliebige PoE-Geräte – mit nur einem Cat-5e-M12-Kabel pro Port. Stromversorgung und Daten inklusive.',
      },
      {
        icon: '🧠',
        title: 'Echte Rechenleistung an der Edge',
        text: '8-Kern-64-Bit-ARM-CPU, 8 GB LPDDR4 RAM, 32 GB eMMC. Messdaten puffern, vorverarbeiten und analysieren – direkt dort, wo sie entstehen.',
      },
      {
        icon: '🌐',
        title: 'Switch, Router & Knoten in einem',
        text: 'Getrennte WAN- und LAN-Schnittstellen mit internem 8-Port-Switch. Fügt sich in jede Ethernet-Hierarchie ein und streamt aggregierte Daten nach oben.',
      },
      {
        icon: '⚡',
        title: '48–72 V DC Industrieversorgung',
        text: 'M12-Stromversorgung, ausgelegt für industrielle Versorgungsschienen. Ein Kabel versorgt das Modul und jedes angeschlossene PoE-Gerät.',
      },
      {
        icon: '🛠️',
        title: 'Offen für Ihren Code',
        text: 'Vollständiges Linux-System mit SSH-Zugang. Schreiben Sie Daten-Mapper und Aggregatoren in C++ oder Python – minimale Beispielprojekte inklusive.',
      },
    ],
    platform: {
      title: 'Die universelle Plattform für Datenerfassung und Monitoring',
      lead: 'Der skAInet Edge-Compute ist die universelle Plattform von Auto-Intern für Datenerfassung und Monitoring – entwickelt in Deutschland, in jahrelanger praktischer Arbeit. Die aktuelle Version v1.5 und ihre Vorgänger laufen 365/24/7 in zahlreichen Anlagen: Sie erfassen Daten, betreiben Messgeräte, analysieren und liefern verwertbare Erkenntnisse über Maschinen und Anlagen.',
      cards: [
        {
          title: 'Im Inneren des Gehäuses',
          paras: [
            'Das Herzstück des skAInet Edge-Compute ist ein Compute-Modul, das pinkompatibel zur Raspberry-Pi-Compute-Module-Familie ist. Auf Wunsch kann es durch eine leistungsstärkere oder eine kostengünstigere Variante ersetzt werden – Gehäuse, Trägerplatine und Ports bleiben unverändert.',
            'Zwei getrennte Ethernet-Schnittstellen ermöglichen es dem Gerät, sich über den WAN-Port in ein übergeordnetes Unternehmensnetzwerk einzubinden und gleichzeitig über die 7 LAN-Ports ein eigenes DHCP-Netzwerk aufzuspannen – und dabei alle 7 LAN-Geräte per PoE+ (IEEE 802.3at) mit Strom zu versorgen.',
          ],
        },
        {
          title: 'Offen, geprüft, konform',
          paras: [
            'Der skAInet Edge-Compute läuft mit einem Yocto Linux und einer dokumentierten Software-Stückliste (SBOM) – im Einklang mit dem EU Cyber Resilience Act und vergleichbaren Regularien.',
            'Open-Source-Software – qualitätsgeprüft, konfiguriert und bereitgestellt von Auto-Intern mit mehr als 25 Jahren Embedded-Erfahrung.',
          ],
        },
        {
          title: 'Ihre Daten, Ihre Regeln',
          paras: [
            'Der Edge-Compute sammelt, pollt und empfängt Informationen von Sensoren, SPSen, Rechnern und allen anderen netzwerkfähigen Geräten. Dank zweier getrennter Ethernet-Schnittstellen werden die Daten an der Edge gefiltert und auf leistungsfähigen Prozessoren analysiert, bevor sie das Gerät verlassen.',
            'Dank der modernen Sicherheitsarchitektur gelangen keine Rohdaten in Ihr übergeordnetes Netzwerk – es sei denn, Sie wollen es so.',
          ],
        },
      ],
      apiTitle: 'Eine API für jedes übergeordnete System',
      apiLead: 'Gleichzeitig stellt der skAInet Edge-Compute allen übergeordneten Systemen eine API bereit – in dem Protokoll, das sie sprechen:',
      andMore: 'und mehr',
    },
    gallery: {
      title: 'Gebaut für den Einsatz vor Ort',
      subtitle: 'Ein massiver Block aus eloxiertem Aluminium. Jeder Port abgedichtet. Bereit für Ihr Rack, Ihre Maschine oder Ihren Tank.',
      figures: [
        {
          alt: 'Frontplatte des Edge-Compute mit beschrifteten Ports neben dem geöffneten Gehäuse mit Compute-Modul',
          lead: 'Innen und außen.',
          text: 'Sieben PoE-Ports, ein WAN-Port, ein 48-V-DC-Eingang – und ein austauschbares Compute-Modul auf einer skAInet-Trägerplatine. Auf Wunsch mit Ihrem eigenen Branding auf der Frontplatte.',
        },
        {
          alt: 'Edge-Compute auf einer Werkbank mit mehreren angeschlossenen M12-Kabeln',
          lead: 'Auf der Werkbank.',
          text: 'PoE-Messgerät, WAN-Uplink und Stromversorgung anschließen – das ist die gesamte Installation.',
        },
      ],
    },
    closer: {
      title: 'Bringen Sie Rechenleistung zu Ihren Messungen.',
      text: 'Ob Sie einen einzelnen Sensor anbinden oder eine ganze Anlage instrumentieren: Der skAInet Edge-Compute bietet Ihnen eine robuste, sichere und offene Plattform, die sich im Einsatz bereits bewährt hat. Sagen Sie uns, was Sie messen möchten – wir sagen Ihnen, wie Sie dorthin kommen.',
    },
  },

  devices: {
    title: 'PoE-Messgeräte',
    metaDescription:
      'Nachgelagerte Anschlussboxen und Messgeräte für den skAInet Edge-Compute: Leistung, Temperatur, digitale I/O, IO-Link, Impedanzspektroskopie, Infrarot und Signalisierung.',
    lead: 'Ein M12-Kabel pro Gerät – Stromversorgung und Daten inklusive. Das skAInet-Team von Auto-Intern hat bereits eine Familie nachgelagerter Anschlussboxen und Messgeräte für den Edge-Compute entwickelt.',
    introPre: 'Jedes der folgenden Geräte wird an einen der sieben PoE-LAN-Ports des Edge-Compute angeschlossen und erscheint als Netzwerkknoten – ohne separates Netzteil, ohne Gateway, ohne Treiberinstallation. Entwickelt, gebaut und bereitgestellt in Bochum von ',
    introLink: 'denselben Ingenieuren',
    introPost: ', die auch den Edge-Compute selbst entwickelt haben.',
    seeItInUse: 'Im Einsatz:',
    items: [
      {
        id: 'powersense',
        name: 'skAInet PowerSense',
        category: 'Leistungsmessung · galvanisch gekoppelt',
        icon: '⚡',
        text: 'Eine Produktserie galvanisch gekoppelter Leistungsmesssysteme für ein- und dreiphasige Lasten. Direkter Anschluss an den Stromkreis für präzise Spannungs-, Strom- und Leistungswerte.',
        tags: ['1-phasig', '3-phasig', 'Spannung / Strom / Leistung'],
      },
      {
        id: 'powerprobe',
        name: 'skAInet PowerProbe',
        category: 'Leistungsmessung · galvanisch getrennt',
        icon: '🧲',
        text: 'Eine Produktserie galvanisch getrennter Leistungsmesssysteme für dreiphasige Lasten. Misst über E-Feld- und B-Feld-Sensorik – ohne elektrischen Kontakt zum Leiter, ohne Unterbrechung der Installation.',
        tags: ['3-phasig', 'E-Feld', 'B-Feld', 'Berührungslos'],
      },
      {
        id: 'tempprobe',
        name: 'skAInet TempProbe',
        category: 'Temperatur',
        icon: '🌡️',
        text: '36-Kanal-Messumformer für Thermoelemente Typ K mit integrierter Kaltstellenkompensation. Dutzende Messstellen an einem einzigen PoE-Port.',
        tags: ['36 Kanäle', 'Typ K', 'Kaltstellenkompensation'],
      },
      {
        id: 'io',
        name: 'skAInet IO',
        category: 'Digitale I/O',
        icon: '🔘',
        text: 'Mehrkanalige digitale Ein- und Ausgänge. Schalter, Sensoren und Maschinenzustände einlesen; Relais, Anzeigen und Aktoren ansteuern – alles vom Edge-Compute aus.',
        tags: ['Digitaleingang', 'Digitalausgang', 'Mehrkanalig'],
      },
      {
        id: 'iolink',
        name: 'skAInet iolink',
        category: 'Feldbuskoppler',
        icon: '🔗',
        text: 'Buskoppler für bis zu 6 IO-Link-Sensoren. Bringen Sie Standard-Industriesensoren – Abstand, Druck, Durchfluss, Vibration – in das skAInet-Netzwerk.',
        tags: ['IO-Link', 'Bis zu 6 Sensoren', 'Buskoppler'],
      },
      {
        id: 'eis',
        name: 'skAInet EIS',
        category: 'Elektrochemie',
        icon: '🧪',
        text: 'Messumformer für elektrochemische Impedanzspektroskopie, entwickelt in Zusammenarbeit mit dem Center for Biofilm Engineering der Montana State University. Im Einsatz für die Überwachung der Flusswasserqualität in den kontinentalen USA.',
        tags: ['Impedanzspektroskopie', 'MSU CBE', 'Wasserqualität'],
        related: {label: 'Anwendung Flusswasserqualität', href: '/applications#biofilm'},
      },
      {
        id: 'ircam',
        name: 'skAInet IRcam',
        category: 'Wärmebild',
        icon: '📷',
        text: 'Infrarotkamera zur Temperaturüberwachung. Berührungslose Wärmebilder von Maschinen, Wärmetauschern und Prozessen – ausgewertet direkt auf dem Edge-Compute.',
        tags: ['Infrarot', 'Temperaturüberwachung', 'Berührungslos'],
        related: {label: 'Anwendung Fouling-Erkennung', href: '/applications#kelvion'},
      },
      {
        id: 'stacklight',
        name: 'skAInet StackLight',
        category: 'Signalisierung',
        icon: '🚦',
        text: 'Erweiterbare Signalsäule in Kombination mit dem skAInet IO. Zeigt Maschinen- und Prozesszustände in der Fertigung an – gesteuert durch die Daten, die der Edge-Compute erfasst.',
        tags: ['Signalsäule', 'Erweiterbar', 'Mit skAInet IO'],
      },
    ],
    closer: {
      title: 'Ihre neue Messanwendung.',
      text: 'Fehlt ein Gerät für Ihr Signal? Die Geräte oben haben genauso begonnen – als Messproblem eines Kunden. Sagen Sie uns, was Sie erfassen müssen, und wir entwickeln die passende Anschlussbox: gleiches Gehäuse, gleicher M12-PoE-Port, gleicher Edge-Compute.',
      primary: 'Ihre Anwendung beschreiben',
    },
  },

  applications: {
    title: 'Anwendungen',
    metaDescription:
      'Wo der skAInet Edge-Compute bereits im Einsatz ist: Bahninfrastruktur, Prozessindustrie, Elektronikfertigung und Grundlagenforschung.',
    lead: 'Vom Gleisbett über das Flussufer bis in die Beschleunigerhalle: sechs Orte, an denen der skAInet Edge-Compute bereits erfasst, analysiert und steuert – 365/24/7.',
    items: [
      {
        id: 'diana',
        sector: 'Bahninfrastruktur',
        title: 'Überwachung von Weichenantrieben im DIANA-Projekt der DB Netz',
        paras: [
          'Im DIANA-Projekt der DB Netz AG erfasst ein Vorgänger des Edge-Compute zusammen mit dem DIR-IDS-Sensor die Leistungsdaten von Weichenantrieben.',
          'Jeder Umstellvorgang hinterlässt eine charakteristische Strom- und Leistungssignatur. Wird sie kontinuierlich am Gleis aufgezeichnet – statt nur bei periodischen Inspektionen –, wird jede Weiche zu einem überwachten Betriebsmittel, und Verschleiß wird sichtbar, lange bevor er zu einem Ausfall führt.',
        ],
        bullets: [
          'Erfassung der Antriebsleistungsdaten am Gleis über den DIR-IDS-Sensor',
          'Lokale Pufferung und Vorverarbeitung vor dem Upload',
          'Kontinuierliche Zustandsdaten statt intervallbasierter Inspektion',
        ],
      },
      {
        id: 'kelvion',
        sector: 'Prozessindustrie · Wärmetauscher',
        title: 'Fouling-Erkennung an Luftkühlern mit Infrarotkameras',
        paras: [
          'Bei Kelvion dient der Edge-Compute als Datenerfassungsplattform für IR-Kameras, die Fouling an Luftkühlern (Air-Fin-Coolern) erkennen.',
          'Fouling verringert die Wärmeübertragung und treibt den Energieverbrauch in die Höhe. Wärmebilder machen es direkt sichtbar – der Edge-Compute versorgt die PoE-Kameras, sammelt die Bildströme und stellt die Rechenleistung bereit, um sie vor Ort auszuwerten.',
        ],
        bullets: [
          'PoE-Stromversorgung und Daten für mehrere IR-Kameras über je ein einziges M12-Kabel',
          'Bilderfassung und -auswertung direkt an der Edge',
          'Aggregierte Fouling-Indikatoren werden nach oben weitergeleitet – kein Rohvideo',
        ],
      },
      {
        id: 'nexufed',
        sector: 'Predictive Maintenance · Federated Learning',
        title: 'Datenschutzwahrende Zustandsüberwachung von Pumpen',
        paras: [
          'NexuFed AI und das Institut für Kommunikationsakustik der Ruhr-Universität Bochum (Prof. Martin) nutzen den Edge-Compute, um Pumpendaten zu analysieren und zustandsbasierte Instandhaltung mit maximalem Datenschutz zu ermöglichen.',
          'Beim Federated Learning werden Modelle dort trainiert, wo die Daten entstehen. Die zwei getrennten Ethernet-Schnittstellen des Edge-Compute machen das ganz natürlich: Sensordaten bleiben auf der LAN-Seite, und nur Modell-Updates – niemals Rohmessdaten – gelangen in das übergeordnete Netzwerk.',
        ],
        bullets: [
          'Analyse von Akustik- und Vibrationsdaten an der Edge',
          'Föderiertes Modelltraining – Rohdaten verlassen den Standort nie',
          'Zustandsbasierte Instandhaltung ohne zentralen Data Lake',
        ],
      },
      {
        id: 'horus',
        sector: 'Elektronikfertigung · Löten',
        title: 'HORUS Monitoring für kontinuierliche Lötprozesse',
        imageAlt: 'Edge-Compute im HORUS-Monitoring-Branding neben dem geöffneten Gehäuse',
        paras: [
          'Global Point und Kurtz Ersa setzen den Edge-Compute im HORUS Monitoring ein, um perfekt gelötete Leiterplatten in kontinuierlichen Produktionsprozessen sicherzustellen.',
          'Das Gerät wird im HORUS-Branding ausgeliefert – mit der hier gezeigten Frontplatte – und bildet das Rechen- und Netzwerk-Rückgrat des Monitoring-Systems: Es erfasst Prozessdaten von der Lötlinie und stellt sie für die Qualitätssicherung bereit.',
        ],
        bullets: [
          'Edge-Compute mit Kunden-Branding als Teil eines OEM-Produkts',
          'Kontinuierliche Prozessdatenerfassung an der Lötlinie',
          'Qualitätssicherung für jede Leiterplatte, nicht nur für Stichproben',
        ],
      },
      {
        id: 'panda',
        sector: 'Grundlagenforschung · Beschleunigerphysik',
        title: 'Steuerung des PANDA-Luminositätsdetektors bei GSI/FAIR',
        paras: [
          'Gemeinsam mit dem Lehrstuhl EP1, Arbeitsgruppe Hadronen- und Kernphysik der Ruhr-Universität Bochum (Prof. Fritsch), überwacht und steuert der Edge-Compute die Linearverschiebung des PANDA-Luminositätsdetektors für GSI/FAIR und den derzeit im Bau befindlichen Speicherring HESR.',
          'In einer Beschleunigerumgebung sind Zuverlässigkeit und Fernbedienbarkeit entscheidend. Das abgedichtete Aluminiumgehäuse, M12-Steckverbinder und ein offenes Linux-System mit EPICS-Unterstützung machen den Edge-Compute zur naheliegenden Wahl für die Detektorsteuerung.',
        ],
        bullets: [
          'Überwachung und Steuerung eines mechanischen Präzisionspositioniersystems',
          'Integration in das Experimentsteuerungssystem (EPICS)',
          'Robuste, abgedichtete Hardware für die Beschleunigerhalle',
        ],
      },
      {
        id: 'biofilm',
        sector: 'Umweltmonitoring · Wasserqualität',
        title: 'Impedanzspektroskopie zur Flusswasserqualität in den kontinentalen USA',
        paras: [
          'Prof. Warnat vom Center for Biofilm Engineering der Montana State University nutzt Edge-Compute-Technologie für elektrochemische Impedanzspektroskopie, um die Wasserqualität von Flüssen in den kontinentalen Vereinigten Staaten zu überwachen.',
          'Die Impedanzspektroskopie macht Veränderungen der Wasserchemie und des Biofilmwachstums direkt am Messort sichtbar. Der Edge-Compute versorgt die Sensorelektronik, führt die Messzyklen aus und arbeitet dort weiter, wo ein Laborgerät nie könnte – im abgedichteten Aluminiumgehäuse, im Freien, unbeaufsichtigt.',
        ],
        bullets: [
          'Autonome Feldmessstationen an abgelegenen Flussstandorten',
          'Elektrochemische Impedanzspektroskopie, ausgeführt und ausgewertet an der Edge',
          'Wasserdichte, abgedichtete Hardware für den Außeneinsatz',
        ],
      },
    ],
    closer: {
      title: 'Ihre Anwendung ist die nächste.',
      text: 'Zusammen mit PoE-Messgeräten und Buskopplern passt sich der Edge-Compute Ihrem Anwendungsfall an – ob einzelne Maschine, Produktionslinie oder Forschungseinrichtung. Sagen Sie uns, was Sie messen müssen, und wir konfigurieren die Plattform dafür.',
      primary: 'Ihre Anwendung besprechen',
      secondary: 'PoE-Messgeräte',
    },
  },

  team: {
    title: 'Team & Forschung',
    metaDescription: 'Die Ingenieure hinter dem skAInet Edge-Compute – und die Forschung, aus der er hervorgegangen ist.',
    lead: 'Der skAInet Edge-Compute wird in Bochum von einem kleinen Team aus Embedded-Ingenieuren und Physikern entwickelt – und er ist aus echten Forschungsfragen hervorgegangen.',
    teamHeading: 'Das Team',
    publicationsHeading: 'Publikationen',
    publicationsIntro: 'Begutachtete Arbeiten des Teams, die in den Edge-Compute einfließen – von Federated Learning auf Sensornetzwerken über Flussmonitoring bis zur Detektorphysik bei GSI/FAIR. Jeder Eintrag verweist auf die zugehörige Anwendung.',
    related: 'Zugehörig:',
    roles: {
      'stephan-boekelmann': 'Systemarchitekt',
      'odin-holmes': 'Hardware-Design und -Implementierung',
      'tabea-boekelmann': 'User Interaction',
      'rene-glitza': 'Analytik, Learning und KI',
      'philipp-lehmann': 'Cyber Security',
    },
    bios: {
      'stephan-boekelmann':
        'Stephan kam 2014 zu Auto-Intern und hat gemeinsam mit Odin Holmes das Geschäftsfeld industrielle Prozessdiagnostik zu skAInet ausgebaut. Er entwirft das Gesamtsystem – von der Trägerplatine und den FPGA/Zynq-Datenerfassungspfaden bis zum Yocto-Linux-Image – und schließt derzeit eine Promotion in experimenteller Hadronenphysik (PANDA/FAIR) an der Ruhr-Universität Bochum ab. Über Embedded-, FPGA- und DAQ-Themen schreibt er auf maxclerkwell.tech.',
      'odin-holmes':
        'Odin hat Auto-Intern 2001 mitgegründet und entwickelt seit mehr als 20 Jahren Bare-Metal-Embedded-Systeme. Er entwirft und implementiert die Hardware und Firmware des Edge-Compute, hat die Registerabstraktionsbibliothek Kvasir geschaffen, leitet die Embedded-Gruppe des ISO-C++-Komitees (SG14), hat die Konferenz emBO++ mitgegründet und war Sprecher auf der CppCon, C++Now, Meeting C++ und C++ Europe.',
      'tabea-boekelmann':
        'Tabea ist Physikerin und Informatikerin und seit 2017 bei Auto-Intern. Sie gestaltet, wie Menschen mit dem Edge-Compute und seinen Messgeräten interagieren – von der Software- und Datenseite bis zur Sensorhardware, deren Entwicklung sie in Feldprojekten wie dem 25square-Wettersensornetzwerk geleitet hat.',
      'rene-glitza':
        'René leitet Predictive-Maintenance-Projekte bei skAInet und forscht am Institut für Kommunikationsakustik der Ruhr-Universität Bochum zu datenschutzwahrendem Federated Learning für akustische Sensornetzwerke. Er hat einen M.Sc. in Embedded Systems und ist Teil von NexuFed AI.',
      'philipp-lehmann':
        'Philipp verantwortet die Sicherheitsseite des Edge-Compute – das gehärtete Yocto-Linux-Image, dessen dokumentierte SBOM und die Netzwerkarchitektur, die Rohdaten auf der LAN-Seite hält, sofern Sie nichts anderes entscheiden.',
    },
    notes: {
      'stephan-boekelmann':
        'Auch bekannt als Stephan Boekelmann, MaxClerkwell, 施泓杰 – nicht der Schauspieler Stefan Bockelmann, nicht die britische Agentur ClerksWell.',
    },
    closer: {
      title: 'Möchten Sie mit uns zusammenarbeiten?',
      text: 'Ob Sie ein Unternehmen mit einem Messproblem oder eine Forschungsgruppe mit einem zu steuernden Detektor sind – wir freuen uns, von Ihnen zu hören.',
    },
  },

  contact: {
    title: 'Kontakt',
    metaDescription: 'Sprechen Sie mit dem skAInet-Team der Auto-Intern GmbH über den Edge-Compute: Angebote, Anwendungen, Support.',
    lead: 'Sagen Sie uns, was Sie messen möchten. Wir antworten auf Deutsch oder Englisch, in der Regel innerhalb eines Werktags.',
    sales: {
      title: 'Vertrieb & Angebote',
      textPre: 'Die Preise für den Edge-Compute beginnen bei ',
      textPost: ' netto zzgl. MwSt. Schicken Sie uns Ihre Anwendung, und wir stellen Ihnen ein Angebot inklusive der passenden PoE-Messgeräte zusammen.',
      phoneIntl: 'Telefon (international)',
      phoneDe: 'Telefon (Deutschland)',
    },
    support: {
      title: 'Technischer Support',
      text: 'Fragen zu Einrichtung, Netzwerk oder Software-Stack? Eröffnen Sie ein Issue im Dokumentations-Repository – die Ingenieure, die das Gerät entwickelt haben, lesen mit.',
      button: 'GitHub Issues',
      note: 'Kunden mit Supportvertrag: Nutzen Sie die Kontaktdaten aus Ihren Lieferunterlagen oder schreiben Sie uns eine E-Mail mit der Seriennummer Ihres Geräts.',
    },
    address: {
      title: 'Adresse',
      dept: 'skAInet, Entwicklungsabteilung',
      country: 'Deutschland',
      legal: 'Geschäftsführer: Odin Holmes · Handelsregister: AG Bochum HRB 11927 · USt-IdNr.: DE220389702 · Teil der ',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
};
