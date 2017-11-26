import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './web/index.css';
import App from './web/App';
import registerServiceWorker from './web/registerServiceWorker';
import store from "./redux/reducer"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
