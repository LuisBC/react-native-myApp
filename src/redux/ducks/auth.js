// ------------------------
//  Actions
// ------------------------
const RESTORE_TOKEN = 'user/RESTORE_TOKEN';
const SIGN_IN = 'user/SIGN_IN';
const SIGN_OUT = 'user/SIGN_OUT';

// ------------------------
//  Actions Creators
// ------------------------
const restoreToken = (userToken) => ({
  type: RESTORE_TOKEN,
  userToken,
});
const signIn = (userToken) => ({
  type: SIGN_IN,
  userToken,
});
const signOut = () => ({
  type: SIGN_OUT,
});

// ------------------------
//  Initial State
// ------------------------
const initialState = {
  isLoading: true,
  isSignOut: false,
  userToken: null,
};

// ------------------------
//  Reducers
// ------------------------
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.userToken,
        isLoading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignOut: true,
        userToken: null,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignOut: false,
        userToken: action.userToken,
      };
    default:
      return state;
  }
}

// ------------------------
//  Operations
// ------------------------
export const authRestoreToken = (userToken) => async (dispatch) => {
  dispatch(restoreToken(userToken));
};

export const authSignIn = (userToken) => async (dispatch) => {
  dispatch(signIn(userToken));
};

export const authSignOut = () => async (dispatch) => {
  dispatch(signOut());
};
