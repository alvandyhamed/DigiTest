import { View,Text, Fab, Container, Content, Icon, Button, Form } from "native-base"
import I18n,{getLanguages  } from "react-native-i18n";
import FA from "./../../dictionary/fa.json";
import EN from "../../dictionary/en.json";
import ReactNative,{Image,ScrollView,AsyncStorage } from "react-native";

import {FloatingLabelInput} from 'react-native-floating-label-input';

import React from 'react'
import Style from "./Style"
import { Colors } from "react-native/Libraries/NewAppScreen";
import Color from "../../styles/Color";
import { LoginToApp } from "./FuncLogin";
import Loader from "../../utilities/Loading/Loader";
import { connect } from 'react-redux';

 import {SaveToken}  from './../../redux/actions/Token';
import { bindActionCreators } from 'redux';
import WellcomePart from './Wellcompart'


I18n.fallbacks=true
I18n.translations={
    fa:FA,
    'en-US':EN,
    'en':EN
}

class Login extends React.Component{
    async resetKey() {
        try {
          await AsyncStorage.removeItem('Token');
          await AsyncStorage.removeItem("USerName");
          this.props.actions.SaveToken({Token:"",UserName:"",IsLogin:false})

          
         
        } catch (error) {
        
        }
      }
     
      async getKey() {
            try {
              const value = await AsyncStorage.getItem('Token');
              const User=await AsyncStorage.getItem('username');
              if (value !== null) {
               
               
               this.props.actions.SaveToken({Token:value,UserName:User,IsLogin:true})
                
              }
            } catch (error) {
              // Error retrieving data
            }
          };
          async storeData (UserName,TOken) {
            try {
                await AsyncStorage.setItem('username', UserName);

              await AsyncStorage.setItem(
               "Token",TOken
              );
            } catch (error) {
              // Error saving data
            }
          };
       
      
    
    constructor(props){
        super(props)
        this.state={
            password:'gt4043@1',
            username:'hriks',
            show:false,
            loadingPermision:false,
          
           
        }
          //This block (b.1) Part for convert to RTL and set lacale MyApllication
       //Start Block b.1
       ReactNative.I18nManager.forceRTL(true);
       I18n.defaultLocale="fa"
       I18n.locale="fa"
       //End Block b.1
       this.getKey()
      


   }
  
    render(){
        console.log("SHZAB",this.props)
     

        return(
            <Container>
                <Content>
<Loader
loading={this.state.loadingPermision}
></Loader>
            
            <View>
            {this.props.Token.IsLogin?
            <WellcomePart
            {...this.props}
            
           
            
            />
            :
               <View>
               <View style={Style.viewtitleStyle}>
                    <Text style={Style.texttiltleStyle}>
                        {I18n.t('Wellcome')}
                    </Text>
                    <Text
                    style={Style.fontMainStyle}
                    >
                        {I18n.t("whatchinyourdevice")}
                    </Text>

                </View>
                <View style={Style.marginImageStyle}>
                    <Image 
                  
                    source={require('./../../assets/img/im_login.png')}
                    resizeMode="contain"
                    >

                    </Image>

                </View>
                <View style={Style.loginBox}>
              
                <FloatingLabelInput
                labelStyles={Style.fontMainStyle}
                     label={I18n.t('UserName')}
                   
                    
                     value={this.state.username}
                     onChangeText={(username) => this.setState(
                         {
                            username

                         }
                     )}
                  
      />
                <FloatingLabelInput
                labelStyles={Style.fontMainStyle}
                     label={I18n.t('password')}
                     isPassword
                     togglePassword={this.state.show}
                     value={this.state.password}
                     onChangeText={(password) => this.setState(
                         {
                            password

                         }
                     )}
                     customShowPasswordComponent={<Icon type="Ionicons" name="eye-outline"/>}
                     customHidePasswordComponent={<Icon type="Ionicons" name="eye-off-outline"/>}
      />

     <View style={Style.buttonStyle}>
      <Button full style={Style.submitButton} 
      //TODO impliment Login
      onPress={()=>{
        LoginToApp(this,this.state.username,this.state.password)


      }}

      >
          <Text style={Style.submittext}>{I18n.t("Login")}</Text>

      </Button>
      </View>
    

                </View>
              
            </View>
          
    }
      </View>
            </Content>
            </Container>
        )

    }
}
const mapStateToProps = state => (
  
    {   
  
     
     Token:state.Token.Token,
    });
const ActionCreators = Object.assign(
    {},
    {SaveToken},
  );
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)