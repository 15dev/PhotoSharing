import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './components/Uploader/Uploader'

class App extends Component {




  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PhotoSharing App</h2>
        </div>
        <Uploader />
      </div>
    );
  }


}

export default App;