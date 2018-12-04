import { connect } from 'react-redux';
import actions from '../../actions';
import Repositories from '../../views/repositories';

const mapDispatchToProps = dispatch => ({
  getRepositories: username => dispatch(actions.fetchRepositoriesList(username)),
  editTags: tags => dispatch(actions.editTags(tags)),
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
