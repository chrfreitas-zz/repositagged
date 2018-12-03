import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Views from './views';
import store from './store';
import './styles/base.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
