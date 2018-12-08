import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import actions from '../../../actions/repositories';
import api from '../../../api/repositories';
import { syncSaga, searchSaga } from '..';

describe('Sagas', () => {
  describe('syncSaga', () => {
    const action = {
      data: 'username',
    };

    const gen = cloneableGenerator(syncSaga)(action);

    it('should call api', () => {
      const callGenerator = call(api.sync, 'username');
      expect(gen.next().value).toEqual(callGenerator);
    });

    it('shoudl call a success redux action', () => {
      const response = [{
        name: 'mongodb',
      }];

      const putGenerator = put(actions.syncSuccess(response));
      expect(gen.next(response).value).toEqual(putGenerator);
    });
  });

  describe('searchSaga', () => {
    const action = {
      data: {
        query: 'javascript',
      },
    };

    const gen = cloneableGenerator(searchSaga)(action);

    it('should call api', () => {
      const callGenerator = call(api.search, action.data);
      expect(gen.next().value).toEqual(callGenerator);
    });

    it('shoudl call a success redux action', () => {
      const response = [{
        name: 'mongodb',
      }];

      const putGenerator = put(actions.searchSuccess(response));
      expect(gen.next(response).value).toEqual(putGenerator);
    });
  });
});
