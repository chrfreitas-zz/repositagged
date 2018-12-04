import {
  all, put, call, takeEvery,
} from 'redux-saga/effects';
import actions from '../actions';
import api from '../api';

export function* getRepositoriesSaga(action) {
  const repositories = yield call(api.getRepositories, action.data);
  yield put(actions.fetchRepositoriesListSuccess(repositories));
}

export function* editTagsSaga(action) {
  const repository = yield call(api.editTags, action.data);
  yield put(actions.editTagsSuccess(repository));
}

export function* takeActions() {
  yield takeEvery(actions.FETCH_REPOSITORIES_LIST, getRepositoriesSaga);
  yield takeEvery(actions.EDIT_TAGS, editTagsSaga);
}

export default function* sagas() {
  yield all([
    takeActions(),
  ]);
}
