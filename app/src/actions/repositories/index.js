const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SYNC = 'SYNC';
const SYNC_SUCCESS = 'SYNC_SUCCESS';

const sync = data => ({
  type: SYNC,
  data,
});

const syncSuccess = data => ({
  type: SYNC_SUCCESS,
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
  SYNC,
  SYNC_SUCCESS,
  sync,
  syncSuccess,
  SEARCH,
  SEARCH_SUCCESS,
  search,
  searchSuccess,
};
