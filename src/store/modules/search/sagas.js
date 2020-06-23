import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as searchActions from './actions';

const whats = 'https://wa.me/';

function index({ uf, city }) {
  if (uf !== '0' && city !== '0') {
    return api.get(`/users/?uf=${uf}&city=${city}`);
  }
  if (uf !== '0' && city === '0') {
    return api.get(`/users/?uf=${uf}`);
  }
  if (uf === '0' && city !== '0') {
    return api.get(`/users/?city=${city}`);
  }
}

function* indexAPI({ payload }) {
  try {
    console.log(payload);
    const resolve = yield call(index, payload);

    const users = resolve.data.map((user) => {
      user.contact = whats + user.whatsapp;
      return user;
    });
    yield put(searchActions.indexSuccess(users));
  } catch (error) {
    toast.error('Falha ao exibir, tente novamente.');
    yield put(searchActions.indexFailure(error));
  }
}

function indexPage({ page, uf, city }) {
  if (uf !== '0' && city !== '0') {
    return api.get(`/users/?page=${page}&uf=${uf}&city=${city}`);
  }
  if (uf !== '0' && city === '0') {
    return api.get(`/users/?page=${page}&uf=${uf}`);
  }
  if (uf === '0' && city !== '0') {
    return api.get(`/users/?page=${page}&city=${city}`);
  }
}

function* indexPageAPI({ payload }) {
  try {
    const resolve = yield call(indexPage, payload);
    const users = resolve.data.map((user) => {
      user.contact = whats + user.whatsapp;
      return user;
    });
    yield put(searchActions.indexSuccess(users));
  } catch (error) {
    toast.error('Falha ao exibir, tente novamente.');
    yield put(searchActions.indexFailure(error));
  }
}

export default all([
  takeLatest('@search/index_request', indexAPI),
  takeLatest('@search/index_page_request', indexPageAPI),
]);
