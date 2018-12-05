import actions from '../actions/repositories';

const initialState = {
  repositories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REPOSITORIES_LIST_SUCCESS:
      return {
        ...state,
        repositories: action.data,
      };

    default:
      return state;
  }
};
