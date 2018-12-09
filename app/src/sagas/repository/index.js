import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../../actions/repository';
import api from '../../api/repository';

export function* setTagsSaga(action) {
  const repository = yield call(api.update, action.data);
  yield put(actions.setTagsSuccess(repository));
}

export default [
  takeEvery(actions.SET_TAGS, setTagsSaga),
];
