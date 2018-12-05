import actions from '..';

describe('Repository Action', () => {
  it('should call return data and UPDATE', () => {
    const data = {
      name: 'c#',
      tags: 'microsoft, dotnet',
    };

    const result = actions.update(data);
    const actionExpected = {
      type: actions.UPDATE,
      data,
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
