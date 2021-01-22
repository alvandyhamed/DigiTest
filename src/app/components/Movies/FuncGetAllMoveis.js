
import axios from "axios"
import { ToastAndroid } from "react-native";
import apis from "../../api/MyApi"
   export const GetAllMoveis=async (that,next,previous,nexts)=>{
     function getUrl(){
         /**
 * nexts contain 3 of valeus 
 * 0: Go to list as 0
 * 1:Go to next 50
 * -1:Got to the previous 50
 * 
 */
        if(nexts===0)
        return apis.getMovies;
        else if(nexts===1)
        return next
        else if(nexts===-1)
        return previous
    }
    
    
    
    
   
         await axios.get(getUrl()).then(res=>{
             
            
           
            const Movies = res.data.results;
   
            const _next=res.data.next;
            const _previous=res.data.previous;
            /// 9Set state for wallking
            that.setState({ refreshing: false,next:_next,prev:_previous,loadinspiner:false});

           /// Save to Redux 
            that.props.actions._MoviesSet(Movies)
        
          
        }).catch(err=>{
          

            that.setState({ refreshing: false,loadinspiner:false});
            ToastAndroid.show(I18n.t('Err'),ToastAndroid.SHORT)


        });
       

   
   
  
      
  
  
   }
  