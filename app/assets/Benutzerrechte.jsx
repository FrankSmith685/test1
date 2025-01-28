'use client'
import React, { useEffect, useState } from 'react';
import de from '../../languaje/de';
import { useAppState } from '../../hooks/useAppState';
import en from '../../languaje/en';
import es from '../../languaje/es';

const Benutzerrechte = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {tipoIdioma} = useAppState();
    const [data,setData] = useState(de.Benutzerrechte);

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.Benutzerrechte);
        }else if(tipoIdioma==='en'){
            setData(en.Benutzerrechte);
        }else{
            setData(es.Benutzerrechte);
        }
    },[tipoIdioma]);

    return (
        <div className="p-8 bg-white text-gray-900 mt-32 max-w-4xl mx-auto ">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-violet-900 font-bell">{data.title}</h1>
            <p className="mb-6 text-lg leading-relaxed">
                {data.description1}
            </p>
            <address className="mb-6 text-lg leading-relaxed">
                <strong>{data.infos.info1}</strong> <span>Sandra Roggero M. Beratung</span><br />
                <strong>{data.infos.info2}</strong> <span>Brunnenstraße, Neuweiler. Deutschland</span><br />
                <strong>{data.infos.info3}</strong> <a href="mailto:[E-Mail Adresse]" className="text-blue-600">kontakt@roggero-beratung.de</a><br />
                <strong>{data.infos.info4}</strong> <a href="tel:[Telefon]" className="text-blue-600">+49 15902234045</a><br />
            </address>
            <p className="mb-6 text-lg leading-relaxed">
                {data.description2}
            </p>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">{data.tem1}</h2>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tem1info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                {data.tem1info2}
                </p>
                <address className="mb-4 text-lg leading-relaxed">
                    <strong>{data.infoContacts.info1}</strong> Sandra Roggero M. Beratung<br />
                    <strong>{data.infoContacts.info2}</strong> <span>Brunnenstraße, Neuweiler. Deutschland</span><br />
                    <strong>{data.infoContacts.info3}</strong> <a href="mailto:kontakt@roggero-beratung.de" className="text-blue-600">kontakt@roggero-beratung.de</a><br />
                    <strong>{data.infoContacts.info4}</strong> <a href="tel:+49 15902234045" className="text-blue-600">+49 15902234045</a><br />
                    <strong>{data.infoContacts.info6}</strong> <span>040/263/01462</span>
                </address>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema2info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    {data.tema2info2}
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema3info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                {data.tema3info2}
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema4info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    {data.tema4info2}
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema5info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                {data.tema5info2}
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema6info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                {data.tema6info2}
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema7info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                {data.tema7info2}
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema8info1}</h3>
                <p className="mb-4 text-lg leading-relaxed">
                {data.tema8info2}
                </p>

                {/* <h3 className="text-xl font-semibold mb-2 text-gray-800">{data.tema9info1}</h3>
                <address className="text-lg leading-relaxed">
                    <strong>{data.tema9infos.info1}</strong> <span>[Name Ihres Unternehmens]</span><br />
                    <strong>{data.tema9infos.info2}</strong> <span>[Adresse]</span><br />
                    <strong>{data.tema9infos.info3}</strong> <a href="mailto:[E-Mail Adresse]" className="text-blue-600">[E-Mail Adresse]</a><br />
                    <strong>{data.tema9infos.info4}</strong> <a href="tel:[Telefon]" className="text-blue-600">[Telefon]</a><br />
                </address> */}
            </div>
        </div>
    );
};

export default Benutzerrechte;
