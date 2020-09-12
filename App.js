import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux'
import Navigation from './Navigation/Navigation'
import Store from './Store/store'
//import ListImg from './Components/ListImg';

export default function App() {
  return (
     <Provider store={Store}>
      <Navigation/>
     </Provider>
    //<ListImg/>
    
  )
}