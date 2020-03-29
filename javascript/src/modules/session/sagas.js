import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

// services
import { login } from 'modules/session/services';

// Actions
import { SessionActions, loginSuccess, loginFailure } from 'modules/session/actions';

// Workers
function* loginWorker(values) {
  try {
    const { payload } = values;
    const { email, password } = payload;

    const data = yield call(login, email, password);

    yield put(loginSuccess(data));

    yield put(push('/sample'));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logoutWorker() {
  yield put(push('/login'));
}

// Watchers
export function* sessionSaga() {
  yield takeLatest(SessionActions.LOGIN_REQUEST, loginWorker);
  yield takeLatest(SessionActions.LOGOUT, logoutWorker);
}
