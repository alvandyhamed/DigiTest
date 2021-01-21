import { ColorPropType } from "react-native";
import Color from "./../../styles/Color";
import Font from "./../../styles/Font";

export default{
texttiltleStyle:{
    fontFamily:Font.main,
    fontSize:20,
    color:Color.primarycolor
},  
viewtitleStyle:{
    justifyContent:'center',
    flex:1,
    alignItems:'center',
    marginTop:40
},

fontMainStyle:{
    fontFamily:Font.main

},
marginImageStyle:{
    marginBottom:-50,
    marginTop:-20
},
imStyle:{
    flex:1,
    height:window.height/2,
    width:undefined
},
loginBox:{
    paddingLeft:20,
    paddingRight:20,
    justifyContent:"space-between"
},
buttonStyle:{
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
},
submitButton:{
    width:'100%',
    borderRadius:25,
    backgroundColor:Color.primarycolor,
    alignSelf:'center',
    padding:20,
    flex:1,
    elevation:2
},
submittext:{
    fontSize:16,
    fontFamily:Font.main,
    color:Color.titlebar_new

}
}