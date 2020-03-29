import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '@containers';

export type UserStackParamList = {
  HomePage: undefined;
  Profile: undefined;
};

const UserStack = createStackNavigator<UserStackParamList>();
const UserStackScreen = () => (
  <UserStack.Navigator initialRouteName="HomePage">
    <UserStack.Screen
      name="HomePage"
      component={HomePage}
      options={{
        headerShown: false,
      }}
    />
  </UserStack.Navigator>
);

export const UserNavigation = () => <UserStackScreen />;
