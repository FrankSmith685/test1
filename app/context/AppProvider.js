'use client'

import { useReducer, useRef } from "react";
import { AppContext } from "./AppContext";
import { AppReducer } from "./AppReducer";
import * as actions from "../context/actions/Actions";

const INITIAL_STATE = {
    imagenesPreloader:{},
    videosPreloader:{},
    activeCarga:false,
    tipoIdioma:'de',
    videos:{}
};

export const AppProvider = ({ children }) => {
    
    const setImagenesPreloader = (value) => {
        dispatch(actions.setImagenesPreloader(value));
    } 

    const setVideosPreloader = (value) => {
        dispatch(actions.setVideosPreloader(value));
    } 

    const setActiveCarga = (value) => {
        dispatch(actions.setActiveCarga(value));
    } 

    const setTipoIdioma = (value) => {
        dispatch(actions.setTipoIdioma(value));
    }

    const setVideos = (value) => {
        dispatch(actions.setVideos(value));
    }

    const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    const imagenRef = useRef({});
    const videoRef = useRef({});

    return (
        <AppContext.Provider
            value={{
                appState,
                setImagenesPreloader,
                setVideosPreloader,
                setActiveCarga,
                setTipoIdioma,
                imagenRef,
                videoRef,
                setVideos,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
