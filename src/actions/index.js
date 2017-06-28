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
