import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import websocket from '@giantmachines/redux-websocket';
import middleware from './middleware';

const middlewareList = [
  websocket,
  middleware.websocketMessage
];

// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList)
);
  
export default store;

