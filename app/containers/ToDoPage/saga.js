import { call, put, takeLatest } from 'redux-saga/effects';
import * as constant from './constants';
import * as actions from './actions';
import * as api from '../../api/todoApi';

// Individual exports for testing
export default function* toDoPageSaga() {
  yield takeLatest(constant.FETCH_TODO, getToDosSaga);
}

export function* getToDosSaga() {
  try {
    const res = yield call(api.fetchToDoApi());
    const { data } = res;
    yield put(actions.fetchToDosSuccess(data));
  } catch (errors) {
    yield put(actions.fetchToDosFailure(errors.message));
  }
}
