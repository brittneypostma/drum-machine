import React from "react";
import Display from "./components/Display/Display";
import PowerButton from "./components/PowerButton/PowerButton";
import Volume from "./components/Volume/Volume";
import Switch from "./components/Switch/Switch";
import Pads from "./components/DrumKit/Pads";

import "./DrumMachine.css";

const drumData = [
  {
    name: "Heater 1",
    letter: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    name: "Heater 2",
    letter: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    name: "Heater 3",
    letter: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    name: "Heater 4",
    letter: "F",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    name: "Clap",
    letter: "G",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    name: "Open HiHat",
    letter: "H",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    name: "Kick n Hat",
    letter: "J",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    name: "Kick",
    letter: "K",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    name: "Closed HiHat",
    letter: "L",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

// const bankTwo = [
//   {
//     name: "Chord 1",
//     letter: "A",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
//   },
//   {
//     name: "Chord 2",
//     letter: "S",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
//   },
//   {
//     name: "Chord 3",
//     letter: "C",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
//   },
//   {
//     name: "Shaker",
//     letter: "V",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
//   },
//   {
//     name: "Open HiHat",
//     letter: "B",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
//   },
//   {
//     name: "Closed HiHat",
//     letter: "N",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
//   },
//   {
//     name: "Punchy Kick",
//     letter: "M",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
//   },
//   {
//     name: "Side Stick",
//     letter: ",",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
//   },
//   {
//     name: "Snare",
//     letter: ".",
//     src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
//   }
// ];

class DrumMachine extends React.Component {
  state = {
    display: "Press a key to play"
  };
  changeDisplay = name => {
    this.setState({ display: name });
  };
  render() {
    return (
      <div id="drum-machine">
        <div className="top">
          <Display display={this.state.display} />
          <PowerButton />
        </div>
        <div className="middle">
          <div id="DrumKit">
            {drumData.map(button => (
              <Pads
                changeDisplay={this.changeDisplay}
                letter={button.letter}
                name={button.name}
                key={button.name}
                src={button.src}
              />
            ))}
          </div>
          <div className="middle-right">
            <Switch />
            <Volume />
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
