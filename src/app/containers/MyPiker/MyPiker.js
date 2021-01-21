import { View } from "native-base"
import React,{ Component } from "react"
import { TouchableOpacity ,Text,Image} from "react-native"
import Style from "./Style"
import I18n from "react-native-i18n";
import Font from "../../styles/Font";
import Color from "../../styles/Color";
import { Rating } from "react-native-rating-element";
import { color } from "react-native-reanimated";
import  {getDirectorName}  from "./../../utilities/GetSubstring";



export default class Video extends Component {
    constructor(props){
        super(props)
        this.state={
            isrtl:false
        }
    }
    render(){
        return (
           <View>
               <Picker
                placeholder={this.props.placeholder}
                note
            mode="dropdown"
             
              textStyle={Style.textStyle}
              itemStyle={Style.itemStyle}
              itemTextStyle={Style.itemTextStyle}
              style={{ width: undefined }}
              selectedValue={this.props.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
           
              {this.props.Date.map((item,key)=>{
                return(<Picker.item
                  label={I18n.t(item.name)}
                  value={item.name}
                  key={item.id}
                />)
               
              })}
           
            </Picker>
           </View>
        )
    }
}