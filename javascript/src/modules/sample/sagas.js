import { takeEvery, put } from 'redux-saga/effects';

// Actions
import { SampleActions, sampleSuccess, sampleFailure } from './actions';

// Workers
function* sampleWorker(values) {
  try {
    const { payload } = values;
    const { data1, data2 } = payload;

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
