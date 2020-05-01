// import * as Google from 'expo-google-app-auth';
// import { ANDROID_CLIENT_ID } from 'react-native-dotenv';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const res = await GoogleSignin.signIn();
    console.log(res);

    const tokens = await getTokens();
    console.log(tokens);
    // const { accessToken } = tokens;
    // const userData = { user: { ...user, accessToken } };
    // return userData;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('Google Sign In - Cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Google Sign In - In Progress');
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Google Sign In - Play Services not available');

      // play services not available or outdated
    } else {
      console.log({ error });

      // some other error happened
    }
  }
};

const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    } else {
      // some other error
    }
  }
};

const isSignedIn = async () => {
  const isSigned = await GoogleSignin.isSignedIn();
  return isSigned;
};

const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  return currentUser;
};

const getTokens = async () => {
  const tokens = await GoogleSignin.getTokens();
  return tokens;
};

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};

export {
  signIn,
  getCurrentUserInfo,
  isSignedIn,
  getCurrentUser,
  getTokens,
  signOut,
};
