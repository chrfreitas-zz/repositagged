import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../../actions/repository';
import api from '../../api/repository';

export function* setTagsSaga(action) {
  let repository = {};

  if (action.data.tagged) {
    repository = yield call(api.update, action.data);
  } else {
    repository = yield call(api.create, { ...action.data, tagged: true });
  }

  yield put(actions.setTagsSuccess(repository));
}

export default [
  takeEvery(actions.SET_TAGS, setTagsSaga),
];
