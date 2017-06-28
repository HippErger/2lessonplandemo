import {combineReducers} from 'redux';
import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return true;
    case LOAD_PROFILE_SUCCESS:
    case LOAD_PROFILE_FAILURE:
      return false;
  }
  return state;
}

/* eslint-disable no-unused-vars */
// @TODO maybe need to do something with action here: + action.message
function error(state = null, action) {
  return state;
}

function item(state = {}, action) {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return action.receivedData;
    case LOAD_PROFILE_FAILURE:
      return {};
  }
  return state;
}

const profileReducer = combineReducers({
  loading,
  error,
  item
});

export default profileReducer;
