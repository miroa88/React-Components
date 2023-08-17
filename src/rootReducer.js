import { combineReducers } from 'redux';
import abilitiesReducer from './reducer';

const rootReducer = combineReducers({
  abilities: abilitiesReducer,
  // other reducers...
});

export default rootReducer;