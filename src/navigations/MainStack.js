import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '_screens/Home';
import Profile from '_screens/Profile';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainStack;
