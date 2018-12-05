const FETCH_REPOSITORIES_LIST = 'FETCH_REPOSITORIES_LIST';
const FETCH_REPOSITORIES_LIST_SUCCESS = 'FETCH_REPOSITORIES_LIST_SUCCESS';
const UPDATE = 'UPDATE';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';


const fetchRepositoriesList = data => ({
  type: FETCH_REPOSITORIES_LIST,
  data,
});

const fetchRepositoriesListSuccess = data => ({
  type: FETCH_REPOSITORIES_LIST_SUCCESS,
  data,
});

const update = (id, tags) => ({
  type: UPDATE,
  data: {
    id,
    tags,
  },
});

const updateSuccess = data => ({
  type: UPDATE_SUCCESS,
  data,
});

export default {
  FETCH_REPOSITORIES_LIST,
  FETCH_REPOSITORIES_LIST_SUCCESS,
  UPDATE,
  UPDATE_SUCCESS,
  fetchRepositoriesList,
  fetchRepositoriesListSuccess,
  update,
  updateSuccess,
};
