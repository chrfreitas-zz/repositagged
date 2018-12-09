import mockAxios from 'jest-mock-axios';
import api from '..';

describe('Repositories Api', () => {
  it('should get all repositories', () => {
    const username = 'christophernolan';
    api.sync(username);
    expect(mockAxios.get).toHaveBeenCalledWith(`repositories/sync/${username}`);
  });

  it('should get search repositories', () => {
    const query = 'rails';
    api.search(query);
    expect(mockAxios.get).toHaveBeenCalledWith(`repositories/search?query=${query}`);
  });
});
