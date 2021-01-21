import { _MOVIES } from '../actions/type';
const initialState = {
_Movies: ""

};

const _MoviesReducer = (state = initialState, action) => {
    
switch(action.type) {
case _MOVIES:
return {
...state,
_Movies:action._Movies
};
default:
return state;
}
}
export default _MoviesReducer;