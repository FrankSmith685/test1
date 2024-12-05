'use client'
import React, { useEffect, useState } from 'react';
import { useAppState } from '../hooks/useAppState';
import de from '../languaje/de';
import en from '../languaje/en';
import es from '../languaje/es';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {tipoIdioma} = useAppState();
    const [data,setData] = useState(de.Datenschutzrichtlinie);

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.Datenschutzrichtlinie);
        }else if(tipoIdioma==='en'){
            setData(en.Datenschutzrichtlinie);
        }else{
            setData(es.Datenschutzrichtlinie);
        }
    },[tipoIdioma]);

    return (
        <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg mt-32 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-violet-900 font-bell">{data.title}</h1>
            <p className="mb-6 text-lg leading-relaxed">
                {data.description1}
            </p>

            <div className="bg-gray-100 p-6 rounded-md shadow-inner mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">{data.infos1.title}</h2>
                <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
                    <li>{data.infos1.info1}</li>
                    <li>{data.infos1.info2}</li>
                    <li>{data.infos1.info3}</li>
                    <li>{data.infos1.info4}</li>
                </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-md shadow-inner mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">{data.infos2.title}</h2>
                <p className="mb-4 text-lg leading-relaxed">{data.infos2.description1}</p>
                <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
                    <li>{data.infos2.info1}</li>
                    <li>{data.infos2.info2}</li>
                </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">{data.infos3.title}</h2>
                <p className="text-lg leading-relaxed">
                    {data.infos2.description1}
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
