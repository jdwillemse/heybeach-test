import { REGISTER, REGISTER_SUCCESS, LOGIN, LOGIN_SUCCESS } from './user';

// Actions
export const PREFIX = 'FORM';
export const OPEN = `${PREFIX}/OPEN`;

export const initialState = {
  isFormOpen: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isFormOpen: true,
        ...action.payload
      };

    case REGISTER:
    case LOGIN:
      return {
        ...state,
        isFormOpen: true
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFormOpen: false
      };

    default:
      return state;
  }
};

// Action factories
export const openForm = submitAction => {
  return {
    type: OPEN,
    payload: { submitAction }
  };
};
