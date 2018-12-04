import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import actions from '../../actions';
import api from '../../api';
import { getRepositoriesSaga } from '..';

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
});
