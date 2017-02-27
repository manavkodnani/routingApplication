import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './Home'
import Profile from './Profile'
import About from './About'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/Profile' component={Profile} />
      <Route path='/About' component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
