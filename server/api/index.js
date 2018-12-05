const axios = require('axios');
const Repository = require('../classes/repository');

const URL = 'https://api.github.com';

const fetchRespositories = async (username) => {
  const { data } = await axios.get(`${URL}/users/${username}/starred`);

  return data.reduce((total, current) => {
    const repository = new Repository({
      id: current.id,
      name: current.name,
      description: current.description,
      url: current.html_url,
      language: current.language,
    });

    total.push(repository);

    return total;
  }, []);
};

module.exports = {
  fetchRespositories,
};
