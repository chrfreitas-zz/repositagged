import {
  all, put, call, takeEvery,
} from 'redux-saga/effects';
import actions from '../actions';
import api from '../api';

export function* getRepositoriesSaga(action) {
  const repositories = yield call(api.getRepositories, action.data);
  yield put(actions.fetchRepositoriesListSuccess(repositories));
}

export function* updateSaga(action) {
  const repository = yield call(api.update, action.data);
  yield put(actions.updateSuccess(repository));
}

export function* takeActions() {
  yield takeEvery(actions.FETCH_REPOSITORIES_LIST, getRepositoriesSaga);
  yield takeEvery(actions.UPDATE, updateSaga);
}

export default function* sagas() {
  yield all([
    takeActions(),
  ]);
}
