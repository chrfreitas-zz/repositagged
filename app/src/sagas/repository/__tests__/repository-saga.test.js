import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import actions from '../../../actions/repository';
import api from '../../../api/repository';
import { setTagsSaga } from '..';

describe('Sagas', () => {
  describe('when it sets new tags', () => {
    const action = {
      data: {
        name: 'ruby',
        tagged: true,
      },
    };

    const gen = cloneableGenerator(setTagsSaga)(action);

    it('should call api', () => {
      const callGenerator = call(api.update, action.data);
      expect(gen.next().value).toEqual(callGenerator);
    });

    it('should call a success redux action', () => {
      const putGenerator = put(actions.setTagsSuccess(action.data));
      expect(gen.next(action.data).value).toEqual(putGenerator);
    });
  });
});
