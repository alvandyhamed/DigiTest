/// This is a function for connecting Login API.

import axios from "axios"
import { ToastAndroid } from "react-native"
import apis from "../../api/MyApi"
import I18n from "react-native-i18n";
import { isEmpty } from "../../utilities/isEmpty";
function checkfildes(UserName,Password)
{
    
   if(isEmpty(UserName)||isEmpty(Password)){
       ToastAndroid.show(I18n.t('fillfildError'),ToastAndroid.SHORT)
       return false
      
   }
   return true
   
}

export const LoginToApp=(that,UserName,Password)=>{
    if(checkfildes(UserName,Password)){
        that.setState({
            loadingPermision:true
        })
        let data=JSON.stringify({
            "username":UserName,
            "password":Password
        })
        return axios.post(apis.auth_token,data,{
            headers:{
                'Authorization':'Token 9ac6bbae1feb706420ed525a18d54a96e739ea06',
                'Content-Type':'application/json'
    
    
            },
    
        }).then((Response)=>{
           
    
    
            return Response
        }
       
        ).catch((err=>{
            that.setState({
                loadingPermision:false
            })
           
        }))
        .then((resonsejson)=>{
           
            if(resonsejson){
                that.setState({
                    loadingPermision:false
                })
             
                if(resonsejson.status===200){
                    that.props.actions.SaveToken({Token:resonsejson.data.token,UserName:UserName,IsLogin:true})
                    that.storeData(UserName,resonsejson.data.token)

                }else{
                    ToastAndroid.show(I18n.t("LoginError"),ToastAndroid.SHORT)
                }
               
    
            }else{
                ToastAndroid.show(I18n.t("LoginError"),ToastAndroid.SHORT)
                that.setState({
                    loadingPermision:false
                })
            }
           
        }).catch(err=>{
            that.setState({
                loadingPermision:false
            })
         
            ToastAndroid.show(I18n.t("unexpectederror"),ToastAndroid.SHORT)
            
        })
    }
   
    

}