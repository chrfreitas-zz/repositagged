import actions from '../actions';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REPOSITORIES_LIST:
      return {
        ...state,
        list: action.data,
      };

    default:
      return state;
  }
};
