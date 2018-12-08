import repositoriesActions from '../actions/repositories';
import repositoryActions from '../actions/repository';

const initialState = {
  repositories: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case repositoriesActions.SEARCH_SUCCESS:
    case repositoriesActions.SYNC_SUCCESS:
      return {
        ...state,
        repositories: action.data,
      };

    case repositoryActions.SET_TAGS_SUCCESS:
      return {
        ...state,
        repositories: state.repositories.map((respository) => {
          if (respository.id === action.data.id) {
            return action.data;
          }
          return respository;
        }),
      };

    default:
      return state;
  }
};
