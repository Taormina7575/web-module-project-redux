import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer'

const rootReducer = combineReducers({
    moviesCat: movieReducer,
    favoritesCat: favoriteReducer
});

export default rootReducer;