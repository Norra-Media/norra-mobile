import React from 'react';
import {AuthNavigation} from './authNavigation';
import {UserNavigation} from './userNavigation';
const isLoggedIn = true;
export const Navigation = () => {
  return <>{!isLoggedIn ? <AuthNavigation /> : <UserNavigation />}</>;
};
