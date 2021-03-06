import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Root from './root/Root';
import Error from './components/error/Error';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Error>
      <Root />
    </Error>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
