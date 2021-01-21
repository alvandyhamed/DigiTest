// /**
//  * This class for managment tabbotton on main screen 
//  * **/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text, Fab, Container, Content, Icon, Button } from "native-base"
import Home from './../Home/Home';
import Movies from './../Movies/Movies';
import List from './../List/List';

import React from 'react';

const Tab = createBottomTabNavigator();


 export default(MainScreenNavigator=createBottomTabNavigator(
     /**
      * This part for define all of screen on MainScreen
      * **/
    { 
        Home:{screen:Home},
        Movies:{screen:Movies},
        List:{screen:List}

    },
    {
        tabBarOptions:{
            activeTintColor:'red',
            inactiveTintColor:'blue',
        },
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        lazy: false,
        tabBarComponent: props => {
            return (

                <Footer>
                    <FooterTab style={Styles.tabs}>
                        <Button
                            vertical
                            full
                            style={Styles.tabs}
                            active={props.navigationState.index === 0}
                            onPress={() => {
                                
                                props.navigation.navigate("Home")}

                            }>
                               
                            <Icon type="Ionicons" name="eye-outline" size={18} style={{color:props.navigationState.index === 0?Color.selecttabicon:Color.tabicon}}/>
                            <Text style={{color:props.navigationState.index === 0?Color.selecttabicon:Color.tabicon
                                ,fontFamily:Font.main,fontSize:10,paddingTop:3}}>{I18n.t('Home')}</Text>
                        </Button>
                        <Button
                            vertical
                            full
                            style={Styles.tabs}
                            active={props.navigationState.index === 1}
                           
                            onPress={() => {
                              
                                onpress(props)
                            }

                            }>

                                 <Icon type="Ionicons" name="eye-outline"
                                  size={18}size={18}
                                    style={{color:props.navigationState.index === 1?Color.selecttabicon:Color.tabicon}}
                                 />
                            <Text style={{color:props.navigationState.index === 1?Color.selecttabicon:Color.tabicon
                                ,fontFamily:Font.main,fontSize:10,paddingTop:3}}>{I18n.t('MoviesCategory')}</Text>
                        </Button>

                        <Button
                            vertical
                            full
                            style={{backgroundColor:Color.primaryLightColor}}
                            active={props.navigationState.index === 2}
                            onPress={() => {
                              
                            props.navigation.navigate("Movies")
                              
                            }

                            }>
                             <Icon type="Ionicons" name="eye-outline"
                                    style={{color:props.navigationState.index === 2?Color.selecttabicon:Color.tabicon}}
                            />
                            <Text style={{color:props.navigationState.index === 2?Color.selecttabicon:Color.tabicon
                                ,fontFamily:Font.main,fontSize:10,paddingTop:3}}>{I18n.t('List')}</Text>
                        </Button>
                        <Button

                            vertical
                            full
                            style={{backgroundColor:Color.primaryLightColor}}
                            active={props.navigationState.index === 3}
                            onPress={() => {
                                console.log("me page",props.navigationState.index)
                                props.navigation.navigate("List")
                            }
                            }>
                            <Icon type="Ionicons" name="eye-outline" size={18}
                                   style={{color:props.navigationState.index === 3?Color.selecttabicon:Color.tabicon}}
                            />
                            <Text style={{color:props.navigationState.index === 3?Color.selecttabicon:Color.tabicon
                                ,fontFamily:Font.main,fontSize:10,paddingTop:3}}>{I18n.t('Me')}</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }

 ))