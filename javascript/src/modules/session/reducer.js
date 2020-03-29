import { SessionActions } from './actions';

const INITIAL_STATE = {
  token: '',
  isAuthenticated: false,
};

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SessionActions.LOGIN_REQUEST: {
      return {
        ...state,
      };
    }

    case SessionActions.LOGIN_SUCCESS: {
      const { token } = action.payload;

      return {
        ...state,
        token,
        isAuthenticated: true,
      };
    }

    case SessionActions.LOGIN_FAILURE: {
      return {
        ...state,
        token: '',
        isAuthenticated: false,
      };
    }

    case SessionActions.LOGOUT: {
      return {
        ...state,
        token: '',
        isAuthenticated: false,
      };
    }

    default: {
      return state;
    }
  }
}

export default sessionReducer;
