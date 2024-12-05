'use client'
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import de from "../../languaje/de";
import es from "../../languaje/es";
import { useAppState } from "../../hooks/useAppState";
import en from "../../languaje/en";
import { useRouter } from "next/navigation";

const InternationalesKarrieremanagement=()=>{
    const navigate = useRouter();
    const {tipoIdioma} = useAppState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickHome=()=>{
        navigate.push("/");
    }
    const optimizedImageURL = (url) => {
        const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
        return `${cloudinaryBaseURL}c_scale,w_2000/${url}`;
    };

    const [data,setData] = useState(de.Kandidaten);

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.Kandidaten);
        }else if(tipoIdioma==='en'){
            setData(en.Kandidaten);
        }else{
            setData(es.Kandidaten);
        }
    },[tipoIdioma]);


    const handleClickEnviarCorreo=(item)=>{
        navigate.push(item);
    }
    
    return(
        <>
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img 
                src={optimizedImageURL("v1720047156/m0ztlmbrykc8c3x0vqjb.jpg")} 
                alt="Internationales Karrieremanagement " 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                />
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                <div className="w-full md:w-1/2 h-auto">
                    <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                        {data.InternationalesKarrieremanagement.title}
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
                    {data.InternationalesKarrieremanagement.title}
                </p>
                <h2 className="text-gray-700 text-start w-full pb-1 font-semibold text-2xl">  {data.InternationalesKarrieremanagement.description1} </h2>
                <p className="text-gray-700 text-start w-full pb-1">
                {data.InternationalesKarrieremanagement.description2}
                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                    {data.InternationalesKarrieremanagement.description3}

                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                {data.InternationalesKarrieremanagement.description4}
                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                {data.InternationalesKarrieremanagement.description5}
                </p>
            </div>
            <div className="w-full bg-gray-800">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col items-center justify-center p-4 md:p-8">
                        <div className="w-full p-6 rounded-lg bg-white shadow-lg">
                            <h1 className="text-2xl font-semibold text-center pb-4 text-gray-700">
                            {data.InternationalesKarrieremanagement.info1}
                            </h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-lg">
                                {data.InternationalesKarrieremanagement.beneficios.map((beneficio, index) => (
                                    <div key={index} className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-2" />
                                        <span className="text-sm text-gray-700">{beneficio}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto p-4 md:p-10">
                <h2 className="text-2xl font-semibold text-start pb-4 text-gray-700">
                    {data.InternationalesKarrieremanagement.description6}
                </h2>
                <p className="text-start pb-4 text-gray-700"> {data.InternationalesKarrieremanagement.description7}  <span className="font-bold">kontakt@roggero-beratung.de</span>{data.InternationalesKarrieremanagement.description8}  </p>
                <button
                    className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                    onClick={()=>handleClickEnviarCorreo(data.InternationalesKarrieremanagement.description10)}
                >
                    {data.InternationalesKarrieremanagement.description9}
                </button>                
            </div>

        </>
    )
}
export default InternationalesKarrieremanagement;