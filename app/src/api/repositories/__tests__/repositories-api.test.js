import mockAxios from 'jest-mock-axios';
import api, { BASE_URL } from '..';

describe('Repositories Api', () => {
  it('should get all repositories', () => {
    const username = 'christophernolan';
    api.getRepositories(username);
    expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/repositories/${username}`);
  });
});
