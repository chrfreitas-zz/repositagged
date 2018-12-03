const FETCH_REPOSITORIES_LIST = 'FETCH_REPOSITORIES_LIST';
const FETCH_REPOSITORIES_LIST_SUCCESS = 'FETCH_REPOSITORIES_LIST_SUCCESS';

const fetchRepositoriesList = data => ({
  type: FETCH_REPOSITORIES_LIST,
  data,
});

const fetchRepositoriesListSuccess = data => ({
  action: FETCH_REPOSITORIES_LIST_SUCCESS,
  data,
});

export default {
  FETCH_REPOSITORIES_LIST,
  FETCH_REPOSITORIES_LIST_SUCCESS,
  fetchRepositoriesList,
  fetchRepositoriesListSuccess,
};
