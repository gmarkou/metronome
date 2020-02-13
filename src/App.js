import React from 'react';

import Header from './Header'
import Button from './Button'
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
        <div className="content">
          <div>
            <p className="bpm">{bpm}</p>
          </div>
          <div className="center">
            <Button className="ctrl-button" onClick={()=>this.changeBpm(-1)}>-1</Button>
            <Button className="ctrl-button" onClick={()=>this.changeBpm(-10)}>-10</Button>
            <Button className="ctrl-button ctrl-button-large" onClick={()=>this.startStop()}>{started ? "Stop":"Start"}</Button>
            <Button className="ctrl-button" onClick={()=>this.changeBpm(10)}>+10</Button>
            <Button className="ctrl-button" onClick={()=>this.changeBpm(1)}>+1</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
