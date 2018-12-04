import api, { BASE_URL } from '..';

describe('Api', () => {
  it('should call fetch with username in the url', () => {
    const username = 'spikejonze';
    api.getRepositories(username);

    const url = `${BASE_URL}/repositories/${username}`;
    expect(fetch).toHaveBeenCalledWith(url, { method: 'GET' });
  });
});
