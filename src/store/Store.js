import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../reducers/appointment/appointmentReducer';
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  appointment: appointmentReducer
});

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;




export default configureStore({
  reducer: rootReducer,
})