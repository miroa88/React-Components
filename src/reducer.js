import { FETCH_ABILITIES_SUCCESS, FETCH_ABILITIES_FAILURE } from './actions';

const initialState = {
  abilities: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ABILITIES_SUCCESS:
      return { ...state, abilities: action.payload, error: null };
    case FETCH_ABILITIES_FAILURE:
      return { ...state, abilities: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;