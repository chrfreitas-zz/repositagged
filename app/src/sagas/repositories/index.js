import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../../actions/repositories';
import api from '../../api';

export function* getRepositoriesSaga(action) {
  const repositories = yield call(api.getRepositories, action.data);
  yield put(actions.fetchRepositoriesListSuccess(repositories));
}

export default [
  takeEvery(actions.FETCH_REPOSITORIES_LIST, getRepositoriesSaga),
];
