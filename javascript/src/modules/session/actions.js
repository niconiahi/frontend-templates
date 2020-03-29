/* Actions types */
export const SessionActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

/* Action creators */
export const loginRequest = (email, password) => ({
  type: SessionActions.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = (response) => ({
  type: SessionActions.LOGIN_SUCCESS,
  payload: response,
});

export const loginFailure = (response) => ({
  type: SessionActions.LOGIN_FAILURE,
  payload: response,
});

export const logout = () => ({
  type: SessionActions.LOGOUT,
  payload: {},
});
