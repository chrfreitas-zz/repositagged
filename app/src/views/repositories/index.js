import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Progressbar from '../../components/progressbar';
import ModalTags from '../../components/modal-tags';
import Input from '../../components/ui/input';
import Table from '../../components/ui/table';
import './index.scss';

const header = ['Repository', 'Description', 'Language', 'Tags', ''];

class Repositories extends Component {
  state = {
    modalOpened: false,
    repository: {},
  }

  static propTypes = {
    match: PropTypes.object,
    repositories: PropTypes.array,
    getRepositories: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: {
      param: {},
    },
    repositories: [],
  }

  componentDidMount() {
    const { getRepositories, match } = this.props;
    getRepositories(match.params.username);
  }

  openModal = (repository) => {
    this.setState({
      modalOpened: true,
      repository,
    });
  }

  closeModal = () => {
    this.setState({
      modalOpened: false,
      repository: {},
    });
  };

  render() {
    const { modalOpened, repository } = this.state;
    const { repositories } = this.props;

    if (!repositories.length) {
      return <Progressbar text="Getting the repositories list from Github" />;
    }

    return (
      <Fragment>
        <div className="repositories">
          <div className="repositories__row">
            <Input placeholder="search by tag" className="input input--medium" />
          </div>
          <div className="repositories__row">
            <Table header={header} body={repositories} onClick={this.openModal} />
          </div>
        </div>
        <ModalTags
          isOpen={modalOpened}
          repository={repository}
          save={() => {}}
          close={this.closeModal}
        />
      </Fragment>
    );
  }
}

export default Repositories;
