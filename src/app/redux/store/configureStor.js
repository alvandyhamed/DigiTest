import { createStore, combineReducers } from 'redux';

import countReducer from '../reducers/countReducer';
import TokenReducer from '../reducers/TokenReducer';
import CategoryReducer from "../reducers/CategoryReducer";
import MoviesReducer from "../reducers/MoviesReducer";


const rootReducer = combineReducers(
 { count: countReducer ,
    Cats:CategoryReducer,
    Token:TokenReducer,
    Movies:MoviesReducer
}


);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;