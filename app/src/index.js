import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Views from './views';
import './styles/base.scss';

ReactDOM.render(
  <BrowserRouter>
    <Views />
  </BrowserRouter>,
  document.getElementById('root'),
);
