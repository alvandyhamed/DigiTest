import { TOKEN_SAVE } from '../actions/type';
const initialState = {
Token: 0
};
const TokenReducer = (state = initialState, action) => {
switch(action.type) {
case TOKEN_SAVE:
return {
...state,
count:action.Token
};
default:
return state;
}
}
export default TokenReducer;