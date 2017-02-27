import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Profile from './Profile.js'
import About from './About.js'
import {Link, IndexLink} from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Routing Application</h1>
        <ul className='header'>
          <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
          <li><Link to='/Profile' activeClassName='active'>Profile</Link></li>
          <li><Link to='/About' activeClassName='active'>About</Link></li>
        </ul>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
