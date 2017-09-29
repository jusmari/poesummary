import React, { Component } from 'react';
import './App.css';
import Front from './components/Front'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Poe Summary</h1>
        
        <Front />

      </div>
    );
  }
}

export default App;
