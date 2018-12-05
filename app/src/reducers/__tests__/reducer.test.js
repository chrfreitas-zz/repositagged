import reducer from '..';
import actions from '../../actions/repositories';

describe('Reducer', () => {
  it('should return initial state', () => {
    const initialState = {
      repositories: [],
    };

    const state = initialState;

    const action = {
      type: 'TEST',
    };

    const result = reducer(state, action);
    expect(result).toBe(initialState);
  });

  it('should return a list of repositories', () => {
    const state = {
      repositories: [],
    };

    const action = {
      type: actions.FETCH_REPOSITORIES_LIST_SUCCESS,
      data: [{
        name: 'mongodb',
        description: 'mongodb repository',
      }],
    };

    const result = reducer(state, action);
    expect(result.repositories).toBe(action.data);
  });
});
