import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import List from './components/List.js';

class App extends Component {
  render() {
    return (
      <div className="App flex-container">
      	<List/>
        <Map/>
      </div>
    );
  }
}

export default App;
