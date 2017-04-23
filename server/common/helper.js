import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import path from 'path'

export const getPath = (root) => {
  return (relative) => {
    return path.resolve(root, relative)
  }
}

export const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>KaiKai</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/demo.js"></script>
      </body>
    </html>
    `
}

export const serverSideRenderingDemo = (preloadedState, reducer, App) => {

  // Create a new Redux store instance
  const store = createStore(reducer, preloadedState)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // Send the rendered page back to the client
  return renderFullPage(html, finalState)
}
