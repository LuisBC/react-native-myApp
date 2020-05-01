import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  BracketForm,
  Animation,
  ButtonImage,
  CheckBox,
  Toast,
} from '_components';
import { instance } from '_api/axios';
import * as GoogleSignIn from '_services/GoogleSignIn';
// import * as FacebookSignIn from '_services/FacebookSignIn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Color, Global } from '_styles';
import { Animations, Images } from '_constants';
import { GoogleSignin } from '@react-native-community/google-signin';
import { connect } from 'react-redux';
import styles from './Style';
import { authSignIn, authSignOut } from '../../redux/ducks/auth';

const SignIn = (props) => {
  const [response, setResponse] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    google();
  }, []);

  const { signIn, navigation } = props;

  const google = () => {
    GoogleSignin.configure({
      webClientId:
        '737760636810-1vk44pkq0frfa2t9spgb6pbug4havjs8.apps.googleusercontent.com',
      offlineAccess: true,
    });
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await instance.post('/login', values);
      if (data.ok) {
        setResponse(data.ok);
        await AsyncStorage.setItem('userToken', data.token);
        setTimeout(() => signIn(data.token), 2000);
        Toast.show('Welcome! :)', 3000, 'success');
      }
    } catch (err) {
      if (err.response.data.ok === false) {
        Toast.show('Wrong email or password!', 3000, 'error');
      }
      setResponse(err.response.data.ok);
    }
  };

  const onSignInGoogle = async () => {
    try {
      await GoogleSignIn.signIn();
      // const { data } = await instance.post('/google', accessToken);
      // console.log({ data });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[Global.container, styles.container]}
    >
      <View style={styles.containerImage}>
        <Animation
          style={styles.animation}
          pathAnimation={Animations.LOGIN}
          autoPlay
          loop
        />
      </View>

      <View style={styles.containerForm}>
        <BracketForm onSubmit={onSubmit} dataResponse={response} />
      </View>

      <View style={styles.containerRemenberForgot}>
        <TouchableOpacity
          style={styles.touchableCheckBoxText}
          onPress={() => setChecked(!checked)}
        >
          <CheckBox color={Color.WHITE} checked={checked} />
          <Text style={styles.text}>Remenber me</Text>
        </TouchableOpacity>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Reset Password')}
        >
          Forgot password?
        </Text>
      </View>

      <View style={styles.containerSignGoogleFacebook}>
        <View style={styles.containerImageButton}>
          <ButtonImage
            colorButton={Color.GOOGLE}
            pathImage={Images.GOOGLE}
            textButton="Google"
            onPress={() => onSignInGoogle()}
          />
        </View>
        <View style={styles.containerImageButton}>
          <ButtonImage
            colorButton={Color.FACEBOOK}
            pathImage={Images.FACEBOOK}
            textButton="Facebook"
            // onPress={() => setGoogleToken(GoogleSignIn.signIn())}
          />
        </View>
      </View>

      <View style={styles.containerSignUp}>
        <Text
          style={styles.textSignUp}
          onPress={() => navigation.navigate('Sign Up')}
        >
          Sign Up
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (token) => dispatch(authSignIn(token)),
    signOut: () => dispatch(authSignOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
