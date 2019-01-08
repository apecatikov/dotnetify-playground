import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

import HelloWorld from './HelloWorld'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <HelloWorld />
        <img src={require('./images/gearstudio.png')} alt="gearstudio screenshot" style={{width: '960px', height: '580px'}} />
      </div>
    );
  }
}

export default App;
