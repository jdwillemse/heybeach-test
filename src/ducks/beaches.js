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
      // const beaches = [[], [], []];
      const allBeaches = state.beaches.concat(action.payload);
      // sort list so that once masonry layout is applied the order more or less reflects that of the original list
      // for (let i = 0; i < action.payload.length; i++) {
      //   beaches[i % 3].push(action.payload[i]);
      // }

      return {
        ...state,
        isFetching: false,
        isValid: true,
        currentPage: state.currentPage + 1,
        // beaches: beaches.reduce(
        //   (collection, item) => collection.concat(item),
        //   []
        // )
        beaches: allBeaches
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
