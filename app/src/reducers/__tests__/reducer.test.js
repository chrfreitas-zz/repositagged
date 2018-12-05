import reducer from '..';
import repositoriesAction from '../../actions/repositories';
import repositoryActions from '../../actions/repository';

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
      type: repositoriesAction.FETCH_REPOSITORIES_LIST_SUCCESS,
      data: [{
        name: 'mongodb',
        description: 'mongodb repository',
      }],
    };

    const result = reducer(state, action);
    expect(result.repositories).toBe(action.data);
  });

  it('should update a repository', () => {
    const state = {
      repositories: [{
        id: 1,
        tags: '',
      }],
    };

    const action = {
      type: repositoryActions.UPDATE_SUCCESS,
      data: {
        id: 1,
        tags: 'kotlin',
      },
    };

    const result = reducer(state, action);
    expect(result.repositories[0]).toBe(action.data);
  });
});
