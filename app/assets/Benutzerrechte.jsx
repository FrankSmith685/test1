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
    const [data,setData] = useState(de.Benutzerrechte.Impressum);

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.Benutzerrechte.Impressum);
        }else if(tipoIdioma==='en'){
            setData(en.Benutzerrechte.Impressum);
        }else{
            setData(es.Benutzerrechte.Impressum);
        }
    },[tipoIdioma]);

    console.log("XD",data);

    return (
        <div className="p-8 bg-white text-gray-900 mt-32 max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-violet-900 font-bell">{data.title}</h1>
            
            <address className="mb-6 text-lg leading-relaxed">
                <strong>Name:</strong> {data.anbieter.name}<br />
                <strong>Unternehmen:</strong> {data.anbieter.unternehmen}<br />
                <strong>Adresse:</strong> {data.anbieter.adresse}<br />
                <strong>Telefon:</strong> <a href={`tel:${data.anbieter.telefon}`} className="text-blue-600">{data.anbieter.telefon}</a><br />
                <strong>Email:</strong> <a href={`mailto:${data.anbieter.email}`} className="text-blue-600">{data.anbieter.email}</a><br />
                <strong>Steuer Nummer:</strong> {data.anbieter.steuerNummer}<br />
                <strong>Berufsbezeichnung:</strong> {data.anbieter.berufsbezeichnung}<br />
                <strong>Verleihungsstaat:</strong> {data.anbieter.verleihungsstaat}
            </address>
            
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Kammer</h2>
            <p className="mb-4 text-lg leading-relaxed">{data.kammer.name}, {data.kammer.adresse}, <a href={data.kammer.webseite} className="text-blue-600">Website</a></p>

            <h2 className="text-2xl font-bold mb-4 text-blue-700">Aufsichtsbehörde</h2>
            <p className="mb-4 text-lg leading-relaxed">{data.aufsichtsbehörde.name}, {data.aufsichtsbehörde.adresse}, <a href={data.aufsichtsbehörde.webseite} className="text-blue-600">Website</a></p>
            
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Datenschutz</h2>
            <p className="mb-4 text-lg leading-relaxed">Verantwortlicher: {data.datenschutz.verantwortlicher}, <a href={`mailto:${data.datenschutz.email}`} className="text-blue-600">{data.datenschutz.email}</a>, <a href={`tel:${data.datenschutz.telefon}`} className="text-blue-600">{data.datenschutz.telefon}</a></p>
            
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Links</h2>
            <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
                <li><a href={data.links.impressum} className="text-blue-600">Impressum</a></li>
                <li><a href={data.links.agb} className="text-blue-600">AGB</a></li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Bildernachweis</h2>
            <p className="mb-4 text-lg leading-relaxed">{data.bildernachweis.beschreibung} ({data.bildernachweis.rechteinhaber})</p>

            <h2 className="text-2xl font-bold mb-4 text-blue-700">Texte</h2>
            <p className="mb-4 text-lg leading-relaxed">{data.texte}</p>
        </div>
    );
};

export default Benutzerrechte;