import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../../actions/repository';
import api from '../../api';

export function* updateSaga(action) {
  const repository = yield call(api.update, action.data);
  yield put(actions.updateSuccess(repository));
}

export default [
  takeEvery(actions.UPDATE, updateSaga),
];
