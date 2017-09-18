import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Semantic-Boilerplate</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br />
          To reload Semantic UI components on the fly, run <code>npm run semantic:watch</code> and adjust the overrides!
        </p>

        <Button>
          I am a button!
        </Button>
      </div>
    );
  }
}

export default App;
