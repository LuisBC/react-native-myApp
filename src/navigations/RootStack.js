import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Splash } from '_components';
import { authRestoreToken } from '../redux/ducks/auth';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const RootStack = (props) => {
  const { restoreToken, user } = props;

  useEffect(() => {
    const getToken = () => {
      setTimeout(async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        restoreToken(userToken);
      }, 4000);
    };
    getToken();
  }, []);

  if (user.isLoading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator initialRouteName="AuthStack" headerMode="none">
      {user.userToken == null ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen name="MainStack" component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    restoreToken: (token) => dispatch(authRestoreToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootStack);
