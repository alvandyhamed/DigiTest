import { View } from "native-base"
import React,{ Component } from "react"
import { TouchableOpacity ,Text,Image} from "react-native"
import Style from "./Style"
import I18n from "react-native-i18n";
import Font from "../../styles/Font";
import Color from "../../styles/Color";
import { Rating } from "react-native-rating-element";
import { color } from "react-native-reanimated";
import  {getDirectorName}  from "../../utilities/GetSubstring";



export default class Category extends Component {
    constructor(props){
        super(props)
        this.state={
            isrtl:false
        }
    }
    
    render(){
        console.log("CHIBECHEI",this.props)
        return (
            <View
            style={Style.containerView}
            >
                <TouchableOpacity>
                <View>
                <View style={Style.TouchableOpacity}>
                

                        </View>
                        <Text style={Style.txtTiltle}>{I18n.t(this.props.item.name)}</Text>
                      
                        
                   
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}