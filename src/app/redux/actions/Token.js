import {TOKEN_SAVE} from './type';
export function SaveToken(Token) {
return {
type: TOKEN_SAVE,
Token: Token
}
}