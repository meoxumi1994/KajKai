import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import config from './config'

import thunkMiddleware from 'redux-thunk'
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import cookie from 'react-cookie'
import reducers from './reducers'
import Components from './components';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

console.log(document.cookie)
function execute(action, emit, next, dispatch) {
    // console.log(cookie.load('token'))
    // if(cookie.load('token') !== undefined){
    //     emit('DEMO_EVENT', {...action, token: cookie.load('token')})
    //     // next()
    // }else{
    //     dispatch(loginResult('NOT_LOGGED_IN'))
    // }
}

// const socket = io(config.getDomain());
// const socketIoMiddleware = createSocketIoMiddleware(socket, "server/", { execute: execute });

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        // socketIoMiddleware
    )
)

store.dispatch({type:'serve/hello'});

ReactDOM.render(
    <AppContainer>
       <Provider store={store}>
          <Components/>
      </Provider>
    </AppContainer>,
  document.getElementById('root')
)
