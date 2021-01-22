import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';


import configureStore from './src/app/redux/store/configureStor';

const store = configureStore()
console.disableYellowBox = true;
/// Disable consol.log in production version
if(!__DEV__){
console.log=()=>{}
}
const RNRedux = () => (
  <Provider store = { store }>
    
    <App />
   
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);