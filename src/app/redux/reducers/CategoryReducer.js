import { CATEGORYSET } from '../actions/type';
const initialState = {
Cats: ""

};

const CategoryReducer = (state = initialState, action) => {
    
switch(action.type) {
case CATEGORYSET:
return {
...state,
Cats:action.Cats
};
default:
return state;
}
}
export default CategoryReducer;