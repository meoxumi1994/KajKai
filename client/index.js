import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import config from './config'

import thunkMiddleware from 'redux-thunk'
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader'
import reducers from './reducers'
import Components from './components'
// import './App.css'

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

function execute(action, emit, next, dispatch) {
    console.log('socket.io',{...action})
    if(action.type.substr(0,6) == 'client'){
        next(action)
    }else{
        emit(action.type, {...action})
    }
}

const socket = io(config.getDomain())
const socketIoMiddleware = createSocketIoMiddleware(socket, ["server/","client/"], { execute: execute });

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        socketIoMiddleware
    )
)

store.dispatch({ type: 'server/hello'})

ReactDOM.render(
    <AppContainer>
       <Provider store={store}>
          <Components/>
      </Provider>
    </AppContainer>,
   //  <Provider store={store}>
   //     <Components/>
   // </Provider>,
  document.getElementById('root')
)
