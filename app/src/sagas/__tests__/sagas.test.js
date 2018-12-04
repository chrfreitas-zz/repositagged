import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import actions from '../../actions';
import api from '../../api';
import sagas, { getRepositoriesSaga, takeActions } from '..';

describe('Sagas', () => {
  describe('getRepositoriesSaga', () => {
    const action = {
      data: 'username',
    };

    const gen = cloneableGenerator(getRepositoriesSaga)(action);

    it('should call api', () => {
      const callGenerator = call(api.getRepositories, 'username');
      expect(gen.next().value).toEqual(callGenerator);
    });

    it('shoudl call a success redux action', () => {
      const response = [{
        name: 'mongodb',
      }];

      const putGenerator = put(actions.fetchRepositoriesListSuccess(response));
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

  describe('sagas', () => {
    const gen = cloneableGenerator(sagas)();

    it('should call sagas to init all flux', () => {
      const allGenerator = all([
        takeActions(),
      ]);
      expect(gen.next().value).toEqual(allGenerator);
    });
  });
});
