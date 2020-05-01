import React from 'react';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '_navigations/RootStack';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Root>
    </Provider>
  );
};

export default App;
