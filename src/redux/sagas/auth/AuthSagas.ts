// Imports: Dependencies
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import types from '../../core/actions/types/AuthActionTypes';
import AuthService from '../../../services/AuthService';
import { Alert } from 'react-native';

function* signIn(action: AuthAction) {
  try {
    const authData: IAuth = yield call(AuthService.signIn, action.payload);
    yield put({ type: types.SET_LOGIN_SUCCESS, authData });
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  } catch (e) {
    let message =
      'Não foi possível realizar o login. E-mail e/ou senha inválidas!';
    Alert.alert('Erro', message);
    yield put({ type: types.SET_LOGIN_ERROR, message });
  }
}

export function* watchSignInRequest() {
  yield takeEvery(types.LOGIN_REQUEST, signIn);
}
