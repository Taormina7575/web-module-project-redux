import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            const target = parseInt(action.payload)
            return {
                ...state,
                movies: state.movies.filter(item=>(target !== item.id))
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [
                    ...state.movies,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default reducer;