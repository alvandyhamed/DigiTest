import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from "native-base"
import Login from "./src/app/components/Login/Login";
import Home from "./src/app/components/Home/Home";
import List from "./src/app/components/List/List";
import Movies from "./src/app/components/Movies/Movies";
import ReactNative from "react-native";
import I18n,{getLanguages  } from "react-native-i18n";



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
           
            <Icon type="Ionicons" name="home-outline" color={color} size={size}/>
          ),
        }}
      />
       <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: 'Films',
          tabBarIcon: ({ color, size }) => (
            <Icon type="Ionicons" name="film-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={List}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <Icon type="Ionicons" name="grid-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon type="Ionicons" name="person-outline" color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
    //This block (b.1) Part for convert to RTL and set lacale MyApllication
       //Start Block b.1
       ReactNative.I18nManager.forceRTL(true);
       I18n.defaultLocale="fa"
       I18n.locale="fa"
       //End Block b.1
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}