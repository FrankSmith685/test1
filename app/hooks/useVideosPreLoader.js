'use client'
import { useEffect } from "react";
import { useAppState } from "./useAppState";

const useVideoPreloading = () => {
  const {setVideosPreloader,activeCarga,setActiveCarga,videosPreloader } = useAppState();
  const videoElement = document.createElement('video');

  useEffect(() => {
    const bannerPrincipal = 'https://res.cloudinary.com/dievolijo/video/upload/v1719429849/ml9u5molos4vnrx9zlyq.mp4';
    // Preload del video
   
   videoElement.src = bannerPrincipal;
   videoElement.onloadeddata = () => {
     // Actualizar el estado cuando el video está cargado
    //  if(activeCarga === false){
        // setActiveCarga(true);
        setVideosPreloader({
            bannerPrincipal: bannerPrincipal, // Aquí guardamos la URL del video
        });
    //  }
   };
    
  }, []);

};

export default useVideoPreloading;






// import bannerPrincipal from "../assets/video/banner.mp4";
// import imagenInfo2 from "https://res.cloudinary.com/dievolijo/image/upload/v1719429422/bxeybnb6rq6jqnlpd3t1.jpg";
// import imagenInfo3 from "../assets/imagenes/InfoImagenesHome/imagen3.jpg";

// import fotoPerfil from "../assets/imagenes/fotoPerfil.jpg";

// 
// import bannerPrincipal1 from "../assets/imagenes/home/imagen1.jpg";
// import bannerPrincipal2 from "../assets/imagenes/home/imagen6.jpg";
// import bannerPrincipal3 from "../assets/imagenes/home/imagen7.jpg";
// import bannerPrincipal4 from "../assets/imagenes/home/imagen8.jpg";
// import bannerPrincipal5 from "../assets/imagenes/home/imagen9.jpg";



// const fotoPerfil = 'https://res.cloudinary.com/dievolijo/image/upload/v1719431720/ljqc8ytxjnqzr9q8woqu.jpg';    
// const imagenInfo2 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719429422/bxeybnb6rq6jqnlpd3t1.jpg';
// const imagenInfo3 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719432618/xfum9gljkffxtjhfd5tu.jpg';

// const bannerPrincipal1 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719433441/w0hfv4paxus96kbjo2pi.jpg';
// const bannerPrincipal2 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719433441/cmbypveirnacdqmlimvq.jpg';
// const bannerPrincipal3 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719433441/acmhyoekou8wz4n4qlhk.jpg';
// const bannerPrincipal4 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719433285/pk1xb6epqgswmkk8qrdl.jpg';
// const bannerPrincipal5 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719433282/kzypcgahflcdvyfdl8tn.jpg';


// const kandidate1 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719434278/dkaggura0qwgds4k2z1r.jpg';
// const MeineDienstleistungen1 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719434278/ocddglzj4wpc5lbidcve.jpg';
// const imagenInfo5 = 'https://res.cloudinary.com/dievolijo/image/upload/v1719434278/rru0wddozzlje8tv7wo7.jpg';





// const imagenInfo2Image = new Image();
// const imagenInfo3Image = new Image();
// const imagenInfo5Image = new Image();

// const fotoPerfilImage = new Image();

// const bannerPrincipal1Image = new Image();
// const bannerPrincipal2Image = new Image();
// const bannerPrincipal3Image = new Image();
// const bannerPrincipal4Image = new Image();
// const bannerPrincipal5Image = new Image();

// const kandidate1Image = new Image();

// const MeineDienstleistungen1Image = new Image();

// imagenInfo2Image.src = imagenInfo2;
// imagenInfo3Image.src = imagenInfo3;
// imagenInfo5Image.src = imagenInfo5;
// fotoPerfilImage.src = fotoPerfil;
// bannerPrincipal1Image.src = bannerPrincipal1;
// bannerPrincipal2Image.src = bannerPrincipal2;
// bannerPrincipal3Image.src = bannerPrincipal3;
// bannerPrincipal4Image.src = bannerPrincipal4;
// bannerPrincipal5Image.src = bannerPrincipal5;

// kandidate1Image.src = kandidate1;
// MeineDienstleistungen1Image.src = MeineDienstleistungen1;



// // Actualizar el estado con la imagen del logo
// setImagenesPreloader({ 
//   ...imagenesPreloader, 
//   imagenInfo2: imagenInfo2Image,
//   imagenInfo3: imagenInfo3Image,
//   imagenInfo5: imagenInfo5Image,
//   fotoPerfil: fotoPerfilImage,
//   bannerPrincipal1: bannerPrincipal1Image,
//   bannerPrincipal2: bannerPrincipal2Image,
//   bannerPrincipal3: bannerPrincipal3Image,
//   bannerPrincipal4: bannerPrincipal4Image,
//   bannerPrincipal5: bannerPrincipal5Image,

//   kandidate1: kandidate1Image,
//   MeineDienstleistungen1: MeineDienstleistungen1Image,
// });