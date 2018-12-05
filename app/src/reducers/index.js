import repositoriesActions from '../actions/repositories';
import repositoryActions from '../actions/repository';

const initialState = {
  repositories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case repositoriesActions.FETCH_REPOSITORIES_LIST_SUCCESS:
      return {
        ...state,
        repositories: action.data,
      };
    case repositoryActions.UPDATE_SUCCESS:
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
