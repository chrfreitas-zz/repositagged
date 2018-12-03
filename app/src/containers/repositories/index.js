import { connect } from 'react-redux';
import actions from '../../actions';
import Repositories from '../../views/repositories';

const mapDispatchToProps = dispatch => ({
  getRepositories: () => dispatch(actions.fetchRepositoriesList('chrfreitas')),
});

const mapStateToProps = store => ({
  repositories: store.repositories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
