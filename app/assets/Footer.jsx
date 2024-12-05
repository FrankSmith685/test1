'use client'
import React, { useEffect, useState } from "react";
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
import { useAppState } from "../hooks/useAppState";
import de from "../languaje/de";
import es from "../languaje/es";
import en from "../languaje/en";
import Link from "next/link";
// import logoPrincipal from "../assets/imagenes/logoPrincipal.png";

const Footer = () => {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const optimizedImageURL = (url) => {
        const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
        return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
    };

    const [activeInformationen,setActiveInformationen] = useState(false);
    const [meineDienstleistungen,setMeineDienstleistungen] = useState(false);
    const [kontakt,setKontakt] = useState(false);

    const { tipoIdioma } = useAppState();
  const [homeData,setHomeData] = useState(de.footer);

    useEffect(()=>{
        if(tipoIdioma==='de'){
          setHomeData(de.footer);
        }
        else if(tipoIdioma==='en'){
            setHomeData(en.footer);
        }
        else{
          setHomeData(es.footer);
        }
    },[tipoIdioma]);

    return (
        <footer className="bg-gray-700 text-white py-8">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center ">
                        <Link href="/" onClick={handleLinkClick} className='flex flex-col items-center'>
                            <img src={optimizedImageURL('v1719690680/w24ybh8okav1nil30ylm.png')} alt="Logo Principal" className='h-20' loading='lazy'/>
                            <div className="flex flex-col items-center">
                                <h2 className="font-roboto-thin font-medium lg:text-xl md:text-lg transition-colors duration-300 text-white">
                                    SANDRA ROGGERO M.
                                </h2>
                                <span className="font-bell text-sm font-bold -mt-1 transition-colors duration-300 text-white">
                                    BERATUNG
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="md:flex  md:flex-wrap md:justify-between md:items-start px-0 w-full">
                    <div className="mb-6 w-full md:w-auto bg-white text-gray-700 md:bg-transparent md:text-white px-2 py-1">
                        <div className="w-full flex justify-between items-center" onClick={()=>setActiveInformationen(!activeInformationen)}>
                            {/* <h2 className="text-lg font-semibold py-1">Informationen</h2> */}
                            <h2 className="text-lg font-semibold py-1">{homeData.Informationen.title}</h2>
                            <FaAngleRight className="hover:cursor-pointer md:hidden"/>
                        </div>
                        <ul className={`${activeInformationen ? '' :'hidden'} px-2 md:block py-2`}>
                            {homeData.Informationen.links.map((link)=>{
                                return (
                                    <li className="mb-2"><Link href={link.link} className="font-normal">{link.detail}</Link></li>
                                )
                            })}
                            {/* <li className="mb-2"><Link to="/benutzerrechte" className="font-normal">Benutzerrechte</Link></li>
                            <li className="mb-2"><Link to="/datenschutzrichtlinie" className="font-normal">Datenschutzrichtlinie</Link></li> */}
                        </ul>
                    </div>

                    <div className="mb-6 w-full md:w-auto bg-white text-gray-700 md:bg-transparent md:text-white px-2 py-1">
                        <div className="w-full flex justify-between items-center" onClick={()=>setMeineDienstleistungen(!meineDienstleistungen)}>
                            <h2 className="text-lg font-semibold py-1">{homeData.MeineDienstleistungen.title} </h2>
                            <FaAngleRight className="hover:cursor-pointer md:hidden"/>
                        </div>
                        <ul className={`${meineDienstleistungen ? '' :'hidden'} px-2 md:block py-2`}>
                            {homeData.MeineDienstleistungen.links.map((link)=>{ 
                                return (
                                    <li className="mb-2"><Link href={link.link} className="font-normal">{link.detail}</Link></li>
                                )
                            })}
                            {/* <li className="mb-2"><Link to="/meine-dienstleistungen/studium-ausbildung-praktikum" className="font-normal">Studium - Ausbildung - Praktikum</Link></li>
                            <li className="mb-2"><Link to="/meine-dienstleistungen/arbeit-steuern" className="font-normal">Arbeit - Steuern</Link></li>
                            <li className="mb-2"><Link to="/meine-dienstleistungen/wohnen-transport" className="font-normal">Wohnen - Beförderung</Link></li>
                            <li className="mb-2"><Link to="/meine-dienstleistungen/visum-sprache" className="font-normal">Visum - Sprache</Link></li> */}
                        </ul>
                    </div>

                    <div className="mb-6 w-full md:w-auto bg-white text-gray-700 md:bg-transparent md:text-white px-2 py-1">
                        <div className="w-full flex justify-between items-center" onClick={()=>setKontakt(!kontakt)}>
                            {/* <h2 className="text-lg font-semibold py-1">Kontakt</h2> */}
                            <h2 className="text-lg font-semibold py-1">{homeData.Kontakt.title}</h2>
                            <FaAngleRight className="hover:cursor-pointer md:hidden"/>
                        </div>
                        <ul className={`${kontakt ? '' :'hidden'} px-2 md:block py-2`}>
                            {homeData.Kontakt.links.map((link)=>{ 
                                return (
                                    // <li className="mb-2"><Link to={link.link} className="font-normal">{link.detail}</Link></li>
                                    <li className="mb-2">{link.detail}</li>

                                )
                            })}
                            {/* <li className="mb-2">Email: kontakt@sandra-roggero.de</li>
                            <li className="mb-2">Telefon: +49 123 456 789</li>
                            <li className="mb-2">Adresse: Musterstraße 1, 12345 Musterstadt, Deutschland</li>
                            <li className="mb-2">Öffnungszeiten: Mo-Fr, 9:00 - 18:00 Uhr</li> */}
                        </ul>
                    </div>

                    

                    
                </div>

                <hr className="my-8 border-white" />

                <div className="text-center">
                    {/* <p className="font-medium">&copy; 2024 Alle Rechte vorbehalten</p> */}
                    <p className="font-medium">&copy; {homeData.info}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// {/* <div className="mb-6">
//                         <h2 className="text-lg font-semibold mb-4">Meine Dienstleistungen</h2>
//                         <ul className="text-white font-medium px-2">
//                             <li className="mb-2"><Link to="/meine-dienstleistungen/studium-ausbildung-praktikum" className="font-normal">Studium - Ausbildung - Praktikum</Link></li>
//                             <li className="mb-2"><Link to="/meine-dienstleistungen/arbeit-steuern" className="font-normal">Arbeit - Steuern</Link></li>
//                             <li className="mb-2"><Link to="/meine-dienstleistungen/wohnen-transport" className="font-normal">Wohnen - Beförderung</Link></li>
//                             <li className="mb-2"><Link to="/meine-dienstleistungen/visum-sprache" className="font-normal">Visum - Sprache</Link></li>
//                         </ul>
//                     </div> */}

//                     {/* <div className="mb-6">
//                         <h2 className="text-lg font-semibold mb-4">Kontakt</h2>
//                         <ul className="text-white px-2">
//                             <li className="mb-2">Email: kontakt@sandra-roggero.de</li>
//                             <li className="mb-2">Telefon: +49 123 456 789</li>
//                             <li className="mb-2">Adresse: Musterstraße 1, 12345 Musterstadt, Deutschland</li>
//                             <li className="mb-2">Öffnungszeiten: Mo-Fr, 9:00 - 18:00 Uhr</li>
//                         </ul>
//                     </div> */}

// {/* <div className="mb-6">
//                         <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
//                         <form>
//                             <input
//                                 type="email"
//                                 placeholder="Ihre Email"
//                                 className="w-full px-3 py-2 mb-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 required
//                             />
//                             <button type="submit" className="w-full py-2 bg-gray-800 text-white font-bold rounded transition duration-200 hover:bg-gray-700">
//                                 Abonnieren
//                             </button>
//                         </form>
//                     </div> */}