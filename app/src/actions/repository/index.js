const SET_TAGS = 'SET_TAGS';
const SET_TAGS_SUCCESS = 'SET_TAGS_SUCCESS';

const setTags = data => ({
  type: SET_TAGS,
  data,
});

const setTagsSuccess = data => ({
  type: SET_TAGS_SUCCESS,
  data,
});

export default {
  SET_TAGS,
  SET_TAGS_SUCCESS,
  setTags,
  setTagsSuccess,
};
