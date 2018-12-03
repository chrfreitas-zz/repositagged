import { connect } from 'react-redux';
import Repositories from '../../views/repositories';

const mapStateToProps = store => ({
  newValue: store.list,
});

export default connect(mapStateToProps)(Repositories);
