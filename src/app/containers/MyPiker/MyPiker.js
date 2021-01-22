import { View ,Picker} from "native-base"
import React,{ Component } from "react"
import { Text} from "react-native"
import Style from "./Style"
import I18n from "react-native-i18n";




export default class MyPiker extends Component {
    constructor(props){
        super(props)
        this.state={
            isrtl:false
        }
    }
    render(){
        console.log("LLL",this.props.Date)
        return (
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={Style.styleTitr}>{this.props.titr}</Text>
               <Picker
                placeholder={this.props.placeholder}
                note
            mode="dropdown"
             
              textStyle={Style.textStyle}
              itemStyle={Style.itemStyle}
              itemTextStyle={Style.itemTextStyle}
              style={{ width: undefined }}
              selectedValue={this.props.selectedValue}
              onValueChange={this.props.onValueChange}
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