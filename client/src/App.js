import React from 'react';
import logo from './logo.svg';
import './App.css';
import Currencies from './currencies/currencies';

function App (){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>
        <Currencies />
      </div>
    );
  }


export default App;
