import React from 'react';

import Header from './Header.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="metronome" class="content">
          <div id="output">
            <p id="bpm">60</p>
          </div>
          <div class="center">
            <button id="minus10">-10</button>
            <button id="startStop">Start</button>
            <button id="plus10">+10</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
