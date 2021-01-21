import { COUNTER_CHANGE } from './type';
export function changeCount(count) {
return {
type: COUNTER_CHANGE,
payload: count
}
}