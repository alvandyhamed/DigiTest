import { MOVIES } from '../actions/type';
const initialState = {
Movies: ""

};

const MoviesReducer = (state = initialState, action) => {
    
switch(action.type) {
case MOVIES:
return {
...state,
Movies:action.Movies
};
default:
return state;
}
}
export default MoviesReducer;