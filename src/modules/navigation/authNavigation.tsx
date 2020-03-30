import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Registration} from '@containers';
import {LOGINTYPES} from '../constants';

export type RootStackParamList = {
  Login: undefined;
  Registration: {
    name: string | null;
    email: string | null;
    photo: string | null;
    id: string | null;
    loginType: LOGINTYPES;
  };
};

const AuthenticationStack = createStackNavigator<RootStackParamList>();
const AuthenticationStackScreen = () => (
  <AuthenticationStack.Navigator initialRouteName="Login">
    <AuthenticationStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <AuthenticationStack.Screen
      name="Registration"
      component={Registration}
      initialParams={{email: ''}}
      options={{
        headerShown: false,
      }}
    />
  </AuthenticationStack.Navigator>
);

export const AuthNavigation = () => <AuthenticationStackScreen />;
