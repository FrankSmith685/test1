// import { useEffect } from "react";
// import { useAppState } from "./useAppState";

// const bannerVideoUrl = new URL("/videos/banner.mp4", import.meta.url).href;

// export default function InitVideos() {
//   const { videos, setVideos } = useAppState();

//   useEffect(() => {
//     const videosToLoad = [
//       { name: "banner", src: bannerVideoUrl },
//     ];

//     videosToLoad.forEach(({ name, src }) => {
//       if (!videos[name]) {
//         const video = document.createElement("video");
//         video.src = src;
//         video.preload = "auto";
//         video.load();
//         setVideos({ ...videos, [name]: video });
//       }
//     });
//   }, [Object.values(videos).length]);

//   return null;
// }


import { useEffect } from "react";
import { useAppState } from "./useAppState";

const bannerVideoUrl = "/videos/banner.mp4"; // ✅ Usa la ruta relativa desde `public/`

export default function InitVideos() {
  const { videos, setVideos } = useAppState();

  useEffect(() => {
    const videosToLoad = [{ name: "banner", src: bannerVideoUrl }];

    videosToLoad.forEach(({ name, src }) => {
      if (!videos[name]) {
        const video = document.createElement("video");
        video.src = src;
        video.preload = "auto";
        video.load();
        setVideos((prev) => ({ ...prev, [name]: video })); // ✅ Corrige la actualización del estado
      }
    });
  }, [Object.keys(videos).length]); // ✅ Corrige la dependencia del `useEffect`

  return null;
}
