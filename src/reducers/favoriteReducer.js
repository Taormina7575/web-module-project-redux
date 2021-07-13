import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from './../actions/favoriteActions'


const initialState = {
    favorites: [],
    displayFavorites: true 
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ]
            }
                
        case REMOVE_FAVORITE: 
            return {
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        case TOGGLE_FAVORITES: 
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state
    }
        
} 

export default favoriteReducer