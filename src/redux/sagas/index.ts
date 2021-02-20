import { fork, all } from 'redux-saga/effects';
import { watchSignInRequest } from '../sagas/auth/AuthSagas';

export function* rootSaga() {
  yield all([fork(watchSignInRequest)]);
}
