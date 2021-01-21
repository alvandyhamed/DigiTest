import { VIDEOS } from '../actions/type';
const initialState = {
Videos: "",
Next:"",
Prev:""

};

const VideosReducer = (state = initialState, action) => {
    console.log("ANNNN",action)
    
switch(action.type) {
case VIDEOS:
return {
...state,
Videos:action.Videos,
Next:action.Next,
Prev:action.Prev
};
default:
return state;
}
}
export default VideosReducer;