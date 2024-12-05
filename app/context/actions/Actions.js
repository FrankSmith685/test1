import { types } from "../../types/Types";


export const setImagenesPreloader = (imagenesPreloader) => ({
    type:types.setImagenesPreloader,
    payload: imagenesPreloader
});

export const setVideosPreloader = (videosPreloader) => ({
    type:types.setVideosPreloader,
    payload: videosPreloader
});

export const setActiveCarga = (activeCarga) => ({
    type:types.setActiveCarga,
    payload: activeCarga
});
   
export const setTipoIdioma = (tipoIdioma) => ({
    type:types.setTipoIdioma,
    payload: tipoIdioma
});