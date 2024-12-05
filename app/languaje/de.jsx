const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
  };

const de = {

    menu2 : [
        { id:0, path: "/unternehmen/#", label: "Unternehmen", subTema: "Wir wählen die Fachleute aus, die Ihr Unternehmen braucht und fördern neue, der heutigen Zeit angepasste Führungsstile.", subItems: [
            { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personalauswahl und Rekrutierung" },
            { path: "/unternehmen/personalbewertungen", label: "Personalbewertungen" },
            { path: "/unternehmen/international", label: "International" },
            { path: "/unternehmen/funktionen", label: "Funktionen" },
            { path: "/unternehmen/fachspezifische-suche", label: "Fachspezifische Suche" },
            { path: "/unternehmen/inklusionsaudit", label: "Inklusionsaudit" },
        ]},
        { id:1, path: "/kandidaten/#", label: "Kandidaten", subTema: "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.", subItems: [
            { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registrieren Sie Ihren Lebenslauf" },
            { path: "/kandidaten/internationales-karrieremanagement", label: "Internationales Karrieremanagement" },
        ]},
        { id:2, path: "/wir/#", label: "Wir", subTema: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.", subItems: [
            { path: "/wir/wer-wir-sind", label: "Wer Wir Sind" },
            { path: "/wir/unsere-philosophie", label: "Unsere Philosophie" },
        ]},
        { id:3, path: "/sonstige-dienstleistungen", label: "Sonstige Dienstleistungen", subTema: "Wir bieten Dienstleistungen für Ihre akademische, berufliche und persönliche Entwicklung, einschließlich Studium, Arbeit, Wohnen, Beförderung, Visa und Sprachen.", subItems: [
            { path: "/sonstige-dienstleistungen/studium-ausbildung-praktikum", label: "Studium - Ausbildung - Praktikum" },
            { path: "/sonstige-dienstleistungen/arbeit-steuern", label: "Arbeit - Steuern" },
            { path: "/sonstige-dienstleistungen/wohnen-transportmittel", label: "Wohnen - Transportmittel" },
            { path: "/sonstige-dienstleistungen/visum-sprachkompetenzen", label: "Visum - Sprachkompetenzen" },
        ]},
        { id:4, path: "/kontakt", label: "Kontakt" },
    ],

    home: {
        texts:["INNOVATIVEN LÖSUNGEN?", "QUALIFIZIERTEN KANDIDATEN?","EINER PROFESSIONELLEN VERBESSERUNG?"],
        text1:"SUCHEN SIE NACH",
        infoItems:[
            { title: "Personalauswahl und Rekrutierung", description: "Wir bieten individuelle Unterstützung in Auswahlverfahren und Integration für Bewerber und Kunden.", path: "/unternehmen/personalauswahl-und-rekrutierung" },
            { title: "Personalbewertungen", description: "Unterstützung bei der Talentidentifizierung, Humankapitalentwicklung, Einbindung von Fachkräften und Schaffung einer starken Unternehmenskultur.", path: "/unternehmen/personalbewertungen" },
            { title: "International", description: "Sandra Roggero-Beratung hilft bei der Teambewertung und -Entwicklung durch maßgeschneiderte Evaluierungen und individuelle Kompetenzpläne.", path: "/unternehmen/international" },
            { title: "Funktionen", description: "Die Auswahl passender Mitarbeiter ist entscheidend. Sandra Roggero hilft, Talente anzuziehen, die Ihre Geschichte teilen und Ihr Unternehmen formen können.", path: "/unternehmen/funktionen" },
            { title: "Fachspezifische Suche", description: "Sandra Roggero-Beratung unterstützt Unternehmen weltweit bei der Rekrutierung von Fachkräften durch Talentmanagement und Auswahlprozesse.", path: "/unternehmen/fachspezifische-suche" },
            { title: "Inklusionsaudit", description: "Wir überwinden Vorurteile im Auswahlprozess durch ein Inklusionsaudit, das jeden Schritt von der Stellenbeschreibung bis zum Onboarding analysiert.", path: "/unternehmen/inklusionsaudit" }
        ],
        detail1:" Wir tragen jeden Tag dazu bei, dass Menschen eine tiefe Erfüllung auf ihrem beruflichen Weg erfahren und persönlich wachsen.",
        detail2:" Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen.",
        detail3:" Kontaktaufnahme",
        homeInfo1: "DIE GESELLSCHAFT VERÄNDERT SICH, DIE FÜHRUNGSSTILE ENTWICKELN SICH WEITER, WARUM ALSO NICHT AUCH DAS AUSWAHLVERFAHREN WEITERENTWICKELN?",
        infoItems2:  [
            { title: "INNOVATION", description: "Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen. Deshalb brauchen Unternehmen einen Partner, der den Markt versteht und über praktische Erfahrungen verfügt.",
            image: optimizedImageURL('v1719429422/bxeybnb6rq6jqnlpd3t1.jpg')
            },
            { title: "RECRUITING KOMPETENZ", description: "Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.",
            image: optimizedImageURL('v1719432618/xfum9gljkffxtjhfd5tu.jpg')
            },
            { title: "VISION", description: "Unser Ziel ist es, hochperformante Teams zu schaffen, die Unternehmensziele erreichen und zu einer positiven, inklusiven Arbeitskultur beitragen.",
            image: optimizedImageURL('v1719875148/cl4jynz7brqnggwvxwzm.jpg')
            },
            { title: "NEUE WEGE IN DER PERSONALBESCHAFFUNG", description: "Mit frischen Ideen und leidenschaftlichem Engagement streben wir danach, den Bereich der Personalbeschaffung zu revolutionieren.",
            image: optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg')
            }
        ],
        tituloServicio:"Als HR-Beratung können wir Ihnen auch bei Folgendem helfen:",
        services: [
            { title: "STUDIUM",image:optimizedImageURL('v1719434278/ocddglzj4wpc5lbidcve.jpg') },
            { title: "AUSBILDUNG",image:optimizedImageURL('v1719434278/rru0wddozzlje8tv7wo7.jpg') },
            { title: "PRAKTIKUM",image:optimizedImageURL('v1720047308/qhowjwv3jbywvh3fgqeb.jpg') },
            { title: "ARBEIT",image:optimizedImageURL('v1720047637/okxctjjmmdegr4ptljhn.jpg') },
            { title: "STEUERN",image:optimizedImageURL('v1720047700/pqjjlckzyuvgt32bxkhk.jpg') },
            { title: "WOHNEN",image:optimizedImageURL('v1720616614/cebiafyysmleabgeofvi.jpg') },
            { title: "TRANSPORTMITTEL",image:optimizedImageURL('v1720622228/omcgfbrslqda69acfxr0.jpg') },
            { title: "VISUM",image:optimizedImageURL('v1720648648/yazfttcufijofwthhes8.jpg') },
            { title: "SPRACHKOMPETENZEN",image:optimizedImageURL('v1720652893/zwpk88oskknftyafqm5u.jpg') },
        ],
        homeInfo2:"MÖCHTEN SIE WEITERE INFORMATIONEN?",
        homeInfo3:"Kontaktaufnahme",
        
    },
    footer:{
        Informationen:{title:"Informationen",links:[
            {link:"/benutzerrechte",detail:"Benutzerrechte"},
            {link:"/datenschutzrichtlinie",detail:"Datenschutzrichtlinie"},
        ]},
        MeineDienstleistungen:{title:"Sonstige Dienstleistungen ",links:[
            {link:"/sonstige-dienstleistungen/studium-ausbildung-praktikum",detail:"Studium - Ausbildung - Praktikum"},
            {link:"/sonstige-dienstleistungen/arbeit-steuern",detail:"Arbeit - Steuern"},
            {link:"/sonstige-dienstleistungen/wohnen-transportmittel",detail:"Wohnen - Transportmittel"},
            {link:"/sonstige-dienstleistungen/visum-sprachkompetenzen",detail:"Visum - Sprachkompetenzen"},
        ]},
        Kontakt:{title:"Kontakt",links:[
            {detail:"Email: kontakt@roggero-beratung.de"},
            {detail:"Telefon: +49 15902234045"},
            {detail:"Adresse: Brunnenstraße, Neuweiler. Deutschland"},
            {detail:"Öffnungszeiten: Mo-Fr, 9:00 - 18:00 Uhr"},
        ]},
        info:"2024 Alle Rechte vorbehalten"
    },
    Unternehmen:{
        PersonalauswahlUndRekrutierung:{
            title:"Personalauswahl und Rekrutierung",
            description:"Wir engagieren uns in jedem Auswahlverfahren, als ob es sich um unser eigenes Unternehmen handelt, indem wir uns auf die Menschen konzentrieren und ihnen zuhören, egal ob es sich um Bewerber oder Kunden handelt. Dabei nimmt Beratung und das Erkennen von Bedürfnissen einen hohen Stellenwert ein. Weiterhin begleiten und gewährleisten wir dank unseres eigenen Dienstes „Onboarding Selektion“ die bestmögliche Integration der Kandidaten in das Unternehmen. Wir sind Personalvermittler und Integrationscoaches. Der Onboarding-Prozess konzentriert sich nicht nur auf das Follow-up nach der Auswahl, sondern wir begleiten den Prozess von Anfang an, immer im Einklang mit dem Auftrag und dem Ziel des Unternehmens. Jeder Auswahlprozess ist einzigartig, denn keine zwei Personen oder Unternehmen sind gleich. Es gibt eine Lösung für jedes Unternehmen, und wir von Sandra Roggero-Beratung wissen, wie man sie findet."
        },
        Personalbewertungen:{
            title:"Personalbewertungen",
            description:"Die Leistungsbewertung ist ein wichtiges Instrument zur Steigerung der Produktivität. Wenn Sie die Fähigkeiten Ihrer Teams kennen und wissen, was sie zum Unternehmen beitragen können, können Sie ihnen die notwendigen Instrumente an die Hand geben, um sowohl ihre berufliche Entwicklung als auch die des Unternehmens zu fördern.",
            description2:"Sandra Roggero Beratung hilft Ihnen, Ihre Teams zu bewerten, indem wir uns auf die Menschen konzentrieren.",
            dataInfo:[
                "Erkennen und entwickeln Sie die einzigartigen Talente Ihres Unternehmens.",
                "Durchführung von Evaluierungen, die auf Ihre Herausforderungen und Ihr Team zugeschnitten sind.",
                "Belohnung der Produktivität und Leistung von Mitarbeitern im Rahmen von internen Förderungs- oder Auswahlprozessen.",
                "Messung persönlicher Kompetenzen, des Potenzial und den Interessen der Mitarbeiter anhand der Unternehmensstrategie und der Unternehmensziele.",
                "Einbindung von Kompetenzentwicklungsplänen, die auf die jeweilige Person und Position zugeschnitten sind."
            ]

        },
        International:{
            title:"International",
            description:"Wenn es darum geht, internationale Talente und Arbeitskräfte zu konsolidieren, ist es notwendig, über Profile mit spezifischer Erfahrung und Expertise zu verfügen, sei es auf nationaler oder internationaler Ebene, um die nächste Phase des Unternehmens voranzutreiben.",
            description2:"Wir begleiten Sie bei internationalen Projekten, indem wir das Talentmanagement und die Auswahlprozesse steuern, um die richtigen Fachkräfte in Deutschland und/oder im Ausland zu finden.",
            description3:"EINE SPEZIALISIERTE ABTEILUNG",
            description4:"Wir finden die richtigen Fachleute, unabhängig von Ihrem Wohnort.",
            description5:"Unsere direkte und proaktive Suchmethodik auf dem Markt, unsere internationale Erfahrung, unser Hauptsitz in Peru und unsere Mitarbeiter in der ganzen Welt helfen uns, die qualifiziertesten Talente zu finden.",
        },
        Inklusionsaudit:{
            title:"Inklusionsaudit",
            description:"Wir identifizieren Vorurteile und beseitigen Hindernisse im Auswahlprozess. Auswahlprozesse haben sich im Laufe der Zeit weiterentwickelt und zusätzliche Systeme, Inhalte oder Technologien sind entstanden. Auch wenn diese Prozesse einen funktionierenden Service und Erfahrung bei der Talentauswahl bieten, werden wahrscheinlich in jeder Phase Ihres Prozesses dennoch Vorurteile bestehen. Unser Inclusivity-Audit analysiert jeden Kontaktpunkt mit dem Kandidaten während des Auswahlprozesses, von der Stellenbeschreibung für diese Position über Ihren internen Talentbereich, den Bewerbungsprozess, das Vorstellungsgespräch und die Auswahl bis hin zum Onboarding. Dieser Ansatz bietet durchgängige Transparenz in Bezug auf aktive und versteckte Barrieren und Vorurteile."
        },
        Funktionen:{
            title:"Funktionen",
            description:"Identifizierung von Talenten, Kenntnis und Entwicklung des Humankapitals. Verständnis des Arbeitsmarktes, um neue Bedürfnisse zu erkennen und die vom Unternehmen kurzfristig benötigten Profile vorherzusehen. Um die besten Wege zu finden, sie in das Unternehmen einzugliedern. Einbindung von Fachkräften in die verschiedenen Bereiche des Unternehmens, sich über ihre Fähigkeiten im Klaren sein und wissen, wie sie einen Mehrwert für das Unternehmen schaffen können. Schaffung einer soliden Unternehmenskultur."
        },
        FachspezifischeSuche:{
            title:"Fachspezifische Suche",
            description:"Die Menschen sind das Herzstück eines jeden Projekts. Die Auswahl qualifizierter Mitarbeiter ist sicherlich einer der wichtigsten Faktoren, wenn es darum geht, alle Ziele Ihres Unternehmens zu erreichen. Daher muss die Einbeziehung von Berufsprofilen, die zu den Werten und der Mission Ihres Unternehmens passen, eine Ihrer Prioritäten sein. Um die begehrtesten, qualifizierten Talente anzuziehen, müssen Sie die einzigartige Geschichte hinter Ihrem Unternehmen erzählen. Deshalb ist es wichtig, die Unterstützung und das Fachwissen einer spezialisierten Personalberatung in Anspruch zu nehmen, die weiß, was Sie wirklich brauchen und über ein breites Netzwerk von Fachkräften verfügt, die das Potenzial in einem Unternehmen wie dem Ihren voll ausschöpfen wollen. Bei Sandra Roggero-Beratung blicken wir über die Stellenbeschreibung hinaus, um die Geschichte zu verstehen, die Ihr Unternehmen erzählt, und bringen Sie mit den richtigen Leuten zusammen, die Ihnen helfen, Ihr Unternehmen umzugestalten."
        },
        homeInfo2:"MÖCHTEN SIE WEITERE INFORMATIONEN?",
        homeInfo3:"Kontaktaufnahme",
    },
    Kandidaten:{
        RegistrierenSieIhrenLebenslauf:{
            title:"Registrieren Sie Ihren Lebenslauf",
            description:" Wir helfen Ihnen, das nächste Kapitel Ihrer Karriere zu schreiben. Erzählen Sie uns Ihre Geschichte!",
            email:"E-Mail",
            file1:"Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um eine Datei auszuwählen",
            file2:"(Nur PDF- oder Word-Dateien)",
            message:"Nachricht (Optional)",
            message2:"Ihre Nachricht hier...",
            senden:"Senden"
        },
        InternationalesKarrieremanagement:{
            title:"Internationales Karrieremanagement",
            description1:"Ihre Karriere hat keine Grenzen",
            description2:"Bereit für den nächsten Schritt? Deutschland wartet auf Dich!",
            description3:"Wenn Ihr Ziel darin besteht, Ihre berufliche Laufbahn in Deutschland voranzutreiben, steht Ihnen unser spezialisiertes Team für internationale Karriereberatung zur Seite, Ihr Talent sehr weit zu bringen.",
            description4:"Bei Sandra Roggero M. Beratung sehen wir über Ihren Lebenslauf hinaus, wir schätzen die einzigartige Geschichte, die Sie in deutsche Unternehmen einbringen können, Wir werde Ihnen zuhören und wir wissen, wie man die Qualitäten erkennt, die Sie auszeichnen, und die Eigenschaften, die Sie zum Strahlen bringen können.",
            description5:"Aufgrund unseres aktiven internationalen Engagements und der ständigen Zusammenarbeit mit Unternehmen können wir Sie mit Unternehmen in Verbindung bringen, die ihre Teams mit unterschiedlichen Profilen und den einzigartigen Fähigkeiten von Fachleuten mit internationaler Erfahrung bereichern möchten.",
            info1:"Vorteile des Arbeitens im Ausland",
            beneficios:[
                "Fügt einen einzigartigen Wert zum Lebenslauf hinzu",
                "Erweitert Ihr berufliches Netzwerk",
                "Beherrscht neue Sprachen",
                "Verbessert soziale Fähigkeiten",
                "Passt sich schnell an",
                "Fördert Führungsqualitäten",
                "Erkundet neue Kulturen",
                "Übernimmt innovative Arbeitsmethoden"
              ],
            description6:"Bereit, den Schritt zu wagen?",
            description7:"Senden Sie uns Ihren Lebenslauf und Ihre beruflichen Erwartungen an",
            description8:"und einer unserer Experten für internationales Karrieremanagement wird sich mit Ihnen in Verbindung setzen.",
            description9:"Senden Sie Ihren Lebenslauf",
            description10:"/kandidaten/registrieren-sie-ihren-lebenslauf"
        }
    },
    Wir:{
        WerWirSind:{
            title:" Wer Wir Sind",
            description:"Unsere Geschichte beginnt im Jahr 2014, als Sandra Roggero Manrique, in Peru geboren, hochspezialisiert im Bereich Human Resources und Personalbeschaffung in Lima, Peru und Expertin für Öffentlichkeitsarbeit, nach Deutschland auswanderte. Fünfzehn Jahre zuvor hatte sie Europa bereist, wo sie die Arbeitsmarktbedürfnisse ihres Herkunftslandes und die dort vorhandene hochqualifizierte Arbeitskraft evaluiert und analysiert hatte, mit der Vision, dass diese auch in Deutschland benötigt würden, wo sie sich schließlich niederlassen würde.",
            description2:"Wir sind anders",
            description3:"Zunächst einmal, weil wir Fragen stellen. Wir fordern. Wir mischen uns ein. Wir beraten. Wir sind ehrlich und reden nicht um den heißen Brei herum. Wir investieren unsere Zeit und unsere Hingabe. Wir sind mit Herz und Leidenschaft bei der Sache.",
        },
        UnserePhilosophie:{
            title:"Unsere Philosophie",
            description:"Wir treiben die einzigartigen Geschichten unserer Kandidaten und Kunden voran. Unsere Fähigkeit zu verstehen, was Sie wirklich brauchen, ermöglicht es uns, fesselnde Geschichten zu entwickeln und weiterzugeben, was den Unterschied ausmacht. Geschichten sind wichtig, denn wenn wir unsere Pläne, Erfahrungen und Ambitionen teilen, eröffnet sich uns eine Welt der Möglichkeiten. Wenn wir Ihnen zuhören, können wir langfristige Beziehungen aufbauen, die auf Vertrauen und Einfühlungsvermögen beruhen. In Peru und Deutschland besteht unser kleines Team aus spezialisierten Beratern, aus talentierten Menschen mit einer fachkundigen, globalen Perspektive. Und durch den Austausch von Geschichten untereinander fördern wir die Teamarbeit, von der wir überzeugt sind, dass sie zum Erfolg führt – nicht nur für uns, sondern auch für unsere Kandidaten und Kunden in aller Welt. Dank der Geschichten der Menschen sind wir in der Lage, über den Lebenslauf oder die Stellenbeschreibung hinauszuschauen und die einzigartige Eigenschaft zu finden, die die Übereinstimmung zwischen einem Unternehmen und einem Team oder einem Bewerber außergewöhnlich macht. Wir sind in der Lage, Unternehmen dabei zu unterstützen, die Talente zu finden, die Ihnen helfen, alle Ihre Ziele zu erreichen – jetzt und in Zukunft. Natürlich sind wir auch in der Lage, Menschen dabei zu helfen, das nächste Kapitel ihrer Karriere zu definieren, das es ihnen ermöglicht, alle ihre Ambitionen zu erfüllen. Die größten Chancen beginnen mit einer Geschichte. Erzählen Sie uns Ihre.",
        },
        homeInfo2:"MÖCHTEN SIE WEITERE INFORMATIONEN?",
        homeInfo3:"Kontaktaufnahme",
    },
    MeineDienstleistungen:{
        StudiumAusbildungPraktikum:{
            title:"Studium - Ausbildung - Praktikum",
            description:"Studium",
            description2:"Wir geben Ihnen hier einen kleinen Überblick, welche Vorteile ein Studium in Deutschland speziell für internationale Studierende mit sich bringt. Internationaler Ruf von Lehre und Forschung… Vielfalt des Studienangebots… Geringe Studiengebühren und niedrige Kosten… Förderprogramme und die Möglichkeit zu arbeiten. Sie erleben den Arbeitsalltag aus erster Hand. So erfahren Sie, welche Aufgaben auf Sie zukommen.",
            description3:"Ausbildung",
            description4:"Welche Vorteile hat man nach der Ausbildung?",
            description5:"Eine Ausbildung ist praxisnah. Sie können Gelerntes direkt anwenden und sehen, was Sie erreicht haben. Sie können früh Verantwortung übernehmen, sind aber nicht alleine: Die Zusammenarbeit im Betrieb ist das A und O. Eine Ausbildung ist auch lukrativ, weil Sie vom ersten Tag an Ihr eigenes Einkommen haben. Zukunftssicher. Aussichtsreich.",
            description6:"Praktikum",
            description7:"Das bringt Ihnen ein Praktikum in Deutschland!",
            description8:"Sie können danach besser einschätzen, ob ein Beruf oder eine Branche zu Ihren Interessen und Stärken passt. Sie können Ihre Praktika in Ihren Lebenslauf aufnehmen. Damit können Sie bei weiteren Bewerbungen zusätzlich punkten. Ihr Praktikumsbetrieb lernt Sie kennen. Das kann Ihnen bei einer späteren Bewerbung helfen, zum Beispiel für eine Stelle als Werkstudent oder für eine Ausbildung. Vielleicht bietet man Ihnen sogar eine Ausbildungsstelle an.",
        },
        ArbeitSteuern:{
            title:"Arbeit - Steuern",
            description:"Arbeit",
            description2:"Die wichtigsten Vorteile der Arbeit in Deutschland sind:",
            description3:"Das rasche Wirtschaftswachstum und die zahlreichen Beschäftigungsmöglichkeiten in den Bereichen IT, Technik und Industrie. Im Vergleich zu anderen Ländern bietet das Land faire Löhne und Gehälter. Und die deutsche Regierung bemüht sich kontinuierlich darum, Ausländer als Arbeitskräfte zu gewinnen.",
            description4:"Steuern",
            description5:"In Deutschland gibt es verschiedene Arten von Steuern, wie die Einkommensteuer, die Gewerbesteuer und die Umsatzsteuer. Sie sind die wichtigsten Einnahmequellen des Staates, mit denen er Ausgaben für das Gemeinwohl finanziert, wie z. B. soziale Sicherheit, Bildung, Gesundheitsversorgung oder Verkehrsinfrastruktur. Das deutsche Steuersystem basiert auf der Leistungsfähigkeit des einzelnen Steuerzahlers, Transparenz und Gerechtigkeit.",
        },
        WohnenBeförderung:{
            title:"Wohnen - Transportmittel",
            description0:"Wohnen",
            description:"Deutschland ist eines der besten Länder zum Leben. Deutschland zeichnet sich durch seine Multikulturalität aus und hat eine große Zahl von Einwanderern aus der ganzen Welt. Dies hat es zu einem der beliebtesten Ziele für Menschen gemacht, die ein neues Leben beginnen wollen.",
            description2:"Transportmittel",
            description3:"In Deutschland kann man mit dem Zug, aber auch mit der Straßenbahn oder dem Bus zu vielen Zielen reisen. Der Zug, die U-Bahn, die S-Bahn, die Straßenbahn und der Bus sind die verschiedenen öffentlichen Verkehrsmittel des Fern- und Nahverkehrs.",
        },
        VisumSprache:{
            title:"Visum - Sprachkompetenzen",
            description:"Visum",
            description2:"Die Visumbeantragung eines Arbeits- oder Studiengangs für Deutschland ist eines der wichtigsten Verfahren, wenn Sie Ihre Integration in das deutschsprachige Land beginnen möchten. Deutschland ist eine der größten Wirtschaftsmächte in Europa. Es bietet sehr gute Gehaltsmöglichkeiten und ist zu einer ausgezeichneten Option für diejenigen geworden, die entschlossen sind, ihren Lebensweg zu ändern. Wenn Sie sich in diesem Land richtig etablieren wollen, müssen Sie jedoch die Dinge richtig machen. Es ist wichtig, dass Sie alle Informationen über die zu erledigenden Unterlagen zur Hand haben. Zählen Sie auf uns!",
            description3:"Sprachkompetenzen",
            description4:"Unsere Partnerschulen befinden sich in den schönsten und interessantesten Städten Deutschlands, die reich an Kultur und Geschichte sind. Ihre Deutschkurse werden Sie ermutigen und motivieren, die Sprache mit Leichtigkeit zu lernen und gleichzeitig diese Kultur intensiv zu erleben. Wir werden Ihnen zur Seite stehen, je nach Ihrem Zeitplan und Ihrer Verfügbarkeit.",
        },
        homeInfo2:"MÖCHTEN SIE WEITERE INFORMATIONEN?",
        homeInfo3:"Kontaktaufnahme",
    },
    Kontakt:{
        title:"Kontakt",
        option1:"ICH BIN EIN UNTERNEHMEN",
        option2:"ICH BIN EIN BEWERBER",
        nombre:"Vorname",
        apellido:"Nachname",
        telefono:"Telefon",
        empresa:"Firma",
        stadt:"Stadt",
        position:"Position",
        email:"Email",
        mensaje:"Nachricht (optional)",
        mensaje2:"nachricht",
        archivo1:"Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um eine Datei auszuwählen",
        archivo2:" (Nur PDF- oder Word-Dateien)",
        firma1:"Ich akzeptiere die",
        firma2:"datenschutzrichtlinie",
        firma2Link:"/datenschutzrichtlinie",
        firma3:"akzeptiereDatenschutz",
        firma4:"Ich akzeptiere die ",
        firma5:"Benutzerrechte",
        firma5Link:"/benutzerrechte",
        firma6:"Ich akzeptiere die",
        firma7:"Benutzerrechte",
        senden:"Senden"
    },
    Benutzerrechte:{
        title:"Benutzerrechte",
        description1:"Sie haben das Recht, Zugang zu Ihren Daten sowie deren Berichtigung oder Löschung zu verlangen. Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter:",
        infos:{
            info1:"Name Ihres Unternehmens:",
            info2:"Adresse:",
            info3:"E-Mail Adresse:",
            info4:"Telefon:"
        },
        description2:"Weitere Einzelheiten finden Sie in unserer vollständigen Datenschutzrichtlinie auf unserer Webseite.",
        tem1:"Rechtlicher Hinweis",
        tem1info1:"1. Allgemeine Informationen",
        tem1info2:"Diese rechtlichen Hinweise regeln die Nutzung der Website [Name der Website], die Eigentum von Sandra Roggero M. Beratung ist:",
        infoContacts:{
            info1:"Firmenname:",
            info2:"Adresse:",
            info3:"E-Mail:",
            info4:"Telefon:",
            info5:"Gesetzlicher Vertreter:",
            info6:"Steueridentifikationsnummer:",
        },
        tema2info1:"2. Nutzungsbestimmungen und -bedingungen",
        tema2info2:"Durch den Zugriff auf diese Website und deren Nutzung erklären Sie sich mit den in diesem rechtlichen Hinweis aufgeführten Bedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, müssen Sie von der Nutzung der Website absehen.",
        tema3info1:"3. Geistiges Eigentum",
        tema3info2:"Alle Inhalte dieser Website, einschließlich der Texte, Grafiken, Logos, Bilder und Software, sind Eigentum von Sandra Roggero M. Beratung oder deren Lizenzgebern und sind urheberrechtlich geschützt. Die unerlaubte Vervielfältigung, Verbreitung oder Veränderung dieser Inhalte ist untersagt.",
        tema4info1:"4. Beschränkung der Haftung",
        tema4info2:"Die Informationen und Dienstleistungen, die auf dieser Website enthalten sind, oder über sie verfügbar sind, können Ungenauigkeiten oder typografische Fehler enthalten. Sandra Roggero M. Beratung übernimmt keine Garantie für die Richtigkeit oder die Zuverlässigkeit der auf dieser Website enthaltenen Informationen. Die Nutzung der Website erfolgt auf eigene Gefahr.",
        tema5info1:"5. Links zu Drittparteien",
        tema5info2:"Diese Website kann Links zu anderen Websites enthalten, die von Dritten betrieben werden. Sandra Roggero M. Beratung ist nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser externen Seiten. Die Aufnahme solcher Links bedeutet nicht, dass die verlinkten Seiten gebilligt werden.",
        tema6info1:"6. Schutz der Daten",
        tema6info2:"Alle persönlichen Daten, die über diese Website gesammelt werden, werden in Übereinstimmung mit unserer Datenschutzrichtlinie behandelt.",
        tema7info1:"7. Änderungen des rechtlichen Hinweises",
        tema7info2:"Sandra Roggero M. Beratung behält sich das Recht vor, diese Hinweise jederzeit zu ändern. Die Änderungen werden mit der Veröffentlichung auf der Website wirksam. Wir empfehlen Ihnen, diese rechtlichen Hinweise regelmäßig zu überprüfen, um sich über etwaige Änderungen zu informieren.",
        tema8info1:"8. Anwendbares Recht und Gerichtsbarkeit",
        tema8info2:"Dieser rechtliche Hinweis unterliegt dem deutschen Recht. Für alle Streitigkeiten, die im Zusammenhang mit dieser Website entstehen, sind ausschließlich die Gerichte von [Stadt/Region] zuständig.",
        tema9info1:"9. Kontakt",
        tema9infos:{
            info1:"Name Ihres Unternehmens:",
            info2:"Adresse:",
            info3:"E-Mail Adresse:",
            info4:"Telefon:"
        }
    },
    Datenschutzrichtlinie:{
        title:"Datenschutzrichtlinie",
        description1:"Wir von Sandra Roggero M. Beratung verpflichten uns, Ihre Privatsphäre zu schützen. Wenn Sie Ihren Lebenslauf und Ihre persönlichen Daten über unser Formular übermitteln, werden die Informationen direkt an eine bestimmte E-Mail-Adresse gesendet und nicht in einer Datenbank gespeichert.",
        infos1:{
            title:"Erfasste Daten",
            info1:"Name",
            info2:"Ihre E-Mail-Adresse",
            info3:"Telefonnummer",
            info4:"Lebenslauf und Angaben zum beruflichen Werdegang"
        },
        infos2:{
            title:"Verwendung der Daten",
            description1:"Wir verwenden Ihre persönlichen Daten für folgende Angelegenheiten:",
            info1:"um Ihre Eignung für eine Stelle zu beurteilen.",
            info2:"um mit Ihnen über Ihre Bewerbung zu kommunizieren."
        },
        infos3:{
            title:"Zum Schutz Ihrer Daten",
            description1:"Ihre Angaben werden sicher an unsere E-Mail-Adresse gesendet und nicht in einer Datenbank gespeichert. Wir ergreifen alle angemessenen Maßnahmen, um Ihre Daten vor unbefugtem Zugriff zu schützen."
        }
    }
}

export default de;