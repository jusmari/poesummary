import React, { Component } from 'react';
import './App.css';
import Front from './components/Front'
import Footer from './components/Footer'
import { Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
        <div className="App">

          <Header size='huge'>Poe Summary</Header>
          
          <div className="Contents">
            
            <Front />
          </div>

          <Footer />

        </div>
    );
  }
}

export default App;
