const UPDATE = 'UPDATE';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

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
  UPDATE,
  UPDATE_SUCCESS,
  update,
  updateSuccess,
};
