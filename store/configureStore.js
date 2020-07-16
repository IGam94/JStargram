import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const configuereStore = () => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer,enhancer);
  return store
}

const wrapper = createWrapper(configuereStore, {debug:process.env.NODE_ENV === 'development'});

export default wrapper;