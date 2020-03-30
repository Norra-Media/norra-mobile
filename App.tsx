import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from '@modules';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
