const FETCH_REPOSITORIES_LIST = 'FETCH_REPOSITORIES_LIST';
const FETCH_REPOSITORIES_LIST_SUCCESS = 'FETCH_REPOSITORIES_LIST_SUCCESS';
const EDIT_TAGS = 'EDIT_TAGS';
const EDIT_TAGS_SUCCESS = 'EDIT_TAGS_SUCCESS';


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

const editTagsSuccess = data => ({
  type: EDIT_TAGS_SUCCESS,
  data,
});

export default {
  FETCH_REPOSITORIES_LIST,
  FETCH_REPOSITORIES_LIST_SUCCESS,
  EDIT_TAGS,
  EDIT_TAGS_SUCCESS,
  fetchRepositoriesList,
  fetchRepositoriesListSuccess,
  editTags,
  editTagsSuccess,
};
