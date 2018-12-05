import { connect } from 'react-redux';
import actions from '../../actions/repositories';
import Repositories from '../../views/repositories';

const mapDispatchToProps = dispatch => ({
  getRepositories: username => dispatch(actions.fetchRepositoriesList(username)),
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
