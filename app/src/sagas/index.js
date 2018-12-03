import {
  all, put, call, takeEvery,
} from 'redux-saga/effects';
import actions from '../actions';
import api from '../api';

function* getRepositoriesSaga(action) {
  const repositories = yield call(api.getRepositories, action.data);
  yield put(actions.fetchRepositoriesListSuccess(repositories));
}

function* takeActions() {
  yield takeEvery(actions.FETCH_REPOSITORIES_LIST, getRepositoriesSaga);
}

export default function* sagas() {
  yield all([
    takeActions(),
  ]);
}
