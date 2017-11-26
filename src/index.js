import React from 'react';
import ReactDOM from 'react-dom';
import './web/index.css';
import App from './web/App';
import registerServiceWorker from './web/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
