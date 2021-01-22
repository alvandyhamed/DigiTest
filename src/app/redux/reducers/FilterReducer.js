import { FILTER } from '../actions/type';
const initialState = {
Filter: ""

};

const FilterReducer = (state = initialState, action) => {
    
switch(action.type) {
case FILTER:
return {
...state,
Filter:action.Filter
};
default:
return state;
}
}
export default FilterReducer;