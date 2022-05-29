import React from 'react';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/Navigator'


const fonts = () => Font.loadAsync({
  'Nunito-Medium': require('./styles/fonts/Nunito-Medium.ttf'),
  'Nunito-Light':require('./styles/fonts/Nunito-Light.ttf')
});

export default function App() {

  const [font, setFont] = useState(false);

  if (font) {
    return (
      <NavigationContainer>
        <MainStackNavigator/>
      </NavigationContainer>
  );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn} />
    );
  }
  
};  
