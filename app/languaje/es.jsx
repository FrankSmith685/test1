const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
};

const es = {
    menu2 : [
        { id:0, path: "/unternehmen/#", label: "Empresa", subTema: "Seleccionamos los profesionales que su empresa necesita y fomentamos nuevos estilos de liderazgo adaptados a los tiempos actuales.", subItems: [
            { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Selección y Reclutamiento de Personal" },
            { path: "/unternehmen/personalbewertungen", label: "Evaluaciones de Personal" },
            { path: "/unternehmen/international", label: "Internacional" },
            { path: "/unternehmen/funktionen", label: "Funciones" },
            { path: "/unternehmen/fachspezifische-suche", label: "Búsqueda Especializada" },
            { path: "/unternehmen/inklusionsaudit", label: "Auditoría de Inclusión" },
        ]},
        { id:1, path: "/kandidaten/#", label: "Candidatos", subTema: "Le apoyamos en su camino hacia su carrera. Aproveche nuestras ofertas de empleo, asesoría profesional y recursos digitales.", subItems: [
            { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registre su Currículum" },
            { path: "/kandidaten/internationales-karrieremanagement", label: "Gestión de Carrera Internacional" },
        ]},
        { id:2, path: "/wir/#", label: "Nosotros", subTema: "Conozca más sobre nuestra empresa y nuestros valores.", subItems: [
            { path: "/wir/wer-wir-sind", label: "Quiénes Somos" },
            { path: "/wir/unsere-philosophie", label: "Nuestra Filosofía" },
        ]},
        { id:3, path: "/sonstige-dienstleistungen", label: "Otros Servicios", subTema: "Ofrecemos servicios para su desarrollo académico, profesional y personal, incluyendo estudios, trabajo, vivienda, transporte, visados e idiomas.", subItems: [
            { path: "/sonstige-dienstleistungen/studium-ausbildung-praktikum", label: "Estudios - Formación - Prácticas" },
            { path: "/sonstige-dienstleistungen/arbeit-steuern", label: "Trabajo - Impuestos" },
            { path: "/sonstige-dienstleistungen/wohnen-transportmittel", label: "Vivienda - Transporte" },
            { path: "/sonstige-dienstleistungen/visum-sprachkompetenzen", label: "Visado - Idioma" },
        ]},
        { id:4, path: "/kontakt", label: "Contacto" },
    ],
    home: {
        texts: ["SOLUCIONES INNOVADORAS?", "CANDIDATOS CALIFICADOS?", "UNA MEJORA PROFESIONAL?"],
        text1: "¿BUSCA",
        infoItems: [
            { title: "Selección y Reclutamiento de Personal", description: "Ofrecemos apoyo individual en los procesos de selección e integración para candidatos y clientes.", path: "/empresa/seleccion-y-reclutamiento-de-personal" },
            { title: "Evaluaciones de Personal", description: "Apoyo en la identificación de talentos, desarrollo de capital humano, integración de profesionales y creación de una fuerte cultura empresarial.", path: "/empresa/evaluaciones-de-personal" },
            { title: "Internacional", description: "Sandra Roggero-Beratung ayuda en la evaluación y desarrollo de equipos a través de evaluaciones personalizadas y planes de competencia individuales.", path: "/empresa/internacional" },
            { title: "Funciones", description: "La selección de empleados adecuados es crucial. Sandra Roggero ayuda a atraer talentos que compartan su historia y puedan formar su empresa.", path: "/empresa/funciones" },
            { title: "Búsqueda Especializada", description: "Sandra Roggero-Beratung apoya a empresas de todo el mundo en la contratación de profesionales a través de la gestión de talentos y procesos de selección.", path: "/empresa/busqueda-especializada" },
            { title: "Auditoría de Inclusión", description: "Superamos prejuicios en el proceso de selección a través de una auditoría de inclusión que analiza cada paso desde la descripción del puesto hasta la incorporación.", path: "/empresa/auditoria-de-inclusion" }
        ],
        detail1: "Contribuimos cada día a que las personas experimenten una profunda satisfacción en su camino profesional y crezcan personalmente.",
        detail2: "Hoy en día, se trata de más que solo 'encontrar' nuevos empleados rápidamente. Se trata de construir equipos de trabajo óptimos, compuestos por una organización estructurada de manera coherente con los objetivos de la empresa.",
        detail3: "Contactar",
        homeInfo1: "LA SOCIEDAD CAMBIA, LOS ESTILOS DE LIDERAZGO EVOLUCIONAN, ¿POR QUÉ NO EVOLUCIONAR TAMBIÉN EL PROCESO DE SELECCIÓN?",
        infoItems2: [
            { title: "INNOVACIÓN", description: "Hoy en día, se trata de más que solo 'encontrar' nuevos empleados rápidamente. Se trata de construir equipos de trabajo óptimos, compuestos por una organización estructurada de manera coherente con los objetivos de la empresa. Por eso, las empresas necesitan un socio que entienda el mercado y tenga experiencia práctica.", 
              image: optimizedImageURL('v1719429422/bxeybnb6rq6jqnlpd3t1.jpg')
            },
            { title: "COMPETENCIA EN RECLUTAMIENTO", description: "Evaluación exhaustiva de nuestros candidatos, para que nuestros clientes empresariales puedan formar equipos de trabajo óptimos, compuestos por jóvenes y/o adultos comprometidos, disciplinados y bien estructurados que correspondan a sus objetivos empresariales.", 
              image: optimizedImageURL('v1719432618/xfum9gljkffxtjhfd5tu.jpg')
            },
            { title: "VISIÓN", description: "Nuestro objetivo es crear equipos de alto rendimiento que logren los objetivos empresariales y contribuyan a una cultura laboral positiva e inclusiva.",
              image: optimizedImageURL('v1719875148/cl4jynz7brqnggwvxwzm.jpg')
            },
            { title: "NUEVOS CAMINOS EN LA ADQUISICIÓN DE PERSONAL", description: "Con ideas frescas y un compromiso apasionado, buscamos revolucionar el área de adquisición de personal.", 
              image: optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg')
            }
        ],
        tituloServicio: "Como consultoría de recursos humanos, también podemos ayudarle con lo siguiente:",
        services: [
            { title: "ESTUDIOS", image: optimizedImageURL('v1719434278/ocddglzj4wpc5lbidcve.jpg') },
            { title: "FORMACIÓN", image: optimizedImageURL('v1719434278/rru0wddozzlje8tv7wo7.jpg') },
            { title: "PRÁCTICAS", image: optimizedImageURL('v1720047308/qhowjwv3jbywvh3fgqeb.jpg') },
            { title: "TRABAJO", image: optimizedImageURL('v1720047637/okxctjjmmdegr4ptljhn.jpg') },
            { title: "IMPUESTOS", image: optimizedImageURL('v1720047700/pqjjlckzyuvgt32bxkhk.jpg') },
            { title: "VIVIENDA", image: optimizedImageURL('v1720616614/cebiafyysmleabgeofvi.jpg') },
            { title: "TRANSPORTE", image: optimizedImageURL('v1720622228/omcgfbrslqda69acfxr0.jpg') },
            { title: "VISADO",image:optimizedImageURL('v1720648648/yazfttcufijofwthhes8.jpg') },
            { title: "IDIOMA",image:optimizedImageURL('v1720652893/zwpk88oskknftyafqm5u.jpg') },
        ],
        homeInfo2: "¿DESEAS MÁS INFORMACIÓN?",
        homeInfo3: "Contactar",
        
    },
    footer:{
        Informationen:{title:"Información",links:[
            {link:"/benutzerrechte",detail:"Derechos del Usuario"},
            {link:"/datenschutzrichtlinie",detail:"Política de Privacidad"},
        ]},
        MeineDienstleistungen:{title:"Otros Servicios",links:[
            {link:"/sonstige-dienstleistungen/studium-ausbildung-praktikum",detail:"Estudio - Formación - Prácticas"},
            {link:"/sonstige-dienstleistungen/arbeit-steuern",detail:"Trabajo - Impuestos"},
            {link:"/sonstige-dienstleistungen/wohnen-transportmittel",detail:"Vivienda - Transporte"},
            {link:"/sonstige-dienstleistungen/visum-sprachkompetenzen",detail:"Visa - Idioma"},
        ]},
        Kontakt:{title:"Contacto",links:[
            {detail:"Email: kontakt@roggero-beratung.de"},
            {detail:"Teléfono: +49 15902234045"},
            {detail:"Dirección: Brunnenstrasse, Neuweiler. Alemania"},
            {detail:"Horario: Lun-Vie, 9:00 - 18:00"},
        ]},
        info:"2024 Todos los derechos reservados"
    },
    
    Unternehmen:{
        PersonalauswahlUndRekrutierung:{
            title:"Selección y Reclutamiento de Personal",
            description:"Nos comprometemos en cada proceso de selección como si fuera nuestra propia empresa, enfocándonos en las personas y escuchándolas, ya sean candidatos o clientes. La consultoría y el reconocimiento de necesidades tienen un papel significativo. Además, gracias a nuestro propio servicio 'Selección de Onboarding', acompañamos y aseguramos la mejor integración posible de los candidatos en la empresa. Somos consultores de reclutamiento y coaches de integración. El proceso de onboarding no solo se enfoca en el seguimiento después de la selección, sino que acompaña el proceso desde el principio, siempre en línea con la misión y el objetivo de la empresa. Cada proceso de selección es único porque no hay dos personas o empresas iguales. Hay una solución para cada empresa, y nosotros en Sandra Roggero Consulting sabemos cómo encontrarla."
        },
        Personalbewertungen:{
            title:"Evaluaciones de Personal",
            description:"La evaluación del desempeño es una herramienta importante para aumentar la productividad. Conocer las habilidades de sus equipos y entender lo que pueden aportar a la empresa le permite proporcionarles las herramientas necesarias para promover tanto su desarrollo profesional como el de la empresa.",
            description2:"Sandra Roggero Consulting le ayuda a evaluar sus equipos enfocándose en las personas.",
            dataInfo:[
                "Reconocer y desarrollar los talentos únicos de su empresa.",
                "Realizar evaluaciones adaptadas a sus desafíos y equipo.",
                "Recompensar la productividad y el rendimiento de los empleados en procesos de promoción o selección internos.",
                "Medir las competencias personales, el potencial y los intereses de los empleados en línea con la estrategia y los objetivos de la empresa.",
                "Incorporar planes de desarrollo de competencias adaptados a la persona y al puesto."
            ]
        },
        International:{
            title:"Internacional",
            description:"Cuando se trata de consolidar talentos y mano de obra internacional, es necesario contar con perfiles con experiencia y conocimientos específicos, ya sea a nivel nacional o internacional, para impulsar la siguiente fase de la empresa.",
            description2:"Le acompañamos en proyectos internacionales gestionando la gestión de talentos y los procesos de selección para encontrar los profesionales adecuados en Alemania y/o en el extranjero.",
            description3:"UN DEPARTAMENTO ESPECIALIZADO",
            description4:"Encontramos a los profesionales adecuados, independientemente de su ubicación.",
            description5:"Nuestra metodología de búsqueda directa y proactiva en el mercado, nuestra experiencia internacional, nuestra sede en Perú y nuestro personal en todo el mundo nos ayudan a encontrar los talentos más calificados."
        },
        Inklusionsaudit:{
            title:"Auditoría de Inclusión",
            description:"Identificamos sesgos y eliminamos obstáculos en el proceso de selección. Los procesos de selección han evolucionado con el tiempo, y han surgido sistemas, contenidos o tecnologías adicionales. Aunque estos procesos ofrecen un servicio funcional y experiencia en la selección de talentos, es probable que existan sesgos en cada etapa de su proceso. Nuestra auditoría de inclusión analiza cada punto de contacto con el candidato durante el proceso de selección, desde la descripción del puesto para esta posición, pasando por su área de talento interno, el proceso de solicitud, la entrevista y la selección, hasta la incorporación. Este enfoque proporciona una transparencia constante en cuanto a barreras y sesgos activos y ocultos."
        },
        Funktionen:{
            title:"Funciones",
            description:"Identificación de talentos, comprensión y desarrollo del capital humano. Comprender el mercado laboral para reconocer nuevas necesidades y prever los perfiles que la empresa necesitará a corto plazo. Encontrar las mejores maneras de integrarlos en la empresa. Incorporar profesionales en las diferentes áreas de la empresa, siendo conscientes de sus habilidades y sabiendo cómo pueden añadir valor a la empresa. Crear una cultura corporativa sólida."
        },
        FachspezifischeSuche:{
            title:"Búsqueda Especializada",
            description:"Las personas son el corazón de cada proyecto. La selección de empleados calificados es sin duda uno de los factores más importantes cuando se trata de alcanzar todos los objetivos de su empresa. Por lo tanto, la incorporación de perfiles profesionales que se ajusten a los valores y la misión de su empresa debe ser una de sus prioridades. Para atraer a los talentos más buscados y calificados, debe contar la historia única detrás de su empresa. Por eso es importante buscar el apoyo y la experiencia de una consultoría de personal especializada que sepa lo que realmente necesita y tenga una amplia red de profesionales que quieran realizar todo su potencial en una empresa como la suya. En Sandra Roggero Consulting, miramos más allá de la descripción del puesto para entender la historia que cuenta su empresa y lo conectamos con las personas adecuadas que lo ayudarán a transformar su empresa."
        },
        homeInfo2:"¿QUIERE MÁS INFORMACIÓN?",
        homeInfo3:"Contactar"
    },
    Kandidaten:{
        RegistrierenSieIhrenLebenslauf:{
            title:"Registre su currículum",
            description:"Le ayudamos a escribir el próximo capítulo de su carrera. ¡Cuéntenos su historia!",
            email:"Correo electrónico",
            file1:"Arrastre su currículum aquí o haga clic para seleccionar un archivo",
            file2:"(Solo archivos PDF o Word)",
            message:"Mensaje (Opcional)",
            message2:"Su mensaje aquí...",
            senden:"Enviar"
        },
        InternationalesKarrieremanagement:{
            title:"Gestión de Carrera Internacional",
            description1:"Su carrera no tiene límites",
            description2:"¿Listo para el próximo paso? ¡Alemania te espera!",
            description3:"Si su objetivo es impulsar su trayectoria profesional en Alemania, nuestro equipo especializado en asesoría de carrera internacional está a su disposición para llevar su talento muy lejos.",
            description4:"En Sandra Roggero M. Beratung miramos más allá de su currículum, valoramos la historia única que puede aportar a las empresas alemanas. Le escucharemos y sabremos reconocer las cualidades que le distinguen y las características que pueden hacerle destacar.",
            description5:"Debido a nuestro activo compromiso internacional y la constante colaboración con empresas, podemos conectarle con empresas que desean enriquecer sus equipos con perfiles diversos y las habilidades únicas de profesionales con experiencia internacional.",
            info1:"Ventajas de trabajar en el extranjero",
            beneficios:[
                "Añade un valor único al currículum",
                "Amplía su red profesional",
                "Domina nuevos idiomas",
                "Mejora habilidades sociales",
                "Se adapta rápidamente",
                "Fomenta habilidades de liderazgo",
                "Explora nuevas culturas",
                "Adopta métodos de trabajo innovadores"
            ],
            description6:"¿Listo para dar el paso?",
            description7:"Envíenos su currículum y sus expectativas profesionales a",
            description8:"y uno de nuestros expertos en gestión de carrera internacional se pondrá en contacto con usted.",
            description9:"Envíe su currículum",
            description10:"/candidatos/registre-su-curriculum"
        }
        
    },
    Wir:{
        WerWirSind:{
            title:"Quiénes Somos",
            description:"Nuestra historia comienza en el año 2014, cuando Sandra Roggero Manrique, nacida en Perú, altamente especializada en Recursos Humanos y Reclutamiento de Personal en Lima, Perú y experta en Relaciones Públicas, emigró a Alemania. Quince años antes, había viajado por Europa, donde evaluó y analizó las necesidades del mercado laboral de su país de origen y la mano de obra altamente calificada existente, con la visión de que también se necesitarían en Alemania, donde finalmente se establecería.",
            description2:"Somos diferentes",
            description3:"En primer lugar, porque hacemos preguntas. Exigimos. Nos involucramos. Asesoramos. Somos honestos y no andamos con rodeos. Invertimos nuestro tiempo y dedicación. Estamos comprometidos con corazón y pasión.",
        },
        UnserePhilosophie:{
            title:"Nuestra Filosofía",
            description:"Impulsamos las historias únicas de nuestros candidatos y clientes. Nuestra capacidad para comprender lo que realmente necesita nos permite desarrollar y compartir historias cautivadoras que marcan la diferencia. Las historias son importantes, porque cuando compartimos nuestros planes, experiencias y ambiciones, se nos abre un mundo de posibilidades. Al escucharle, podemos construir relaciones a largo plazo basadas en la confianza y la empatía. En Perú y Alemania, nuestro pequeño equipo está compuesto por asesores especializados, personas talentosas con una perspectiva global experta. Y a través del intercambio de historias entre nosotros, fomentamos el trabajo en equipo, del cual estamos convencidos que conduce al éxito, no solo para nosotros, sino también para nuestros candidatos y clientes en todo el mundo. Gracias a las historias de las personas, somos capaces de mirar más allá del currículum o la descripción del puesto y encontrar la característica única que hace que la coincidencia entre una empresa y un equipo o un candidato sea excepcional. Somos capaces de apoyar a las empresas en la búsqueda de los talentos que les ayuden a alcanzar todos sus objetivos, ahora y en el futuro. Por supuesto, también somos capaces de ayudar a las personas a definir el próximo capítulo de su carrera que les permita cumplir todas sus ambiciones. Las mayores oportunidades comienzan con una historia. Cuéntenos la suya.",
        },
        homeInfo2:"¿DESEA MÁS INFORMACIÓN?",
        homeInfo3:"Contactar",
    },
    MeineDienstleistungen:{
        StudiumAusbildungPraktikum:{
            title:"Estudio - Formación - Prácticas",
            description:"Estudio",
            description2:"Aquí le damos una pequeña visión general de las ventajas que tiene estudiar en Alemania, especialmente para los estudiantes internacionales. Reputación internacional de la enseñanza e investigación... Variedad de la oferta académica... Bajas tasas de matrícula y costos reducidos... Programas de apoyo y la posibilidad de trabajar. Experimentará el día a día laboral de primera mano. Así sabrá qué tareas le esperan.",
            description3:"Formación",
            description4:"¿Qué ventajas tiene después de la formación?",
            description5:"Una formación es práctica. Puede aplicar directamente lo aprendido y ver lo que ha logrado. Puede asumir responsabilidades temprano, pero no estará solo: La colaboración en la empresa es esencial. Una formación también es lucrativa, ya que desde el primer día tendrá su propio ingreso. Seguro para el futuro. Prometedor.",
            description6:"Prácticas",
            description7:"¡Esto le aporta una práctica en Alemania!",
            description8:"Podrá evaluar mejor si una profesión o un sector se ajusta a sus intereses y fortalezas. Puede incluir sus prácticas en su currículum. Esto puede darle una ventaja en futuras solicitudes de empleo. Su empresa de prácticas lo conocerá. Esto puede ayudarle en una futura solicitud, por ejemplo, para un puesto de estudiante trabajador o para una formación. Quizás incluso le ofrezcan un puesto de formación.",
        },
        ArbeitSteuern:{
            title:"Trabajo - Impuestos",
            description:"Trabajo",
            description2:"Las principales ventajas del trabajo en Alemania son:",
            description3:"El rápido crecimiento económico y las numerosas oportunidades de empleo en los sectores de TI, tecnología e industria. En comparación con otros países, Alemania ofrece salarios y sueldos justos. Y el gobierno alemán se esfuerza continuamente por atraer a trabajadores extranjeros.",
            description4:"Impuestos",
            description5:"En Alemania hay diferentes tipos de impuestos, como el impuesto sobre la renta, el impuesto de actividades económicas y el impuesto sobre el valor añadido. Son las principales fuentes de ingresos del Estado, con las que financia gastos para el bienestar común, como la seguridad social, la educación, la atención sanitaria o la infraestructura de transporte. El sistema fiscal alemán se basa en la capacidad económica del contribuyente, la transparencia y la justicia.",
        },
        WohnenBeförderung:{
            title:"Vivienda - Transporte",
            description0:"Vivienda",
            description:"Alemania es uno de los mejores países para vivir. Alemania se caracteriza por su multiculturalidad y tiene un gran número de inmigrantes de todo el mundo. Esto lo ha convertido en uno de los destinos más populares para las personas que quieren empezar una nueva vida.",
            description2:"Transporte",
            description3:"En Alemania se puede viajar a muchos destinos en tren, pero también en tranvía o autobús. El tren, el metro, el tren suburbano, el tranvía y el autobús son los diferentes medios de transporte público de larga y corta distancia.",
        },
        VisumSprache:{
            title:"Visado - Idioma",
            description:"Visado",
            description2:"La solicitud de un visado de trabajo o de estudios para Alemania es uno de los procedimientos más importantes si desea comenzar su integración en el país de habla alemana. Alemania es una de las mayores potencias económicas de Europa. Ofrece muy buenas oportunidades salariales y se ha convertido en una excelente opción para quienes están decididos a cambiar su vida. Sin embargo, si desea establecerse correctamente en este país, debe hacer las cosas bien. Es importante que tenga toda la información sobre los documentos necesarios. ¡Cuente con nosotros!",
            description3:"Idioma",
            description4:"Nuestras escuelas asociadas están situadas en las ciudades más hermosas e interesantes de Alemania, ricas en cultura e historia. Sus cursos de alemán le animarán y motivarán a aprender el idioma con facilidad y, al mismo tiempo, a experimentar intensamente esta cultura. Estaremos a su lado según su horario y disponibilidad.",
        },
        homeInfo2:"¿DESEA MÁS INFORMACIÓN?",
        homeInfo3:"Contactar",
    },
    Kontakt:{
        title:"Contacto",
        option1:"SOY UNA EMPRESA",
        option2:"SOY UN SOLICITANTE",
        nombre:"Nombre",
        apellido:"Apellido",
        telefono:"Teléfono",
        empresa:"Empresa",
        stadt:"Ciudad",
        position:"Posición",
        email:"Correo electrónico",
        mensaje:"Mensaje (opcional)",
        mensaje2:"mensaje",
        archivo1:"Arrastre su currículum aquí o haga clic para seleccionar un archivo",
        archivo2:" (Solo archivos PDF o Word)",
        firma1:"Acepto la ",
        firma2:" política de privacidad",
        firma2Link:"/datenschutzrichtlinie",
        firma3:"aceptoPolíticaDePrivacidad",
        firma4:"Acepto los ",
        firma5:"Derechos de Usuario",
        firma5Link:"/benutzerrechte",
        firma6:"Acepto los",
        firma7:"Derechos de Usuario",
        senden:"Enviar"
    },
    Benutzerrechte:{
        title:"Derechos de usuario",
        description1:"Tiene derecho a solicitar acceso a sus datos, así como su rectificación o eliminación. Para ejercer estos derechos, por favor contáctenos en:",
        infos:{
            info1:"Nombre de su empresa:",
            info2:"Dirección:",
            info3:"Correo electrónico:",
            info4:"Teléfono:"
        },
        description2:"Para más detalles, consulte nuestra política de privacidad completa en nuestro sitio web.",
        tem1:"Aviso legal",
        tem1info1:"1. Información general",
        tem1info2:"Estos avisos legales regulan el uso del sitio web [Nombre del sitio web], que es propiedad de Sandra Roggero M. Beratung:",
        infoContacts:{
            info1:"Nombre de la empresa:",
            info2:"Dirección:",
            info3:"Correo electrónico:",
            info4:"Teléfono:",
            info5:"Representante legal:",
            info6:"Número de identificación fiscal:",
        },
        tema2info1:"2. Términos y condiciones de uso",
        tema2info2:"Al acceder y utilizar este sitio web, usted acepta los términos y condiciones establecidos en este aviso legal. Si no está de acuerdo con estos términos, debe abstenerse de usar el sitio web.",
        tema3info1:"3. Propiedad intelectual",
        tema3info2:"Todo el contenido de este sitio web, incluidos textos, gráficos, logotipos, imágenes y software, es propiedad de Sandra Roggero M. Beratung o sus licenciantes y está protegido por derechos de autor. La reproducción, distribución o modificación no autorizada de estos contenidos está prohibida.",
        tema4info1:"4. Limitación de responsabilidad",
        tema4info2:"La información y los servicios contenidos en este sitio web, o disponibles a través de él, pueden contener imprecisiones o errores tipográficos. Sandra Roggero M. Beratung no garantiza la exactitud o fiabilidad de la información contenida en este sitio web. El uso del sitio web es bajo su propio riesgo.",
        tema5info1:"5. Enlaces a terceros",
        tema5info2:"Este sitio web puede contener enlaces a otros sitios web operados por terceros. Sandra Roggero M. Beratung no es responsable del contenido ni de las prácticas de privacidad de estos sitios externos. La inclusión de dichos enlaces no implica la aprobación de las páginas enlazadas.",
        tema6info1:"6. Protección de datos",
        tema6info2:"Todos los datos personales recopilados a través de este sitio web se tratarán de acuerdo con nuestra política de privacidad.",
        tema7info1:"7. Modificaciones del aviso legal",
        tema7info2:"Sandra Roggero M. Beratung se reserva el derecho de modificar estos avisos en cualquier momento. Las modificaciones entrarán en vigor al publicarse en el sitio web. Le recomendamos revisar estos avisos legales regularmente para estar informado de cualquier cambio.",
        tema8info1:"8. Ley aplicable y jurisdicción",
        tema8info2:"Este aviso legal se rige por la ley alemana. Para todas las disputas que surjan en relación con este sitio web, serán competentes exclusivamente los tribunales de [Ciudad/Región].",
        tema9info1:"9. Contacto",
        tema9infos:{
            info1:"Nombre de su empresa:",
            info2:"Dirección:",
            info3:"Correo electrónico:",
            info4:"Teléfono:"
        }
    },

    Datenschutzrichtlinie:{
        title:"Política de Privacidad",
        description1:"En Sandra Roggero M. Beratung nos comprometemos a proteger su privacidad. Cuando envía su currículum y sus datos personales a través de nuestro formulario, la información se envía directamente a una dirección de correo electrónico específica y no se almacena en una base de datos.",
        infos1:{
            title:"Datos Recopilados",
            info1:"Nombre",
            info2:"Su Dirección de Correo Electrónico",
            info3:"Número de Teléfono",
            info4:"Currículum y Detalles de la Trayectoria Profesional"
        },
        infos2:{
            title:"Uso de los Datos",
            description1:"Usamos sus datos personales para los siguientes fines:",
            info1:"para evaluar su idoneidad para un puesto.",
            info2:"para comunicarnos con usted sobre su solicitud."
        },
        infos3:{
            title:"Para Proteger Sus Datos",
            description1:"Sus datos se envían de manera segura a nuestra dirección de correo electrónico y no se almacenan en una base de datos. Tomamos todas las medidas razonables para proteger sus datos contra el acceso no autorizado."
        }
    }


}

export default es;
