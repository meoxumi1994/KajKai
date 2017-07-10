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
import logger from 'redux-logger'

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

function execute(action, emit, next, dispatch) {
    console.log('socket.io',{...action})
    if(action.type.substr(0,6) == 'client'){
        next(action)
    }else{
        emit(action.type, action)
    }
}

const socket = io(config.getSocket())
const socketIoMiddleware = createSocketIoMiddleware(socket, ["server/","client/"], { execute: execute });

const store = createStore(
    reducers,
    applyMiddleware(
        // logger,
        thunkMiddleware,
        socketIoMiddleware
    )
)

window.addEventListener('resize', () => {
    store.dispatch({ type: 'SCREEN_RESIZE', width: window.innerWidth, height: window.innerHeight });
});

document.getElementsByTagName("BODY")[0].onscroll = () => {
    store.dispatch({ type: 'ON_SCROLL_BODY',
        scrollTop: document.getElementsByTagName("BODY")[0].scrollTop,
        scrollLeft: document.getElementsByTagName("BODY")[0].scrollLeft, })
}

store.dispatch({ type: 'server/hello'})
store.dispatch({ type: 'server/TestController'})

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
