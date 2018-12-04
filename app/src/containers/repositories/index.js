import { connect } from 'react-redux';
import actions from '../../actions';
import Repositories from '../../views/repositories';

const mapDispatchToProps = dispatch => ({
  getRepositories: username => dispatch(actions.fetchRepositoriesList(username)),
  editTags: (id, tags) => dispatch(actions.editTags(id, tags)),
});

const mapStateToProps = store => ({
  repositories: store.repositories,
});

export {
  mapDispatchToProps,
  mapStateToProps,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
