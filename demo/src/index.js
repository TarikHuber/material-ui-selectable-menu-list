import { render } from 'react-dom'
import React from 'react'
import App from './App.js'
import { Provider } from 'react-redux'
import reducers from './reducers'
import routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { responsiveStoreEnhancer } from 'redux-responsive'
import { createStore, compose, applyMiddleware } from 'redux'
import { Router, Route, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const store = createStore(reducers, compose(applyMiddleware(), responsiveStoreEnhancer))

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App>
        <Router history={history} >
          <Switch >
            <Route path='/test' component={App} />
            <Route path='/test' component={App} />
            <Route path='/*' component={App} />
          </Switch>
        </Router>
      </App>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('#demo'))
