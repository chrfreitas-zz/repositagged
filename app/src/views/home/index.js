import React from 'react';
import Header from '../../components/header';

const Home = () => (
  <div>
    <Header title="githubstars" />
    <div>
      https://github.com/
      <input type="text" placeholder="username" />
      <button type="button">get repositories</button>
    </div>
  </div>
);

export default Home;
