import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from "native-base"
import Login from "./src/app/components/Login/Login";
import Home from "./src/app/components/Home/Home";
import ReactNative from "react-native";
import I18n,{getLanguages  } from "react-native-i18n";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
           
            <Icon type="Ionicons" name="eye-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Icon type="Ionicons" name="eye-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon type="Ionicons" name="eye-outline" color={color} size={size}/>
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