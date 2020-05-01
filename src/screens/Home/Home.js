import React from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import styles from './Style';
import { authSignOut } from '../../redux/ducks/auth';

const Home = (props) => {
  const removeUserToken = async () => {
    await AsyncStorage.removeItem('userToken');
  };

  const signOut = () => {
    // removeUserToken();
    props.signOut();
  };

  return (
    <Text style={styles.text} onPress={() => signOut()}>
      HOME SCREEN
    </Text>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authSignOut()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
