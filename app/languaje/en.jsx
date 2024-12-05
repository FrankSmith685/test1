const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
};

const en = {
    menu2 : [
        { id:0, path: "/unternehmen/#", label: "Company", subTema: "We select the professionals your company needs and foster new leadership styles adapted to current times.", subItems: [
            { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personnel Selection and Recruitment" },
            { path: "/unternehmen/personalbewertungen", label: "Personnel Evaluations" },
            { path: "/unternehmen/international", label: "International" },
            { path: "/unternehmen/funktionen", label: "Functions" },
            { path: "/unternehmen/fachspezifische-suche", label: "Specialized Search" },
            { path: "/unternehmen/inklusionsaudit", label: "Inclusion Audit" },
        ]},
        { id:1, path: "/kandidaten/#", label: "Candidates", subTema: "We support you on your career path. Take advantage of our job offers, professional advice, and digital resources.", subItems: [
            { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Register Your Resume" },
            { path: "/kandidaten/internationales-karrieremanagement", label: "International Career Management" },
        ]},
        { id:2, path: "/wir/#", label: "About Us", subTema: "Learn more about our company and our values.", subItems: [
            { path: "/wir/wer-wir-sind", label: "Who We Are" },
            { path: "/wir/unsere-philosophie", label: "Our Philosophy" },
        ]},
        { id:3, path: "/sonstige-dienstleistungen", label: "Other Services", subTema: "We offer services for your academic, professional, and personal development, including studies, work, housing, transportation, visas, and languages.", subItems: [
            { path: "/sonstige-dienstleistungen/studium-ausbildung-praktikum", label: "Studies - Training - Internships" },
            { path: "/sonstige-dienstleistungen/arbeit-steuern", label: "Work - Taxes" },
            { path: "/sonstige-dienstleistungen/wohnen-transportmittel", label: "Housing - Transportation" },
            { path: "/sonstige-dienstleistungen/visum-sprachkompetenzen", label: "Visa - Language" },
        ]},
        { id:4, path: "/kontakt", label: "Contact" },
    ],
    home: {
        texts: ["INNOVATIVE SOLUTIONS?", "QUALIFIED CANDIDATES?", "PROFESSIONAL IMPROVEMENT?"],
        text1: "ARE YOU LOOKING FOR",
        infoItems: [
            { title: "Personnel Selection and Recruitment", description: "We offer individual support in the selection and integration processes for candidates and clients.", path: "/company/personnel-selection-and-recruitment" },
            { title: "Personnel Evaluations", description: "Support in talent identification, human capital development, professional integration, and creating a strong corporate culture.", path: "/company/personnel-evaluations" },
            { title: "International", description: "Sandra Roggero-Beratung assists in evaluating and developing teams through personalized assessments and individual competency plans.", path: "/company/international" },
            { title: "Functions", description: "Selecting the right employees is crucial. Sandra Roggero helps attract talent that shares your story and can shape your company.", path: "/company/functions" },
            { title: "Specialized Search", description: "Sandra Roggero-Beratung supports companies worldwide in hiring professionals through talent management and selection processes.", path: "/company/specialized-search" },
            { title: "Inclusion Audit", description: "We overcome biases in the selection process through an inclusion audit that analyzes every step from job description to onboarding.", path: "/company/inclusion-audit" }
        ],
        detail1: "We contribute every day to ensuring that people experience profound satisfaction in their professional journey and grow personally.",
        detail2: "Today, it's about more than just 'finding' new employees quickly. It's about building optimal work teams, structured coherently with the company's goals.",
        detail3: "Contact",
        homeInfo1: "SOCIETY CHANGES, LEADERSHIP STYLES EVOLVE, WHY NOT EVOLVE THE SELECTION PROCESS AS WELL?",
        infoItems2: [
            { title: "INNOVATION", description: "Today, it's about more than just 'finding' new employees quickly. It's about building optimal work teams, structured coherently with the company's goals. Therefore, companies need a partner who understands the market and has practical experience.", 
              image: optimizedImageURL('v1719429422/bxeybnb6rq6jqnlpd3t1.jpg')
            },
            { title: "RECRUITMENT COMPETENCE", description: "Thorough evaluation of our candidates, so our business clients can form optimal work teams, composed of committed, disciplined, and well-structured young and/or adult individuals that align with their business goals.", 
              image: optimizedImageURL('v1719432618/xfum9gljkffxtjhfd5tu.jpg')
            },
            { title: "VISION", description: "Our goal is to create high-performance teams that achieve business objectives and contribute to a positive and inclusive work culture.",
              image: optimizedImageURL('v1719875148/cl4jynz7brqnggwvxwzm.jpg')
            },
            { title: "NEW PATHS IN PERSONNEL ACQUISITION", description: "With fresh ideas and passionate commitment, we aim to revolutionize the area of personnel acquisition.", 
              image: optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg')
            }
        ],
        tituloServicio: "As a human resources consultancy, we can also assist you with the following:",
        services: [
            { title: "STUDIES", image: optimizedImageURL('v1719434278/ocddglzj4wpc5lbidcve.jpg') },
            { title: "TRAINING", image: optimizedImageURL('v1719434278/rru0wddozzlje8tv7wo7.jpg') },
            { title: "INTERNSHIPS", image: optimizedImageURL('v1720047308/qhowjwv3jbywvh3fgqeb.jpg') },
            { title: "WORK", image: optimizedImageURL('v1720047637/okxctjjmmdegr4ptljhn.jpg') },
            { title: "TAXES", image: optimizedImageURL('v1720047700/pqjjlckzyuvgt32bxkhk.jpg') },
            { title: "HOUSING", image: optimizedImageURL('v1720616614/cebiafyysmleabgeofvi.jpg') },
            { title: "TRANSPORTATION", image: optimizedImageURL('v1720622228/omcgfbrslqda69acfxr0.jpg') },
            { title: "VISA", image: optimizedImageURL('v1720648648/yazfttcufijofwthhes8.jpg') },
            { title: "LANGUAGE", image: optimizedImageURL('v1720652893/zwpk88oskknftyafqm5u.jpg') },
        ],
        homeInfo2: "WANT MORE INFORMATION?",
        homeInfo3: "Contact",
    },
    footer: {
        Informationen: { title: "Information", links: [
            { link: "/benutzerrechte", detail: "User Rights" },
            { link: "/datenschutzrichtlinie", detail: "Privacy Policy" },
        ]},
        MeineDienstleistungen: { title: "Other Services", links: [
            { link: "/sonstige-dienstleistungen/studium-ausbildung-praktikum", detail: "Studies - Training - Internships" },
            { link: "/sonstige-dienstleistungen/arbeit-steuern", detail: "Work - Taxes" },
            { link: "/sonstige-dienstleistungen/wohnen-transportmittel", detail: "Housing - Transportation" },
            { link: "/sonstige-dienstleistungen/visum-sprachkompetenzen", detail: "Visa - Language" },
        ]},
        Kontakt: { title: "Contact", links: [
            { detail: "Email: kontakt@roggero-beratung.de" },
            { detail: "Phone: +49 15902234045" },
            { detail: "Address: Brunnenstrasse, Neuweiler. Germany" },
            { detail: "Hours: Mon-Fri, 9:00 - 18:00" },
        ]},
        info: "2024 All rights reserved"
    },
    "Unternehmen": {
        "PersonalauswahlUndRekrutierung": {
            "title": "Selection and Recruitment of Personnel",
            "description": "We commit to each selection process as if it were our own company, focusing on people and listening to them, whether they are candidates or clients. Consultancy and recognition of needs play a significant role. Additionally, thanks to our own 'Onboarding Selection' service, we accompany and ensure the best possible integration of candidates into the company. We are recruitment consultants and integration coaches. The onboarding process not only focuses on follow-up after selection but accompanies the process from the beginning, always in line with the company's mission and objective. Each selection process is unique because no two people or companies are alike. There is a solution for every company, and we at Sandra Roggero Consulting know how to find it."
        },
        "Personalbewertungen": {
            "title": "Personnel Evaluations",
            "description": "Performance evaluation is an important tool to increase productivity. Knowing your teams' skills and understanding what they can bring to the company allows you to provide them with the necessary tools to promote both their professional development and that of the company.",
            "description2": "Sandra Roggero Consulting helps you evaluate your teams by focusing on people.",
            "dataInfo": [
                "Recognize and develop your company's unique talents.",
                "Conduct evaluations tailored to your challenges and team.",
                "Reward productivity and employee performance in promotion or internal selection processes.",
                "Measure personal competencies, potential, and interests of employees in line with the company's strategy and objectives.",
                "Incorporate competency development plans tailored to the person and the position."
            ]
        },
        "International": {
            "title": "International",
            "description": "When it comes to consolidating international talent and workforce, it is necessary to have profiles with specific experience and knowledge, whether at a national or international level, to drive the next phase of the company.",
            "description2": "We accompany you in international projects managing talent management and selection processes to find the right professionals in Germany and/or abroad.",
            "description3": "A SPECIALIZED DEPARTMENT",
            "description4": "We find the right professionals, regardless of their location.",
            "description5": "Our direct and proactive market search methodology, our international experience, our headquarters in Peru, and our staff worldwide help us find the most qualified talents."
        },
        "Inklusionsaudit": {
            "title": "Inclusion Audit",
            "description": "We identify biases and eliminate obstacles in the selection process. Selection processes have evolved over time, and additional systems, content, or technologies have emerged. Although these processes offer functional service and expertise in talent selection, it is likely that biases exist at every stage of your process. Our inclusion audit analyzes each touchpoint with the candidate during the selection process, from the job description for this position, through your internal talent area, the application process, the interview and selection, to onboarding. This approach provides constant transparency regarding active and hidden barriers and biases."
        },
        "Funktionen": {
            "title": "Functions",
            "description": "Identification of talents, understanding and developing human capital. Understanding the labor market to recognize new needs and anticipate the profiles that the company will need in the short term. Finding the best ways to integrate them into the company. Incorporating professionals into the different areas of the company, being aware of their skills and knowing how they can add value to the company. Creating a strong corporate culture."
        },
        "FachspezifischeSuche": {
            "title": "Specialized Search",
            "description": "People are the heart of every project. The selection of qualified employees is undoubtedly one of the most important factors when it comes to achieving all your company's goals. Therefore, incorporating professional profiles that align with your company's values and mission should be one of your priorities. To attract the most sought-after and qualified talents, you must tell the unique story behind your company. That is why it is important to seek the support and expertise of a specialized personnel consultancy that knows what you really need and has a wide network of professionals who want to realize their full potential in a company like yours. At Sandra Roggero Consulting, we look beyond the job description to understand the story your company tells and connect it with the right people who will help you transform your company."
        },
        "homeInfo2": "WANT MORE INFORMATION?",
        "homeInfo3": "Contact"
    },
    "Kandidaten": {
        "RegistrierenSieIhrenLebenslauf": {
            "title": "Register Your Resume",
            "description": "We help you write the next chapter of your career. Tell us your story!",
            "email": "Email",
            "file1": "Drag your resume here or click to select a file",
            "file2": "(PDF or Word files only)",
            "message": "Message (Optional)",
            "message2": "Your message here...",
            "senden": "Send"
        },
        "InternationalesKarrieremanagement": {
            "title": "International Career Management",
            "description1": "Your career has no limits",
            "description2": "Ready for the next step? Germany awaits you!",
            "description3": "If your goal is to boost your career in Germany, our specialized international career advisory team is at your disposal to take your talent far.",
            "description4": "At Sandra Roggero M. Beratung we look beyond your resume, we value the unique story you can bring to German companies. We will listen to you and recognize the qualities that distinguish you and the characteristics that can make you stand out.",
            "description5": "Due to our active international commitment and constant collaboration with companies, we can connect you with companies that want to enrich their teams with diverse profiles and the unique skills of professionals with international experience.",
            "info1": "Advantages of working abroad",
            "beneficios": [
                "Adds unique value to the resume",
                "Expands your professional network",
                "Masters new languages",
                "Improves social skills",
                "Adapts quickly",
                "Fosters leadership skills",
                "Explores new cultures",
                "Adopts innovative working methods"
            ],
            "description6": "Ready to take the step?",
            "description7": "Send us your resume and your career expectations to",
            "description8": "and one of our international career management experts will contact you.",
            "description9": "Send your resume",
            description10:"/candidates/register-your-resume"
        }
    },
    "Wir": {
        "WerWirSind": {
            "title": "Who We Are",
            "description": "Our story begins in 2014, when Sandra Roggero Manrique, born in Peru, highly specialized in Human Resources and Personnel Recruitment in Lima, Peru, and an expert in Public Relations, emigrated to Germany. Fifteen years earlier, she had traveled through Europe, where she evaluated and analyzed the labor market needs of her home country and the highly qualified workforce available, with the vision that they would also be needed in Germany, where she would eventually settle.",
            "description2": "We are different",
            "description3": "First of all, because we ask questions. We demand. We get involved. We advise. We are honest and don't beat around the bush. We invest our time and dedication. We are committed with heart and passion."
        },
        "UnserePhilosophie": {
            "title": "Our Philosophy",
            "description": "We drive the unique stories of our candidates and clients. Our ability to understand what you really need allows us to develop and share captivating stories that make a difference. Stories are important because when we share our plans, experiences, and ambitions, a world of possibilities opens up for us. By listening to you, we can build long-term relationships based on trust and empathy. In Peru and Germany, our small team consists of specialized advisors, talented people with an expert global perspective. And through the exchange of stories among us, we foster teamwork, which we are convinced leads to success not only for us but also for our candidates and clients worldwide. Thanks to people's stories, we are able to look beyond the resume or job description and find the unique characteristic that makes the match between a company and a team or candidate exceptional. We are able to support companies in finding the talents that will help them achieve all their goals, now and in the future. Of course, we are also able to help people define the next chapter of their career that allows them to fulfill all their ambitions. The greatest opportunities start with a story. Tell us yours."
        },
        "homeInfo2": "WANT MORE INFORMATION?",
        "homeInfo3": "Contact"
    },
    "MeineDienstleistungen": {
        "StudiumAusbildungPraktikum": {
            "title": "Study - Training - Internship",
            "description": "Study",
            "description2": "Here we give you a small overview of the advantages of studying in Germany, especially for international students. International reputation of teaching and research... Variety of academic offerings... Low tuition fees and reduced costs... Support programs and the possibility to work. You will experience everyday work life firsthand. This way, you will know what tasks await you.",
            "description3": "Training",
            "description4": "What are the advantages after training?",
            "description5": "Training is practical. You can directly apply what you have learned and see what you have achieved. You can take on responsibilities early, but you won't be alone: Collaboration within the company is essential. Training is also lucrative, as you will have your own income from day one. Secure for the future. Promising.",
            "description6": "Internships",
            "description7": "This is what an internship in Germany offers you!",
            "description8": "You will be able to better assess whether a profession or sector suits your interests and strengths. You can include your internship in your resume. This can give you an advantage in future job applications. Your internship company will know you. This can help you in a future application, for example, for a student worker position or for training. Maybe they will even offer you a training position."
        },
        "ArbeitSteuern": {
            "title": "Work - Taxes",
            "description": "Work",
            "description2": "The main advantages of working in Germany are:",
            "description3": "The rapid economic growth and numerous job opportunities in the IT, technology, and industrial sectors. Compared to other countries, Germany offers fair wages and salaries. And the German government continually strives to attract foreign workers.",
            "description4": "Taxes",
            "description5": "In Germany, there are different types of taxes, such as income tax, business tax, and value-added tax. These are the main sources of state revenue, which finance expenses for the common good, such as social security, education, healthcare, or transportation infrastructure. The German tax system is based on the taxpayer's economic capacity, transparency, and fairness."
        },
        "WohnenBeförderung": {
            "title": "Housing - Transportation",
            "description0": "Housing",
            "description": "Germany is one of the best countries to live in. Germany is characterized by its multiculturalism and has a large number of immigrants from all over the world. This has made it one of the most popular destinations for people who want to start a new life.",
            "description2": "Transportation",
            "description3": "In Germany, you can travel to many destinations by train, but also by tram or bus. The train, subway, suburban train, tram, and bus are the different means of public transportation for long and short distances."
        },
        "VisumSprache": {
            "title": "Visa - Language",
            "description": "Visa",
            "description2": "Applying for a work or study visa for Germany is one of the most important procedures if you want to start your integration in the German-speaking country. Germany is one of the largest economic powers in Europe. It offers very good salary opportunities and has become an excellent choice for those determined to change their lives. However, if you want to establish yourself correctly in this country, you must do things right. It is important that you have all the information about the necessary documents. Count on us!",
            "description3": "Language",
            "description4": "Our partner schools are located in the most beautiful and interesting cities in Germany, rich in culture and history. Their German courses will encourage and motivate you to learn the language with ease and, at the same time, to intensely experience this culture. We will be by your side according to your schedule and availability."
        },
        "homeInfo2": "WANT MORE INFORMATION?",
        "homeInfo3": "Contact"
    },
    "Kontakt": {
        "title": "Contact",
        "option1": "I AM A COMPANY",
        "option2": "I AM AN APPLICANT",
        "nombre": "Name",
        "apellido": "Surname",
        "telefono": "Phone",
        "empresa": "Company",
        "stadt": "City",
        "position": "Position",
        "email": "Email",
        "mensaje": "Message (optional)",
        "mensaje2": "message",
        "archivo1": "Drag your resume here or click to select a file",
        "archivo2": " (PDF or Word files only)",
        "firma1": "I accept the",
        "firma2": "privacy policy",
        "firma2Link": "/datenschutzrichtlinie",
        "firma3": "acceptPrivacyPolicy",
        "firma4": "I accept the",
        "firma5": "User Rights",
        "firma5Link": "/benutzerrechte",
        "firma6": "I accept the",
        "firma7": "User Rights",
        "senden": "Send"
    },
    Benutzerrechte:{
        title:"User Rights",
        description1:"You have the right to request access to your data, as well as its correction or deletion. To exercise these rights, please contact us at:",
        infos:{
            info1:"Your Company Name:",
            info2:"Address:",
            info3:"Email Address:",
            info4:"Phone:"
        },
        description2:"For more details, please see our full privacy policy on our website.",
        tem1:"Legal Notice",
        tem1info1:"1. General Information",
        tem1info2:"These legal notices govern the use of the website [Name of the Website], which is owned by Sandra Roggero M. Beratung:",
        infoContacts:{
            info1:"Company Name:",
            info2:"Address:",
            info3:"Email:",
            info4:"Phone:",
            info5:"Legal Representative:",
            info6:"Tax Identification Number:",
        },
        tema2info1:"2. Terms and Conditions of Use",
        tema2info2:"By accessing and using this website, you agree to the terms and conditions outlined in this legal notice. If you do not agree with these terms, you must refrain from using the website.",
        tema3info1:"3. Intellectual Property",
        tema3info2:"All content on this website, including texts, graphics, logos, images, and software, is the property of Sandra Roggero M. Beratung or its licensors and is protected by copyright. Unauthorized reproduction, distribution, or alteration of these contents is prohibited.",
        tema4info1:"4. Limitation of Liability",
        tema4info2:"The information and services contained on this website, or available through it, may contain inaccuracies or typographical errors. Sandra Roggero M. Beratung does not guarantee the accuracy or reliability of the information contained on this website. Use of the website is at your own risk.",
        tema5info1:"5. Links to Third Parties",
        tema5info2:"This website may contain links to other websites operated by third parties. Sandra Roggero M. Beratung is not responsible for the content or privacy practices of these external sites. The inclusion of such links does not imply endorsement of the linked pages.",
        tema6info1:"6. Data Protection",
        tema6info2:"All personal data collected through this website will be treated in accordance with our privacy policy.",
        tema7info1:"7. Changes to the Legal Notice",
        tema7info2:"Sandra Roggero M. Beratung reserves the right to modify these notices at any time. Changes will take effect upon publication on the website. We recommend that you regularly review these legal notices to stay informed of any changes.",
        tema8info1:"8. Applicable Law and Jurisdiction",
        tema8info2:"This legal notice is governed by German law. For all disputes arising in connection with this website, the courts of [City/Region] shall have exclusive jurisdiction.",
        tema9info1:"9. Contact",
        tema9infos:{
            info1:"Your Company Name:",
            info2:"Address:",
            info3:"Email Address:",
            info4:"Phone:"
        }
    },

    Datenschutzrichtlinie:{
        title:"Privacy Policy",
        description1:"At Sandra Roggero M. Beratung, we are committed to protecting your privacy. When you submit your resume and personal data through our form, the information is sent directly to a specific email address and is not stored in a database.",
        infos1:{
            title:"Data Collected",
            info1:"Name",
            info2:"Your Email Address",
            info3:"Phone Number",
            info4:"Resume and Professional Background Details"
        },
        infos2:{
            title:"Use of Data",
            description1:"We use your personal data for the following purposes:",
            info1:"to assess your suitability for a position.",
            info2:"to communicate with you about your application."
        },
        infos3:{
            title:"To Protect Your Data",
            description1:"Your information is securely sent to our email address and not stored in a database. We take all reasonable measures to protect your data from unauthorized access."
        }
    }


    
}


export default en;
