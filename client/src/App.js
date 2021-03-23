import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Uploader from './components/Uploader/Uploader'
import Getter from './components/Getter/Getter'
import Header from './components/Header/Header'

class App extends Component {




  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-wrapper">
          <Uploader />
          <Getter />
        </div>
      </div>
    );
  }


}

export default App;