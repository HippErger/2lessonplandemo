// profileReducer
import {combineReducers} from 'redux';
import profileReducer from './profileReducer';
import multipleProfilesReducer from './multipleProfilesReducer';

export default combineReducers({
  profileReducer,
  multipleProfilesReducer,

});
