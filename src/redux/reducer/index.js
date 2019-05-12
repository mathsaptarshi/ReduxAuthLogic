import { combineReducers } from 'redux';
import * as appReducers from './appReducers/appReducers';
import * as authReducers from './appReducers/authReducers';
import { reducer as formReducer } from 'redux-form'
const formReducers = {
  form: formReducer
}
const appReducer = combineReducers(Object.assign({},
  appReducers,
  authReducers,
  formReducers));
export default appReducer;
