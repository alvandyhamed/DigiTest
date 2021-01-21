import { ALLMOVEIS } from '../actions/type';
const initialState = {
    allmovies: ""


};

const AllMoviesReducer = (state = initialState, action) => {
    console.log("STRING@@@",action)
    const obj={
        ...state,
allmovies:action.allmovies
    }
   
    
switch(action.type) {
case ALLMOVEIS:
return {
...state,
allmovies:action.allmovies
};
default:
return state;
}
}
export default AllMoviesReducer;