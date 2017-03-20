import {render} from 'react-dom'
import React  from 'react';
import App from './App.js'
import { Provider } from 'react-redux';
import reducers from './reducers';
import routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {responsiveStoreEnhancer} from 'redux-responsive';
import { createStore, compose, applyMiddleware } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
injectTapEventPlugin();

const middlewares=[
  routerMiddleware(browserHistory)
];

const store = createStore(reducers, compose(applyMiddleware(...middlewares), responsiveStoreEnhancer) );

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('#demo'))
