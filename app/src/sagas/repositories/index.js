import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../../actions/repositories';
import api from '../../api/repositories';

export function* syncSaga(action) {
  const repositories = yield call(api.sync, action.data);
  yield put(actions.syncSuccess(repositories));
}

export function* searchSaga(action) {
  const repositories = yield call(api.search, action.data);
  yield put(actions.searchSuccess(repositories));
}

export default [
  takeEvery(actions.SYNC, syncSaga),
  takeEvery(actions.SEARCH, searchSaga),
];
