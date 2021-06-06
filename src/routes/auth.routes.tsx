import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';

import SignIn from '../screens/SignIn';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SignIn"
  >
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;
