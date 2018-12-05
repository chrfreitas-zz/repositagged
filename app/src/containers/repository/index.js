import { connect } from 'react-redux';
import actions from '../../actions/repository';
import Repository from '../../views/repository';

const getRepositoryById = (repositories, id) => repositories.find(repo => repo.id === id);

const mapDispatchToProps = dispatch => ({
  update: repository => dispatch(actions.update(repository)),
});

const mapStateToProps = (state, { match }) => ({
  repository: getRepositoryById(state.repositories, parseInt(match.params.id, 10)),
});

export {
  mapDispatchToProps,
  mapStateToProps,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repository);
