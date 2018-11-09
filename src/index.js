import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import { HashRouter } from 'react-router-dom'
import { useStrict }  from 'mobx'
import { Provider  } from 'mobx-react'

import TestStore from './store/TestStore'

const stores = {    
    TestStore
}
//import * as serviceWorker from './serviceWorker';
window._____APP_STATE_____ = stores;


ReactDOM.render((
    <Provider {...stores}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  ), document.getElementById('root'));