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
      console.log("AVAZ",that.props)
      that.props.actions.CateGorySet(Cats)

    //   console.log("AVAZ",res)
    })
    
//     return axios.get(apis.getCategory).then((Response)=>{
//         console.log("AVAZ",Response)
//         return Response

//     }).catch(err=>{

//     }).then((responseJson)=>{
//         console.log("AVAZ",responseJson)


//     }).catch((err=>{

//     }))

 }