import React from 'react';

import Header from './Header.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 60
    };

    this.changeBpm = this.changeBpm.bind(this);
  }

  changeBpm(delta) {
    let newBpm = Math.max(this.state.bpm + delta, 30);
    newBpm = Math.min(newBpm, 400);
    this.setState({bpm: newBpm});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="metronome" class="content">
          <div id="output">
            <p id="bpm">{this.state.bpm}</p>
          </div>
          <div class="center">
            <button id="minus10" onClick={()=>this.changeBpm(-10)}>-10</button>
            <button id="startStop">Start</button>
            <button id="plus10" onClick={()=>this.changeBpm(10)}>+10</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
