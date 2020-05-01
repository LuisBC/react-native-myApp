import { combineReducers } from 'redux';
import UserReducer from './ducks/auth';

const rootReducer = combineReducers({ user: UserReducer });

export default rootReducer;
