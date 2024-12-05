import { types } from "../types/Types";

export const AppReducer = (state = {}, action) => {
  switch (action.type) {
    
        case types.setImagenesPreloader:
            return{
            ...state,
            imagenesPreloader:action.payload
            }
        case types.setVideosPreloader:
                return{
                  ...state,
                  videosPreloader:action.payload
                }
        case types.setActiveCarga:
            return{
            ...state,
            activeCarga:action.payload
            }
        case types.setTipoIdioma:
          return{
          ...state,
          tipoIdioma:action.payload
          }
        default:
            return state;
    }
};
