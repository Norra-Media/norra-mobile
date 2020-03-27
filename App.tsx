import React from 'react';
import {StatusBar} from 'react-native';
import Home from '@containers/UserRegistration/home';
import {Registration} from '@containers/UserRegistration/registration';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Home /> */}
      <Registration />
    </>
  );
};

export default App;
