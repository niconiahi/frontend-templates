import { all } from 'redux-saga/effects';

// Sagas
import { sampleSaga } from 'modules/sample/sagas';
import { sessionSaga } from 'modules/session/sagas';

export function* rootSaga() {
  yield all([sampleSaga(), sessionSaga()]);
}
