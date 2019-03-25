// Actions
export const PREFIX = 'BEACHES';
export const REQUEST = `${PREFIX}/REQUEST`;
export const SUCCESS = `${PREFIX}/SUCCESS`;
export const FAILURE = `${PREFIX}/FAILURE`;

const ENDPOINT = 'http://techtest.lab1886.io:3000/beaches?page=';

export const initialState = {
  currentPage: 0,
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
      const beaches = state.beaches.concat(action.payload);

      return {
        ...state,
        isFetching: false,
        isValid: true,
        currentPage: state.currentPage + 1,
        beaches
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
export const fetchList = () => (dispatch, getState) => {
  const { isFetching, currentPage } = getState().beaches;
  const nextPage = currentPage + 1;
  const promise = fetch(`${ENDPOINT}${nextPage}`).then(response =>
    response.json()
  );

  if (isFetching) {
    return null;
  }

  return dispatch({
    types: [REQUEST, SUCCESS, FAILURE],
    promise
  });
};
