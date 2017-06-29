// profileReducer
import {combineReducers} from 'redux';
import profileReducer from './profileReducer';
import profileLessonReducer from './profileLessonReducer';

export default combineReducers({
  profileReducer,
  profileLessonReducer,

});
