import React, { Component } from 'react';
import Frame from "./Components/frame";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
         <Frame/>
        </p>
      </div>
    );
  }
}

export default App;
