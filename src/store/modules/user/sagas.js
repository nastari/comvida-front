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

function* resetAPI({ payload }) {
  try {
    const user = yield call(api.post, 'reset', payload);
    yield put(userActions.resetSuccess(user.data));
    history.push('/login');
  } catch (error) {
    toast.error('Algo inesperado aconteceu.');
    yield put(userActions.resetFailure(error));
    history.push('/forgot');
  }
}

export default all([
  takeLatest('@user/register_request', registerAPI),
  takeLatest('@user/update_request', updateAPI),
  takeLatest('@user/forgot_request', forgotAPI),
  takeLatest('@user/reset_request', resetAPI),
]);
