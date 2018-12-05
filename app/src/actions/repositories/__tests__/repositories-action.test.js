import actions from '..';

describe('Repositories Actions', () => {
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
});
