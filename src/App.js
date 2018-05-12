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
          To customize SemanticUI, edit the files in <code>src/semantic/src/themes/custom</code> and save to rebuild.
        </p>

        <p className="App-note">
            If you are using a *nix system, you can edit SemanticUI in <code>src/semantic/theme</code>
        </p>

        <Button>
          I'm a Semantic UI button ///////
        </Button>
      </div>
    );
  }
}

export default App;
