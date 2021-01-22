import axios from "axios"
import { ToastAndroid } from "react-native";
import apis from "../../api/MyApi"

/**
 * This function fro get all Movies on server 
 * 
 */
export const Getmovie=async (that,filter)=>{
  console.log("Mylink",apis.getMovies+filter)
  
  
  const res = await axios.get(apis.getMovies+filter).then(res=>{
    const Cats = res.data.results;
    that.setState({
      loadinspiner:false

    })
  
    that.props.actions.MoviesSet(Cats);
  }).catch(err=>{
    that.setState({
      loadinspiner:false

    })
    
  ToastAndroid.show(I18n.t('Err'),ToastAndroid.SHORT)
  }
  );
  

    


 }