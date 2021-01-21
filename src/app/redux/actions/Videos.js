import {VIDEOS} from './type';
export function VideoSet(videos,next,prev) {
   
return {
type: VIDEOS,
Videos: videos,
Next:next,
Prev:prev
}
}