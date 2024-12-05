'use client'
import { useEffect, useState } from "react";
import de from "../../languaje/de";
import { useAppState } from "../../hooks/useAppState";
import es from "../../languaje/es";
import en from "../../languaje/en";
import MeineDienstleistungen from "@/app/assets/MeineDienstleistungen";
import { useRouter } from "next/navigation";

const UnserePhilosophie=()=>{
    const navigate = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickHome=()=>{
        navigate.push("/");
    }
      const handleClickSeleccionReclutamiento = () => {
        navigate.push("/kontakt");
    };

    const optimizedImageURL = (url) => {
        const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
        return `${cloudinaryBaseURL}c_scale,w_2000/${url}`;
    };  

    const [data,setData] = useState(de.Wir);
    const {tipoIdioma} = useAppState();

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.Wir);
        }else if(tipoIdioma==='en'){
            setData(en.Wir);
        }else{
            setData(es.Wir);
        }
    },[tipoIdioma]);

    return(
        <>
            
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img 
                // src={optimizedImageURL("v1719875145/mb6tugqd7dsmaxnjpu37.jpg")} 
                src={optimizedImageURL("v1719875769/xqh0ss1f1tgxoujwu1cv.jpg")}
                alt="Unsere Philosophie" 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                />
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                <div className="w-full md:w-1/2 h-auto">
                    <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                    {data.UnserePhilosophie.title}
                    </h2>
                </div>
                </div>
            </div>
            <div className="w-11/12 px-2 sm:px-10 pb-10 mx-auto">
                <p className="text-lg text-gray-400 py-10 font-bell">
                <span onClick={handleClickHome} className="hover:cursor-pointer  text-gray-800 font-medium">
                    Sandra Roggero <span className="text-gray-500 font-medium text-base">Beratung</span>
                </span>
                {' > '}
                {data.UnserePhilosophie.title}
                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                {data.UnserePhilosophie.description}
                </p>
            </div>
            
            <MeineDienstleistungen/>
            <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
                <div className="w-full flex justify-center items-center">
                <div className="w-full text-center p-4">
                    <h2 className="font-semibold text-gray-800 my-2 text-2xl md:text-3xl">{data.homeInfo2}</h2>
                    <button
                    className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                    onClick={handleClickSeleccionReclutamiento}
                    >
                    {data.homeInfo3}
                    </button>
                </div>
                </div>
            </div>
            

        </>
    )
}

export default UnserePhilosophie;