import { takeLatest, call, put } from 'redux-saga/effects';
import { message } from 'antd';
import * as constants from './constants';
import * as actions from './actions';
import * as api from '../../api/usersApi';

export function* getUsersSaga() {
  try {
    const res = yield call(api.fetchUsersApi);
    const { data } = res;
    yield put(actions.fetchUsersSuccess(data));
  } catch (errors) {
    message.error(errors.message);
    yield put(actions.fetchUsersFailure(errors.message));
  }
}

export default function* usersPageSaga() {
  yield takeLatest(constants.FETCH_USERS, getUsersSaga);
}
