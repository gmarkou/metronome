import React from 'react';

import Header from './Header'
import Metronome from './Metronome';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.metronome = new Metronome();
    this.metronome.createContext();

    this.state = {
      bpm: 60,
      started: false
    };

    this.changeBpm = this.changeBpm.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  componentDidMount() {
    fetch('./tick.mp3')
    .then(response => response.arrayBuffer())
    .then(result => this.metronome.context.decodeAudioData(result))
    .then(buffer => this.metronome.buffer = buffer)
    .catch(error => alert(error));
}

  changeBpm(delta) {
    const newBpm = this.metronome.setBpm(this.state.bpm + delta);
    this.setState({bpm: newBpm});
  }

  startStop() {
    const newStarted = !this.state.started;
    if (newStarted) {
      this.metronome.start();
    }
    else {
      this.metronome.stop();
    }
    this.setState({started:newStarted});
  }

  render() {
    const {bpm, started} = this.state;
    return (
      <div className="App">
        <Header />
        <div id="metronome" class="content">
          <div id="output">
            <p id="bpm">{bpm}</p>
          </div>
          <div class="center">
            <button id="minus10" onClick={()=>this.changeBpm(-10)}>-10</button>
            <button id="startStop"onClick={()=>this.startStop()}>{started ? "Stop":"Start"}</button>
            <button id="plus10" onClick={()=>this.changeBpm(10)}>+10</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
