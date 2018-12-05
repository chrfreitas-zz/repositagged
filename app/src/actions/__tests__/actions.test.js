import actions from '..';

describe('Actions', () => {
  it('should call return data and FETCH_REPOSITORIES_LIST', () => {
    const result = actions.fetchRepositoriesList('username');
    const actionExpected = {
      type: actions.FETCH_REPOSITORIES_LIST,
      data: 'username',
    };

    expect(result).toEqual(actionExpected);
  });

  it('should call return data and FETCH_REPOSITORIES_LIST_SUCCESS', () => {
    const result = actions.fetchRepositoriesListSuccess([]);
    const actionExpected = {
      type: actions.FETCH_REPOSITORIES_LIST_SUCCESS,
      data: [],
    };

    expect(result).toEqual(actionExpected);
  });

  it('should call return data and UPDATE', () => {
    const result = actions.update(1, 'python');
    const actionExpected = {
      type: actions.UPDATE,
      data: { id: 1, tags: 'python' },
    };

    expect(result).toEqual(actionExpected);
  });

  it('should call return data and UPDATE_SUCCESS', () => {
    const result = actions.updateSuccess({});
    const actionExpected = {
      type: actions.UPDATE_SUCCESS,
      data: {},
    };

    expect(result).toEqual(actionExpected);
  });
});
