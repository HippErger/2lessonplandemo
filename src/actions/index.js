/* ///////////////////////////////////////////////////////////////////////////
                        Load My Profile
/////////////////////////////////////////////////////////////////////////// */

export const LOAD_PROFILE = 'LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE';

export function loadProfile(id) {
  console.log('from actionsjs, 10', id);
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

export const LOAD_MULTIPLE_PROFILES = 'LOAD_MULTIPLE_PROFILES';
export const LOAD_MULTIPLE_PROFILES_SUCCESS = 'LOAD_MULTIPLE_PROFILES_SUCCESS';
export const LOAD_MULTIPLE_PROFILES_FAILURE = 'LOAD_MULTIPLE_PROFILES_FAILURE';

export function loadMultipleProfiles() {
  console.log('getting to actionsjs, 71');
  return dispatch => {
    dispatch({
      type: LOAD_MULTIPLE_PROFILES,
    });

    fetch('/api/teachers', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log('from actionsjs, 65', data);
      dispatch(loadMultipleProfilesSuccess(data));
    })
    .catch(err => {
      dispatch(loadMultipleProfilesFailure(err.message));
    });
  };
}

function loadMultipleProfilesSuccess(receivedData) {
  return {
    type: LOAD_MULTIPLE_PROFILES_SUCCESS,
    receivedData
  };
}

function loadMultipleProfilesFailure(errorMessage) {
  return {
    type: LOAD_MULTIPLE_PROFILES_FAILURE,
    errorMessage
  };
}
