import { createStore, combineReducers,applyMiddleware } from 'redux';

import TokenReducer from '../reducers/TokenReducer';
import CategoryReducer from "../reducers/CategoryReducer";
import MoviesReducer from "../reducers/MoviesReducer";
import _MoviesReducer from "../reducers/_MoviesReducer";

import FilterReducer from "../reducers/FilterReducer";
import logger from 'redux-logger'



const rootReducer = combineReducers(
 {
    Cats:CategoryReducer,
    Token:TokenReducer,
    Movies:MoviesReducer,
    _Movies:_MoviesReducer,
    Filter:FilterReducer
}


);
const configureStore = () => {
   
return createStore(rootReducer
    //Disable Redux Logger
    //,applyMiddleware(logger)
    );
}
export default configureStore;