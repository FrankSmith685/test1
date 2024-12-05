'use client'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppState = () => {
    const {
        appState,
        setImagenesPreloader,
        setVideosPreloader,
        setActiveCarga,
        setTipoIdioma
    } = useContext(AppContext);

    const {
        imagenesPreloader,
        videosPreloader,
        activeCarga,
        tipoIdioma
    } = appState;

    return {
        setImagenesPreloader,
        imagenesPreloader,
        setVideosPreloader,
        videosPreloader,
        setActiveCarga,
        activeCarga,
        setTipoIdioma,
        tipoIdioma
    };
};
