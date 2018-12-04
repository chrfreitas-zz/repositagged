import api, { BASE_URL } from '..';

describe('Api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetch with username in the url', () => {
    const username = 'spikejonze';
    api.getRepositories(username);

    const url = `${BASE_URL}/repositories/${username}`;
    expect(fetch).toHaveBeenCalledWith(url, { method: 'GET' });
  });

  it('should call edit tags to update repository with new tags', () => {
    const id = 1;
    const tags = 'elixir';

    api.editTags(id, tags);

    const url = `${BASE_URL}/repositories/update`;
    expect(fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      body: {
        id,
        tags,
      },
    });
  });
});
