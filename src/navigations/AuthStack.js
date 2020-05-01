import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '_screens/SignIn';
import SignUp from '_screens/SignUp';
import ResetPassword from '_screens/ResetPassword';
import { Color } from '_styles';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Sign In"
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.PRIMARY,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Sign In"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
