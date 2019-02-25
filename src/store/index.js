import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { brandReducer, filterReducer } from '../reducers';

const reducers = combineReducers({
  brand: brandReducer,
  filtered: filterReducer
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
