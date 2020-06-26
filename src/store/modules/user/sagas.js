import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as userActions from './actions';
import history from '../../../services/history';

function* registerAPI({ payload }) {
  try {
    const user = yield call(api.post, 'user', payload);

    yield put(userActions.registerSuccess(user.data));
  } catch (error) {
    toast.error('Falha ao registrar');
    yield put(userActions.registerFailure(error));
  }
}

function* updateAPI({ payload }) {
  try {
    const user = yield call(api.put, 'user', payload);
    yield put(userActions.updateSuccess(user.data));
    toast.success('Atualização realizada com sucesso!');
  } catch (error) {
    toast.error('Algo inesperado aconteceu.');
    yield put(userActions.updateFailure(error));
  }
}

function* forgotAPI({ payload }) {
  try {
    const user = yield call(api.post, 'forgot', payload);
    toast.success('Verifique seu email.');
    yield put(userActions.forgotSuccess(user.data));
  } catch (error) {
    toast.error('Email não encontrado.');
    yield put(userActions.forgotFailure(error));
  }
}

async function resetPass({ password, key }) {
  const response = await api.post(`/reset/${key}`, { password });
  console.log(response);
  return response;
}

function* resetAPI({ payload }) {
  try {
    const response = yield call(resetPass, payload);
    const resp = response.data;
    toast.success('Senha mudada com sucesso!');
    yield put(userActions.resetSuccess(resp));
    history.push('/login');
  } catch (error) {
    console.log(error);
    toast.error('Algo inesperado aconteceu!.');
    yield put(userActions.resetFailure(error));
    history.push('/forgot');
  }
}

function* deleteAPI() {
  try {
    const resolve = yield call(api.delete, 'user');
    yield put(userActions.deleteSuccess(resolve.data));
    history.push('/');
  } catch (error) {
    toast.error('Algo inesperado aconteceu.');
    yield put(userActions.deleteFailure(error));
  }
}

export default all([
  takeLatest('@user/register_request', registerAPI),
  takeLatest('@user/update_request', updateAPI),
  takeLatest('@user/forgot_request', forgotAPI),
  takeLatest('@user/reset_request', resetAPI),
  takeLatest('@user/delete_request', deleteAPI),
]);
