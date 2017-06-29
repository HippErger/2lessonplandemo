import {combineReducers} from 'redux';
import {
  LOAD_MULTIPLE_PROFILES,
  LOAD_MULTIPLE_PROFILES_SUCCESS,
  LOAD_MULTIPLE_PROFILES_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_MULTIPLE_PROFILES:
      return true;
    case LOAD_MULTIPLE_PROFILES_SUCCESS:
    case LOAD_MULTIPLE_PROFILES_FAILURE:
      return false;
  }
  return state;
}

/* eslint-disable no-unused-vars */
// @TODO maybe need to do something with action here: + action.message
function error(state = null, action) {
  return state;
}

function items(state = [], action) {
  switch (action.type) {
    case LOAD_MULTIPLE_PROFILES_SUCCESS:
      return action.receivedData;
    case LOAD_MULTIPLE_PROFILES_FAILURE:
      return [];
  }
  return state;
}

const multipleProfilesReducer = combineReducers({
  loading,
  error,
  items
});

export default multipleProfilesReducer;
