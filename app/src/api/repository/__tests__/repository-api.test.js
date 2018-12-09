import mockAxios from 'jest-mock-axios';
import api from '..';

describe('Repository Api', () => {
  it('should call update route with params', () => {
    const repository = {
      name: 'jquery',
      tags: 'the best',
    };

    api.update(repository);
    expect(mockAxios.post).toHaveBeenCalledWith('repositories/', repository);
  });
});
