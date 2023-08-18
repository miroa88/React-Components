export const FETCH_ABILITIES = 'FETCH_ABILITIES';
export const FETCH_ABILITIES_SUCCESS = 'FETCH_ABILITIES_SUCCESS';
export const FETCH_ABILITIES_FAILURE = 'FETCH_ABILITIES_FAILURE';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';

export const fetchAbilities = (pokemonId) => ({
  type: FETCH_ABILITIES,
  payload: pokemonId,
});

export const fetchAbilitiesSuccess = (abilities) => ({
  type: FETCH_ABILITIES_SUCCESS,
  payload: abilities,
});

export const fetchAbilitiesFailure = (error) => ({
  type: FETCH_ABILITIES_FAILURE,
  payload: error,
});
