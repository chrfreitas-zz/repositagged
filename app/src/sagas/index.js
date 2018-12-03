import {
  all, put, call, takeEvery,
} from 'redux-saga/effects';
import actions from '../actions';
import api from '../api';

export function* getRepositoriesSaga(action) {
  const repositories = yield call(api.getRepositories, action.username);
  yield put(actions.fetchRepositoriesListSuccess(repositories));
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* takeActions() {
  yield takeEvery(actions.fetchRepositoriesList, getRepositoriesSaga);
}

export default function* sagas() {
  yield all([
    getRepositoriesSaga(),
    takeActions(),
  ]);
}
