import { takeEvery, put } from 'redux-saga/effects';

// Actions
import { SampleActions, sampleSuccess, sampleFailure } from './actions';

// Workers
function* sampleWorker({ payload }) {
  try {
    const { data1, data2 } = payload;

    // Do your stuff here with the paylaod data and then return a the Success Action
    // You can see a full example in session module
    const response = { data1, data2 };

    yield put(sampleSuccess(response));
  } catch (error) {
    yield put(sampleFailure(error));
  }
}

// Watchers
export function* sampleSaga() {
  yield takeEvery(SampleActions.SAMPLE_REQUEST, sampleWorker);
}
