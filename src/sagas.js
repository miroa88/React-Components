import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_ABILITIES, fetchAbilitiesSuccess, fetchAbilitiesFailure } from './actions';

function* fetchAbilitiesSaga(action) {
  try {
    const response = yield call(fetch, `https://pokeapi.co/api/v2/pokemon/${action.payload}`);
    const data = yield response.json();
    yield put(fetchAbilitiesSuccess(data.abilities));
  } catch (error) {
    yield put(fetchAbilitiesFailure(error));
  }
}

function* abilitiesSaga() {
  yield takeLatest(FETCH_ABILITIES, fetchAbilitiesSaga);
}

export default abilitiesSaga;