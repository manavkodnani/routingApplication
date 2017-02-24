import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Routing Application</h1>
        <ul className='header'>
          <li>Home</li>
          <li>Profile</li>
          <li>About</li>
        </ul>
        <div className='content'>
        </div>
      </div>
    );
  }
}

export default App;
