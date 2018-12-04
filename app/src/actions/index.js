const FETCH_REPOSITORIES_LIST = 'FETCH_REPOSITORIES_LIST';
const FETCH_REPOSITORIES_LIST_SUCCESS = 'FETCH_REPOSITORIES_LIST_SUCCESS';
const EDIT_TAGS = 'EDIT_TAGS';


const fetchRepositoriesList = data => ({
  type: FETCH_REPOSITORIES_LIST,
  data,
});

const fetchRepositoriesListSuccess = data => ({
  type: FETCH_REPOSITORIES_LIST_SUCCESS,
  data,
});

const editTags = data => ({
  type: EDIT_TAGS,
  data,
});

export default {
  FETCH_REPOSITORIES_LIST,
  FETCH_REPOSITORIES_LIST_SUCCESS,
  EDIT_TAGS,
  fetchRepositoriesList,
  fetchRepositoriesListSuccess,
  editTags,
};
