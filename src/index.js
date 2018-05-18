import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store';


const store = configureStore();
const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <div>Music Player</div>
  </Provider>,
  rootElement
);
