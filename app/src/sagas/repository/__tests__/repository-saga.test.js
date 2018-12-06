import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import actions from '../../../actions/repository';
import api from '../../../api/repository';
import { setTagsSaga } from '..';

describe('Sagas', () => {
  describe('setTagsSaga', () => {
    const action = {
      data: 'ruby',
    };

    const gen = cloneableGenerator(setTagsSaga)(action);

    it('should call api', () => {
      const callGenerator = call(api.update, action.data);
      expect(gen.next().value).toEqual(callGenerator);
    });

    it('shoudl call a success redux action', () => {
      const response = {
        name: 'mongodb',
        tags: action.data,
      };

      const putGenerator = put(actions.setTagsSuccess(response));
      expect(gen.next(response).value).toEqual(putGenerator);
    });
  });
});
