import React from 'react';

import Header from './Header.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 60,
      started: false
    };

    this.changeBpm = this.changeBpm.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  changeBpm(delta) {
    let newBpm = Math.max(this.state.bpm + delta, 30);
    newBpm = Math.min(newBpm, 400);
    this.setState({bpm: newBpm});
  }

  startStop() {
    this.setState({started:!this.state.started});
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
            <button id="startStop"onClick={()=>this.startStop()}>{this.state.started ? "Stop":"Start"}</button>
            <button id="plus10" onClick={()=>this.changeBpm(10)}>+10</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
