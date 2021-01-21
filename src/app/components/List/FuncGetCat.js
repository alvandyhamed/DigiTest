import axios from "axios"
import apis from "../../api/MyApi"

/**
 * This function fro get all category on server 
 * 
 */
export const GetCatgory=(that)=>{
   return axios.get(apis.getCategory)
    .then(res => {
     
      const Cats = res.data.results;
   
      that.props.actions.CateGorySet(Cats)

   
    })
    


 }