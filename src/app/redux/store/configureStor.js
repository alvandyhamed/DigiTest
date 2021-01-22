import { createStore, combineReducers,applyMiddleware } from 'redux';

import countReducer from '../reducers/countReducer';
import TokenReducer from '../reducers/TokenReducer';
import CategoryReducer from "../reducers/CategoryReducer";
import MoviesReducer from "../reducers/MoviesReducer";
import _MoviesReducer from "../reducers/_MoviesReducer";
import AllMoviesReducer from "../reducers/AllMoveisReducer";
import VideosReducer from "../reducers/VideoReducer";
import FilterReducer from "../reducers/FilterReducer";
import logger from 'redux-logger'



const rootReducer = combineReducers(
 { count: countReducer ,
    Cats:CategoryReducer,
    Token:TokenReducer,
    Movies:MoviesReducer,
    _Movies:_MoviesReducer,
    allmoveis:AllMoviesReducer,
    Videos:VideosReducer,
    Filter:FilterReducer
}


);
const configureStore = () => {
   
return createStore(rootReducer,
    
    applyMiddleware(logger));
}
export default configureStore;