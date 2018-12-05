import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import actions from '../../../actions/repository';
import api from '../../../api';
import { updateSaga, takeActions } from '..';

describe('Sagas', () => {
  describe('updateSaga', () => {
    const action = {
      data: 'ruby',
    };

    const gen = cloneableGenerator(updateSaga)(action);

    it('should call api', () => {
      const callGenerator = call(api.update, action.data);
      expect(gen.next().value).toEqual(callGenerator);
    });

    it('shoudl call a success redux action', () => {
      const response = {
        name: 'mongodb',
        tags: action.data,
      };

      const putGenerator = put(actions.updateSuccess(response));
      expect(gen.next(response).value).toEqual(putGenerator);
    });
  });

  describe('takeActions', () => {
    const gen = cloneableGenerator(takeActions)();

    it('should call takeEvery with some actions', () => {
      const takeGenerator = takeEvery(actions.FETCH_REPOSITORIES_LIST, getRepositoriesSaga);
      expect(gen.next().value).toEqual(takeGenerator);
    });
  });
});
