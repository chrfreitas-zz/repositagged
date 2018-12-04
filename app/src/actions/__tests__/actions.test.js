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

  it('should call return data and EDIT_TAGS', () => {
    const result = actions.editTags(1, 'python');
    const actionExpected = {
      type: actions.EDIT_TAGS,
      data: { id: 1, tags: 'python' },
    };

    expect(result).toEqual(actionExpected);
  });

  it('should call return data and EDIT_TAGS_SUCCESS', () => {
    const result = actions.editTagsSuccess({});
    const actionExpected = {
      type: actions.EDIT_TAGS_SUCCESS,
      data: {},
    };

    expect(result).toEqual(actionExpected);
  });
});
