import React from 'react';
import {Route} from 'react-router';
import App from './App.js';

export default(
  <Route component={App}>
    <Route path="/test" component={App}/>
    <Route path="/test2" component={App}/>
    <Route path="*" component={App}/>
  </Route>
)
