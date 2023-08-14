const initialState = {
    date: '',
    startTime: '',
    duration: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    description: ''
  };
  
  const appointmentReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_APPOINTMENT':
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  
  export default appointmentReducer;