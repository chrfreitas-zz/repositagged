const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const FETCH_REPOSITORIES_LIST = 'FETCH_REPOSITORIES_LIST';
const FETCH_REPOSITORIES_LIST_SUCCESS = 'FETCH_REPOSITORIES_LIST_SUCCESS';

const fetchRepositoriesList = data => ({
  type: FETCH_REPOSITORIES_LIST,
  data,
});

const fetchRepositoriesListSuccess = data => ({
  type: FETCH_REPOSITORIES_LIST_SUCCESS,
  data,
});

const search = data => ({
  type: SEARCH,
  data,
});

const searchSuccess = data => ({
  type: SEARCH_SUCCESS,
  data,
});

export default {
  FETCH_REPOSITORIES_LIST,
  FETCH_REPOSITORIES_LIST_SUCCESS,
  fetchRepositoriesList,
  fetchRepositoriesListSuccess,
  SEARCH,
  SEARCH_SUCCESS,
  search,
  searchSuccess,
};
