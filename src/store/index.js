import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { brandReducer } from '../reducers';

const reducers = combineReducers({
  brand: brandReducer
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
