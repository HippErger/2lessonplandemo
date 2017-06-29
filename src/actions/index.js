/* ///////////////////////////////////////////////////////////////////////////
                        Load My Profile
/////////////////////////////////////////////////////////////////////////// */

export const LOAD_PROFILE = 'LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE';

export function loadProfile(id) {
  return dispatch => {
    dispatch({
      type: LOAD_PROFILE,
    });

    fetch('/api/teachers/' + id, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(result => {
      return result.json();
    })
    .then(data => {
      dispatch(loadProfileSuccess(data));
    })
    .catch(err => {
      dispatch(loadProfileFailure(err.message));
    });
  };
}

function loadProfileSuccess(receivedData) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    receivedData
  };
}

function loadProfileFailure(errorMessage) {
  return {
    type: LOAD_PROFILE_FAILURE,
    errorMessage
  };
}

/* ///////////////////////////////////////////////////////////////////////////
                      Load Profile for Lessons
/////////////////////////////////////////////////////////////////////////// */

export const LOAD_PROFILE_LESSON = 'LOAD_PROFILE_LESSON';
export const LOAD_PROFILE_LESSON_SUCCESS = 'LOAD_PROFILE_LESSON_SUCCESS';
export const LOAD_PROFILE_LESSON_FAILURE = 'LOAD_PROFILE_LESSON_FAILURE';

export function loadProfileForLesson(id) {
  return dispatch => {
    dispatch({
      type: LOAD_PROFILE_LESSON,
    });

    fetch('/api/teachers/' + id, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(result => {
      return result.json();
    })
    .then(data => {
      dispatch(loadProfileForLessonSuccess(data));
    })
    .catch(err => {
      dispatch(loadProfileForLessonFailure(err.message));
    });
  };
}

function loadProfileForLessonSuccess(receivedData) {
  return {
    type: LOAD_PROFILE_LESSON_SUCCESS,
    receivedData
  };
}

function loadProfileForLessonFailure(errorMessage) {
  return {
    type: LOAD_PROFILE_LESSON_FAILURE,
    errorMessage
  };
}
