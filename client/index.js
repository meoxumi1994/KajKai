import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader'

import reducers from './reducers'
import Components from './components'
import './App.css'

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(
    <AppContainer>
       <Provider store={store}>
          <Components/>
      </Provider>
    </AppContainer>,
  document.getElementById('root')
)
