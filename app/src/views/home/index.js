import React from 'react';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import './index.scss';

const Home = () => (
  <div className="home">
    <div className="home__row">
      https://github.com/
      <Input placeholder="username" />
    </div>
    <div className="home__row">
      <Button>get repositories</Button>
    </div>
  </div>
);

export default Home;
