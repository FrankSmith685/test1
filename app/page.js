'use client'

import React, { useEffect, useState, useMemo, useCallback } from "react";
// import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAppState } from "./hooks/useAppState";
import de from "./languaje/de";
import es from "./languaje/es";
import MeineDienstleistungen from "./assets/MeineDienstleistungen";
import en from "./languaje/en";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HomePage = () => {
  const { tipoIdioma } = useAppState();
  const navigate = useRouter();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const [homeData,setHomeData] = useState(de.home);

    useEffect(()=>{
        if(tipoIdioma==='de'){
          setHomeData(de.home);
        }
        else if(tipoIdioma==='en'){
          setHomeData(en.home);
      }else{
          setHomeData(es.home);
        }
    },[tipoIdioma]);

  const texts = useMemo(() => homeData.texts, [homeData]);
  const infoItems = useMemo(() =>
    homeData.infoItems
  , [homeData]);

  const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
  };

  const infoItems2 = useMemo(() => 
    homeData.infoItems2
  , [homeData]);


  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150;
    const fullText = texts[currentTextIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setCurrentCharIndex((prev) => prev - 1);

        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText((prev) => prev + fullText.charAt(currentCharIndex));
        setCurrentCharIndex((prev) => prev + 1);

        if (currentCharIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  const handleClickSeleccionReclutamiento = useCallback(() => {
    navigate.push("/kontakt");
  }, [navigate]);

  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative overflow-hidden">
          <img 
            src={optimizedImageURL("v1720714061/f2thxhzee96nw41mmgs6.jpg")} 
            className="absolute top-0 left-0 w-full h-full object-cover z-0" 
            alt="Loading video..."
          />
          <video autoPlay loop muted preload="auto" className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="https://res.cloudinary.com/dievolijo/video/upload/v1719429849/ml9u5molos4vnrx9zlyq.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

        <div className="bg-bg_favorite_1 flex flex-col justify-start items-center h-full z-20 relative space-y-4 p-4  md:pt-0 sm:p-6 md:p-8">
            <div className="w-11/12 md:w-2/5 h-auto mt-40 sm:mt-24 md:mt-40 font-bell">
              <h2 className="text-white font-medium text-xl sm:text-3xl lg:text-4xl text-center md:text-end px-2">
                {homeData.text1}
              </h2>
              <h2 className="text-customColor5 font-medium text-xl sm:text-3xl lg:text-4xl text-center md:text-end px-2">
                <span>{displayText}</span>
              </h2>
            </div>
            <div className="w-full h-auto flex justify-end items-end absolute bottom-0">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white bg-transparent backdrop-blur-sm ">
                {infoItems.map((item, index) => (
                  <Link 
                    href={item.path} 
                    key={index} 
                    className={`border border-gray-500 p-2 md:p-4 h-12 sm:h-32 md:h-36 flex items-center transition-all duration-300 ${activeIndex === index ? 'hover:bg-white hover:text-gray-700' : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className="flex-1">
                      <h3 className="font-bold">{item.title}</h3>
                      {activeIndex === index && (
                        <p className="opacity-100 transition-opacity duration-300 text-xs sm:text-sm md:text-sm lg:text-base hidden sm:flex">{item.description}</p>
                      )}
                    </div>
                    <div className="ml-2">
                      <FaArrowRight />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
      </div>
      <div className="w-11/12 mx-auto text-gray-700 flex flex-wrap py-5 px-2 md:py-20 md:px-10">
        <div className="w-full sm:w-1/2">
        {/* v1719431720/ljqc8ytxjnqzr9q8woqu.jpg */}
          <img src={optimizedImageURL('v1721579797/t5lgz9dcymohq8ungzxe.jpg')} alt="not found" className="w-full h-full object-cover" loading="lazy"/>
        </div>
          <div
            className="w-full sm:w-1/2 h-full p-4 md:p-20 space-y-4 sm:space-y-6 md:space-y-8"
          >
          <div className='flex flex-col items-center justify-start'>
              <img src={optimizedImageURL('v1719690680/yxcetofgrpqxqb7ziwnr.png')} alt="Logo Principal" className='h-20' loading='lazy'/>
              <div className="flex flex-col items-center">
                  <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 text-gray-800`}>
                      SANDRA ROGGERO M.
                  </h2>
                  <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 text-violet-900`}>
                      BERATUNG
                  </span>
              </div>
          </div>
          <p className="text-start text-sm sm:text-sm md:text-lg">
            {homeData.detail1}
          </p>
          <p className="text-start text-sm sm:text-sm md:text-lg">
            {homeData.detail2}
          </p>
          <button
            className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
            onClick={handleClickSeleccionReclutamiento}
          >
            {homeData.detail3}
          </button>
          </div>
      </div>
      <div className="w-full h-96 bg-gray-800 flex justify-center items-center">
        <p className="w-11/12 m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">
          {homeData.homeInfo1}
        </p>
      </div>

      <div className="min-h-screen bg-white py-8 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {infoItems2.map((item, index) => (
              <div key={index}  className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
              {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />}

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
              </div>
          ))}
        </div>
      </div>
        <MeineDienstleistungen/>
        <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
          <div className="w-full flex justify-center items-center">
            <div className="w-full text-center p-4">
              <h2 className="font-semibold text-gray-800 my-2 text-2xl md:text-3xl">{homeData.homeInfo2}</h2>
              <button
                className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                onClick={handleClickSeleccionReclutamiento}
              >
                {homeData.homeInfo3}
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default HomePage;
