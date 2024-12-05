'use client'
import { useEffect, useState } from "react";
import { useAppState } from "../../hooks/useAppState";
import de from "../../languaje/de";
import es from "../../languaje/es";
import en from "../../languaje/en";
import { useRouter } from "next/navigation";
import MeineDienstleistungen from "@/app/assets/MeineDienstleistungen";

const WerWirSind=()=>{
    const navigate = useRouter();
    const images = ["v1721578681/jaslkmacgybqhefxzsk3.png", "v1721578695/us0c8qpjn9ew2sp87bcv.jpg", "v1721578780/wp35vz1jaiij11rdtn8p.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    return(
        <>
            
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
                    <img 
                    src={optimizedImageURL(images[0])} 
                    alt="Wer Wir Sind" 
                    className="h-full z-0 sm:w-auto object-cover w-full" 
                    />
                </div>
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                    <div className="w-full md:w-3/5 h-auto">
                        <h2 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl font-bell text-center md:text-end px-2">
                        {data.WerWirSind.title}
                        </h2>
                    </div>
                    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'} cursor-pointer`}
                            onClick={() => handleImageClick(index)}
                        ></div>
                    ))}
                    </div> */}
                </div>
            </div>
            <div className="w-11/12 px-2 sm:px-10 pb-10 mx-auto">
                <p className="text-lg text-gray-400 py-10 font-bell">
                <span onClick={handleClickHome} className="hover:cursor-pointer  text-gray-800 font-medium">
                    Sandra Roggero <span className="text-gray-500 font-medium text-base">Beratung</span>
                </span>
                {' > '}
                    {data.WerWirSind.title}
                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                    {data.WerWirSind.description}
                </p>
                <h2 className="text-gray-700 text-start text-xl font-semibold w-full pb-1">{data.WerWirSind.description2}</h2>
                <p className="text-gray-700 text-start w-full pb-1">
                        {data.WerWirSind.description3}
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

export default WerWirSind;