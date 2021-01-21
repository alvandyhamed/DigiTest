import axios from "axios"
import apis from "../../api/MyApi"

/**
 * This function fro get all Movies on server 
 * 
 */
export const Getmovie=async (that,tag,search)=>{
  
  const res = await axios.get(apis.getMovies+"?tags="+tag+"&search="+search);
  const Cats = res.data.results;
  
  that.props.actions.MoviesSet(Cats);
  console.log("DARMONDARD__",search)
  console.log("DARMONDARD",Cats,tag,search)
    


 }