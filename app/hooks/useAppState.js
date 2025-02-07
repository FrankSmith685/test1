'use client'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppState = () => {
    const {
        appState,
        setImagenesPreloader,
        setVideosPreloader,
        setActiveCarga,
        setTipoIdioma,
        setVideos,
    } = useContext(AppContext);

    const {
        imagenesPreloader,
        videosPreloader,
        activeCarga,
        tipoIdioma,
        videos
    } = appState;

    return {
        setImagenesPreloader,
        imagenesPreloader,
        setVideosPreloader,
        videosPreloader,
        setActiveCarga,
        activeCarga,
        setTipoIdioma,
        tipoIdioma,
        setVideos,
        videos
    };
};
