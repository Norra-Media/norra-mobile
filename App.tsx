import React from 'react';
import {StatusBar} from 'react-native';
import Home from 'containers/UserRegistration/home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>
  );
};

export default App;
