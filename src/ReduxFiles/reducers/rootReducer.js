import { combineReducers } from 'redux';
import { createUserReducer } from './createUserReducer';
import { loginUserReducer } from './loginUserReducer';

const rootReducer = combineReducers({
  newUser: createUserReducer,
  loggedInUser: loginUserReducer
});

export default rootReducer;