'use client'
import { useState, useEffect, useContext } from "react";
// import InitImages from "./hooks/useImagenesPreloader";
// import InitVideos from "./hooks/useVideosPreLoader";
// import HeaderNav from "./assets/HeaderNav";
import { FaSpinner } from "react-icons/fa";
import { AppContext } from "./context/AppContext";
import { useAppState } from "./hooks/useAppState";
import HeaderNav from "./assets/HeaderNav";
import InitVideos from "./hooks/useVideosPreLoader";
import InitImages from "./hooks/useImagenesPreloader";

export default function PreloadWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const { imagenRef } = useContext(AppContext);
  const {videos,setVideos} = useAppState();
    console.log("XD",imagenRef.current);
  useEffect(() => {
    const checkResourcesLoaded = () => {
      return (
        imagenRef.current?.LogoPrincipalWhite &&
        imagenRef.current?.LogoPrincipalBlack &&
        imagenRef.current?.Foto_Principal && 
        videos.banner?.readyState >= 3
        
      );
    };

    if (checkResourcesLoaded()) {
      setLoading(false);
    } else {
      const interval = setInterval(() => {
        if (checkResourcesLoaded()) {
          setLoading(false);
          clearInterval(interval);
        }
      }, 100); 

      return () => clearInterval(interval);
    }
  }, [imagenRef,videos]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <FaSpinner className="text-6xl text-white animate-spin" />
        <InitImages />
        <InitVideos />
      </div>
    );
  }

  return (
    <>
        <InitImages />
        <InitVideos />
        <HeaderNav />
        {children}
    </>
  );
}
