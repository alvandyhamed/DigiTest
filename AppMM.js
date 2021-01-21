import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/app/components/Login/Login";
import Home from "./src/app/components/Home/Home";
import Tab from "./src/app/components/TabBarButtom/Tabs";


const Stack = createStackNavigator();



function App() {
   
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
                  <Stack.Screen name="Tab" component={Tab} />
                 <Stack.Screen name="Home" component={Home} />

        
        <Stack.Screen name="Login" component={Login} />
       
      </Stack.Navigator>
     
     
     
    </NavigationContainer>
  );
}

export default App;