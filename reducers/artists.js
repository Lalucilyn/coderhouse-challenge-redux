// Action types
export const ADD_ARTISTS_TYPE = 'ADD_ARTISTS'
export const UPDATE_FAVORITES = 'UPDATE_FAVORITES'
// Initial state
const initialState = {
  artistas: [],
  favoritos: [], 
}

//  Reducer
const artistsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Este reducer estaba en el ejemplo, no me queda claro qué función cumple
    case ADD_ARTISTS_TYPE:
      return {
        ...state,
        artistas: action.payload.artists,
      }
    case UPDATE_FAVORITES:
      return {
        ...state,
        favoritos: action.payload.favorites
      }
    default:
      return state
  }
}

export default artistsReducer
