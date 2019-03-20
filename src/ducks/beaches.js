// Actions
export const PREFIX = 'BEACHES';
export const REQUEST = `${PREFIX}/REQUEST`;
export const SUCCESS = `${PREFIX}/SUCCESS`;
export const FAILURE = `${PREFIX}/FAILURE`;

const ENDPOINT = 'http://techtest.lab1886.io:3000/beaches?page=0';

export const initialState = {
  isFetching: false,
  isValid: false,
  beaches: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        isValid: true,
        beaches: action.payload
      };

    case FAILURE:
      return {
        ...state,
        isFetching: false,
        isValid: false
      };

    default:
      return state;
  }
};

// Action factories
export const fetchList = () => {
  const promise = fetch(ENDPOINT).then(response => response.json());

  return {
    types: [REQUEST, SUCCESS, FAILURE],
    promise
  };
};
