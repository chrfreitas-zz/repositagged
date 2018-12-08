import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import Progressbar from '../../components/progressbar';
import Input from '../../components/ui/input';
import Table from '../../components/ui/table';
import './index.scss';

const header = ['Repository', 'Description', 'Language', 'Tags', ''];

class Repositories extends Component {
  static propTypes = {
    match: PropTypes.object,
    repositories: PropTypes.array,
    sync: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: {
      param: {},
    },
    repositories: [],
  }

  search = debounce((value) => {
    this.props.search(value);
  }, 500);

  componentDidMount() {
    const { sync, match } = this.props;
    sync(match.params.username);
  }

  onChangeInput = (evt) => {
    const { value } = evt.target;
    this.search(value);
  }

  render() {
    const { repositories, match } = this.props;

    if (repositories === null) {
      return <Progressbar text="Getting the repositories list from Github" />;
    }

    return (
      <div className="repositories">
        <div className="repositories__row">
          <Input
            className="input input--medium"
            placeholder="search by tag"
            onChange={this.onChangeInput}
          />
        </div>
        <div className="repositories__row">
          <Table header={header} body={repositories} baseUrl={match.url} />
        </div>
      </div>
    );
  }
}

export default Repositories;
