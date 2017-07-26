import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import config from './config'

import thunkMiddleware from 'redux-thunk'
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader'
import reducers from './reducers'
import Components from './containers/admin'
// import Components from './components/admin'
// import './App.css'
import logger from 'redux-logger'

import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
        // logger,
        thunkMiddleware
    ))
)

window.addEventListener('resize', () => {
    store.dispatch({ type: 'SCREEN_RESIZE', width: window.innerWidth, height: window.innerHeight });
});

$(window).click(function() {
    store.dispatch({ type: 'SCREEN_CLICK'})
});

setInterval(() => {
    store.dispatch({ type: 'TIME_DOWN'})
},1000)

document.getElementsByTagName("BODY")[0].onscroll = () => {
    store.dispatch({ type: 'ON_SCROLL_BODY',
        scrollTop: document.getElementsByTagName("BODY")[0].scrollTop,
        scrollLeft: document.getElementsByTagName("BODY")[0].scrollLeft, })
}

ReactDOM.render(
    <AppContainer>
       <Provider store={store}>
          <Components/>
      </Provider>
    </AppContainer>,
  document.getElementById('rootadmin')
)
