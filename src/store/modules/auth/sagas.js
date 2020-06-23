import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as authActions from './actions';
import history from '../../../services/history';

function* login({ payload }) {
  try {
    const session = yield call(api.post, 'session', payload);

    yield put(authActions.loginSuccess(session.data));
    // history.push('/main');
  } catch (error) {
    toast.error('Verifique seus dados.');
    yield put(authActions.loginFailure(error));
  }
}

function signOut() {
  history.push('/');
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/login_request', login),
  takeLatest('@auth/sign_out', signOut),
]);
