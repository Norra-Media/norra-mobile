import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '@containers';
import {NewPost} from '@containers/NewPost';

export type UserStackParamList = {
  HomePage: undefined;
  Profile: undefined;
  NewPost: undefined;
};

const UserStack = createStackNavigator<UserStackParamList>();
const UserStackScreen = () => (
  <UserStack.Navigator initialRouteName="HomePage" mode="modal">
    <UserStack.Screen
      name="HomePage"
      component={HomePage}
      options={{
        headerShown: false,
      }}
    />
    <UserStack.Screen
      name="NewPost"
      component={NewPost}
      options={{
        headerShown: false,
      }}
    />
  </UserStack.Navigator>
);

export const UserNavigation = () => <UserStackScreen />;
