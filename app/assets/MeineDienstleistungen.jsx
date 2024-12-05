'use client'
import { useCallback, useEffect, useMemo, useState } from "react";
import de from "../languaje/de";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useAppState } from "../hooks/useAppState";
import es from "../languaje/es";

const MeineDienstleistungen = () => {
    const {tipoIdioma} = useAppState();
const [homeData,setHomeData] = useState(de.home);   
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    if(tipoIdioma==='de'){
      setHomeData(de.home);
    }else{
      setHomeData(es.home);
    }
},[tipoIdioma]);

  const services = useMemo(() => 
    homeData.services
  //   [
  //   { title: "STUDIUM" },
  //   { title: "AUSBILDUNG" },
  //   { title: "PARKTIKUM" },
  //   { title: "ARBEIT" },
  //   { title: "STEUERN" },
  //   { title: "WOHNEN" },
  //   { title: "TRANSPORT" },
  //   { title: "VISUM" },
  //   { title: "SPRACHE" },
  // ]
  , [homeData]);

    const nextCard = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
      }, [services.length]);
    
      const prevCard = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
      }, [services.length]);
    
      const getCardPosition = (index, currentIndex, length) => {
        if (index === currentIndex) return 'translate-x-0 opacity-100';
        if (index === (currentIndex + 1) % length) return 'translate-x-full opacity-50';
        if (index === (currentIndex - 1 + length) % length) return '-translate-x-full opacity-50';
        return 'hidden';
      };

   


    return(
        <>
            <div className="bg-gray-800 w-full h-full">
            <h2 className="md:text-3xl text-xl sm:text-2xl font-bold text-center py-10 text-white">{homeData.tituloServicio}</h2>
            <div className="relative w-full h-auto overflow-hidden ">
                <div className="flex justify-center items-center  w-full h-96 p-20">
                    {services.map((service, index) => (
                    <div key={index} className={`absolute w-full md:w-1/2  transition-transform duration-500 ease-in-out ${getCardPosition(index, currentIndex, services.length)}`}>
                        <div className="w-full h-full ">
                        <img src={service.image} alt={service.title} className="w-full h-96 object-cover"/>
                        </div>
                        
                        <div className="absolute inset-0 w-full flex items-end justify-center">
                            <div className="w-full  bg-bg_favorite_4 text-center p-4">
                                <h3 className="text-base font-bold text-white">{service.title}</h3>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center py-5 w-1/2 mx-auto">
                <div className="flex items-center justify-center w-12 text-3xl  bg-opacity-50 text-white cursor-pointer" onClick={prevCard}>
                <FaAngleLeft />
                </div>
                <div className="relative w-full mx-4 h-1 bg-gray-700 rounded">
                <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-in-out"
                    style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
                ></div>
                </div>
                <div className="flex items-center justify-center w-12 text-3xl  bg-opacity-50 text-white cursor-pointer" onClick={nextCard}>
                <FaAngleRight />
                </div>
            </div>
            </div>
        </>
    )
}

export default MeineDienstleistungen;