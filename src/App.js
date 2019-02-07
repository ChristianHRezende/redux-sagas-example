import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers/index'

import Info from './Info'

import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
//index saga
import indexSagas from './sagas';
import UserAgent from './UserAgent';

//initialize saga middleware
const sagaMiddleware = createSagaMiddleware()

//store
const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
)
//start sagas
sagaMiddleware.run(indexSagas)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
          <UserAgent />
        </div>
      </Provider>
    );
  }
}

export default App;
