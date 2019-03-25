import { startSession, getSession, clearSession } from '../utils/session';

// Actions
export const PREFIX = 'USER';
export const REGISTER = `${PREFIX}/REGISTER`;
export const REGISTER_SUCCESS = `${PREFIX}/REGISTER_SUCCESS`;
export const REGISTER_FAIL = `${PREFIX}/REGISTER_FAIL`;
export const LOGIN = `${PREFIX}/LOGIN`;
export const LOGIN_SUCCESS = `${PREFIX}/LOGIN_SUCCESS`;
export const LOGIN_FAIL = `${PREFIX}/LOGIN_FAIL`;
export const LOGOUT = `${PREFIX}/LOGOUT`;
export const LOGOUT_SUCCESS = `${PREFIX}/LOGOUT_SUCCESS`;
export const LOGOUT_FAIL = `${PREFIX}/LOGOUT_FAIL`;
export const SESSION = `${PREFIX}/SESSION`;

const ENDPOINT = 'http://techtest.lab1886.io:3000/user';

export const initialState = {
  isFetching: false,
  isValid: false,
  isLoggedIn: false,
  canCloseForm: false,
  user: null
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        isFetching: true,
        canCloseForm: false,
        error: null
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isValid: true,
        isLoggedIn: true,
        canCloseForm: true,
        error: null,
        ...action.payload
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isValid: true,
        isLoggedIn: false,
        canCloseForm: true,
        user: null
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      // Login API returns 400 when validation fails which is unfortunate as this passes an ugly error to user
      let error =
        action.error.errmsg || action.error.message || 'Unknown error occured';

      return {
        ...state,
        isFetching: false,
        isValid: false,
        canCloseForm: false,
        error
      };

    case SESSION:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

// Action factories
export const register = (userData = {}) => dispatch => {
  fetch(`${ENDPOINT}/register`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  })
    .then(res => {
      return res.json().then(response => {
        if (res.status !== 200) {
          throw response;
        } else {
          return { response, token: res.headers.get('x-auth') };
        }
      });
    })
    .then(({ response, token }) => {
      startSession(userData.email, token);

      return dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user: response.email
        }
      });
    })
    .catch(error => {
      return dispatch({
        type: REGISTER_FAIL,
        error
      });
    });

  return dispatch({ type: REGISTER });
};

export const logIn = (userData = {}) => async dispatch => {
  fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  })
    .then(res => {
      return res.json().then(response => {
        if (res.status !== 200) {
          throw response;
        } else {
          return { response, token: res.headers.get('x-auth') };
        }
      });
    })
    .then(({ response, token }) => {
      startSession(userData.email, token);

      return dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: response.email
        }
      });
    })
    .catch(error => {
      return dispatch({
        type: LOGIN_FAIL,
        error
      });
    });

  return dispatch({ type: LOGIN });
};

export const logOut = () => async dispatch => {
  const session = getSession();

  if (!session.token) {
    dispatch({ type: LOGOUT });
    return dispatch({ type: LOGOUT_FAIL, error: 'Already logged out' });
  }

  fetch(`${ENDPOINT}/logout`, {
    method: 'DELETE',
    headers: {
      'x-auth': session.token,
      'Cache-Control': 'no-cache'
    }
  })
    .then(res => {
      clearSession();

      if (res.status !== 200) {
        throw res.statusText;
      }
    })
    .then(() => {
      return dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(error =>
      dispatch({
        type: LOGOUT_FAIL,
        error
      })
    );

  return dispatch({ type: LOGOUT });
};

export const checkSession = () => {
  const session = getSession();

  return {
    type: SESSION,
    payload: {
      isLoggedIn: session.isLoggedIn || false,
      user: session.email || null
    }
  };
};
