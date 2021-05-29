import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'

import './index.css';
import App from './App';

ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </HashRouter>
      </Provider>,
  document.getElementById('root')
);

