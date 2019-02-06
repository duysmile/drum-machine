import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class BtnKey extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickKey = this.handleClickKey.bind(this);
  }

  handleClickKey(event) {
    this.props.handleClickKey(this.props.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', function (event) {

    })
  }

  render() {
    return (
      <div className="mx-2">
        <button className="form-control bg-light" onClick={this.handleClickKey}>
          {this.props.keyTitle}
        </button>
      </div>
    );
  }
};

class KeyBoard extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex m-2">
          <BtnKey keyTitle="Q" />
          <BtnKey keyTitle="W" />
          <BtnKey keyTitle="E" />
        </div>
        <div className="d-flex m-2">
          <BtnKey keyTitle="A" />
          <BtnKey keyTitle="S" />
          <BtnKey keyTitle="D" />
        </div>
        <div className="d-flex m-2">
          <BtnKey keyTitle="Z" />
          <BtnKey keyTitle="X" />
          <BtnKey keyTitle="C" />
        </div>
      </div>
    );
  }
}

const TouchBtn = (props) => {
  return (
    <div className="touch-btn" onClick={props.onClick}>
      {props.checkOn && <div className="touch-btn-item touch-btn-on"></div>}
      {!props.checkOn && <div className="touch-btn-item touch-btn-off"></div>}
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      description: '',
      bank: false,
    };

    this.changePower = this.changePower.bind(this);
    this.changeBank = this.changeBank.bind(this);
  }

  changePower() {
    this.setState((prev) => {
      return {
        power: !prev.power
      }
    });
  }

  changeBank() {
    this.setState((prev) => {
      return {
        bank: !prev.bank
      };
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="border d-flex p-3">
          <KeyBoard />
          <div className="m-2 p-2 px-4 border d-flex flex-column justify-content-between">
            <div>
              Power
              <TouchBtn checkOn={this.state.power} onClick={this.changePower} />
            </div>
            <div className="bg-secondary p-2 text-white font-weight-bold text-center">
              Description
            </div>
            <div className="d-flex flex-column">
              <span>Volume</span>
              <input type="range" />
            </div>
            <div>
              Bank
              <TouchBtn checkOn={this.state.bank} onClick={this.changeBank} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
