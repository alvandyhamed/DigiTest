import { ColorPropType, Dimensions } from "react-native";
import Color from "./Color";
import Font from "./Font";
const window=Dimensions.get('window')

export default{
    marginImageStyle:{
        marginBottom:-50,
        marginTop:-20
    },
    imStyle:{
        flex:1,
        height:window.height/2,
        width:undefined
    }

}