
import { View,Text, Fab, Container, Content, Icon, Button, Form } from "native-base"
import ReactNative,{AsyncStorage } from "react-native";

import React from 'react'
import Style from "./Style"
import I18n from "react-native-i18n";
import {SaveToken}  from './../../redux/actions/Token';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

 class WellcomePart extends React.Component{
    async resetKey() {
        try {
          await AsyncStorage.removeItem('Token');
          await AsyncStorage.removeItem("USerName");
          this.props.actions.SaveToken({Token:"",UserName:"",IsLogin:false})

          
         
        } catch (error) {
        
        }
      }
    render(){
        return(
            <View style={Style.viewtitleStyle}>
            <Text style={Style.texttiltleStyle}>
                {I18n.t('Wellcome')}
            </Text>
            <Text
            style={Style.fontMainStyle}
            >
                {this.props.Token.UserName}
            </Text>
            <View style={Style.buttonStyle}>
<Button  style={Style.submitButton} 

onPress={()=>{

this.resetKey()


}}

>
  <Text style={Style.submittext}>{I18n.t("Logout")}</Text>

</Button>
</View>

        </View>

        )
    }
}

  
  export default WellcomePart