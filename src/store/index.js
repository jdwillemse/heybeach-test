import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import beaches from '../ducks/beaches';
import user from '../ducks/user';

const reducers = combineReducers({
  beaches,
  user
});

/**
 * Middleware for reducing boilerplate when using async actions
 * github.com/reactjs/redux/issues/99#issuecomment-112212639
 * @return {undefined}
 */
const promiseMiddleware = () => next => action => {
  const { promise, types, ...rest } = action;
  if (!promise) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILURE] = types;
  next({ ...rest, type: REQUEST });
  return promise.then(
    payload => next({ ...rest, payload, type: SUCCESS }),
    error => next({ ...rest, error, type: FAILURE })
  );
};

const middlewares = [thunk, promiseMiddleware];

export default createStore(reducers, compose(applyMiddleware(...middlewares)));
