import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import './index.scss';

class Home extends Component {
  state = {
    username: '',
  }

  onChangeInput = (evt) => {
    const { value } = evt.target;
    this.setState({ username: value });
  }

  render() {
    const { username } = this.state;

    return (
      <div className="home">
        <div className="home__row">
          https://github.com/
          <Input placeholder="username" onChange={this.onChangeInput} />
        </div>
        <div className="home__row">
          <Link to={`${username}/repositories`}>
            <Button>
              get repositories
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
