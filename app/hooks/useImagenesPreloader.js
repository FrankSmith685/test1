import { useContext, useEffect } from "react";
import LogoPrincipalWhite from "@/imagenes/LogoPrincipalWhite.png";
import LogoPrincipalBlack from "@/imagenes/LogoPrincipalBlack.png";
import Foto_Principal from "@/imagenes/Foto_Principal.jpg";
// import Innovation from "@/imagenes/Innovation.png";
// import Recruiting from "@/imagenes/Recruiting.png";
// import Vision from "@/imagenes/Vision.png";
// import Contratacion from "@/imagenes/Contratacion.png";


// import LogoPrincipal_Black from "@/public/images/home/LogoPrincipal_1.png";
// import FotoPerfil from "@/public/images/home/FotoPerfil.jpg";

import { AppContext } from "../context/AppContext";

export default function InitImages() {
  const { imagenRef } = useContext(AppContext);

  useEffect(() => {
    if (!imagenRef.current) return;

    if (!imagenRef.current.LogoPrincipalWhite && !imagenRef.current.LogoPrincipalBlack && !imagenRef.current.Foto_Principal) {
      imagenRef.current.LogoPrincipalWhite = LogoPrincipalWhite;
      imagenRef.current.LogoPrincipalBlack = LogoPrincipalBlack;
      imagenRef.current.Foto_Principal = Foto_Principal;
      // imagenRef.current.Innovation = Innovation;
      // imagenRef.current.Recruiting = Recruiting;
      // imagenRef.current.Vision = Vision;
      // imagenRef.current.Contratacion = Contratacion;
      
      // imagenRef.current.FotoPerfil = FotoPerfil;
      // imagenRef.current.Innovation = Innovation;
      // imagenRef.current.Recruiting = Recruiting;
      // imagenRef.current.Vision = Vision;
      // imagenRef.current.Contratacion = Contratacion;
      
    }
  }, []);

  return null;
}

