import { combineReducers } from 'redux';
import abilitiesReducer from './reducer';
import appointmentReducer from './reducers/appointment/appointmentReducer';

const rootReducer = combineReducers({
  abilities: abilitiesReducer,
  appointment: appointmentReducer,
  // other reducers...
});

export default rootReducer;


