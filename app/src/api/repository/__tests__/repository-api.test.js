import mockAxios from 'jest-mock-axios';
import api, { BASE_URL } from '..';

describe('Repository Api', () => {
  it('should call create route with params', () => {
    const repository = {
      name: 'jquery',
      tags: 'the best',
    };

    api.update(repository);
    expect(mockAxios.post).toHaveBeenCalledWith(`${BASE_URL}/repositories/`, repository);
  });

  it('should call update route with params', () => {
    const repository = {
      name: 'jquery',
      tags: 'the best',
    };

    api.create(repository);
    expect(mockAxios.put).toHaveBeenCalledWith(`${BASE_URL}/repositories/`, repository);
  });
});
