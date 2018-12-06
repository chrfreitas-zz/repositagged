import actions from '..';

describe('Repository Action', () => {
  it('should call return data and SET_TAGS', () => {
    const data = {
      name: 'c#',
      tags: 'microsoft, dotnet',
    };

    const result = actions.setTags(data);
    const actionExpected = {
      type: actions.SET_TAGS,
      data,
    };

    expect(result).toEqual(actionExpected);
  });

  it('should call return data and SET_TAGS_SUCCESS', () => {
    const result = actions.setTagsSuccess({});
    const actionExpected = {
      type: actions.SET_TAGS_SUCCESS,
      data: {},
    };

    expect(result).toEqual(actionExpected);
  });
});
