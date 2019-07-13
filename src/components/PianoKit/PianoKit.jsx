import React from "react";
import "./PianoKit.css";

const sounds = [
  "a",
  "b flat",
  "b",
  "c",
  "c sharp",
  "d",
  "e flat",
  "e",
  "f",
  "f sharp",
  "g",
  "a flat",
  "a",
  "b flat",
  "b",
  "c"
];

class PianoKit extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleClick = () => {
    this.audio.play();
    this.props.changeDisplay(this.props.name);
  };

  handleKeydown = e => {
    if (e.keyCode === this.props.id.charCodeAt()) {
      this.audio.play();
      this.props.changeDisplay(this.props.name);
    }
  };
  render() {
    return (
      <div id="PianoKit">
        <div className="piano">
          <div
            onClick={() => {
              this.handleClick(sounds[0]);
            }}
            data-key="65"
            className="key white a2"
          >
            <span className="sound">a</span>
            <kbd>A</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[1]);
            }}
            data-key="87"
            className="key black bFlat"
          >
            <span className="sound high">b&#9837;</span>
            <kbd>W</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[2]);
            }}
            data-key="83"
            className="key white b"
          >
            <span className="sound">b</span>
            <kbd>S</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[3]);
            }}
            data-key="68"
            className="key white c3"
          >
            <span className="sound">c</span>
            <kbd>D</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[4]);
            }}
            data-key="82"
            className="key black cSharp"
          >
            <span className="sound high">c&#35;</span>
            <kbd>R</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[5]);
            }}
            data-key="70"
            className="key white d"
          >
            <span className="sound">d</span>
            <kbd>F</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[6]);
            }}
            data-key="84"
            className="key black eFlat"
          >
            <span className="sound high">e&#9837;</span>
            <kbd>T</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[7]);
            }}
            data-key="71"
            className="key white e"
          >
            <span className="sound">e</span>
            <kbd>G</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[8]);
            }}
            data-key="72"
            className="key white f"
          >
            <span className="sound">f</span>
            <kbd>H</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[9]);
            }}
            data-key="89"
            className="key black fSharp"
          >
            <span className="sound high">f&#35;</span>
            <kbd>Y</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[10]);
            }}
            data-key="74"
            className="key white g"
          >
            <span className="sound">g</span>
            <kbd>J</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[11]);
            }}
            data-key="85"
            className="key black aFlat"
          >
            <span className="sound high">a&#9837;</span>
            <kbd>U</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[12]);
            }}
            data-key="75"
            className="key white a"
          >
            <span className="sound">a</span>
            <kbd>K</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[13]);
            }}
            data-key="73"
            className="key black bFlat"
          >
            <span className="sound high">b&#9837;</span>
            <kbd>I</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[14]);
            }}
            data-key="76"
            className="key white b"
          >
            <span className="sound">b</span>
            <kbd>L</kbd>
          </div>
          <div
            onClick={() => {
              this.handleClick(sounds[15]);
            }}
            data-key="186"
            className="key white c4"
          >
            <span className="sound">c</span>
            <kbd>;</kbd>
          </div>
        </div>

        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="65"
          src="./sounds/A2.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="83"
          src="./sounds/B2.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="68"
          src="./sounds/C3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="70"
          src="./sounds/D3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="71"
          src="./sounds/E3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="72"
          src="./sounds/F3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="74"
          src="./sounds/G3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="75"
          src="./sounds/A3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="76"
          src="./sounds/B3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          className="audio"
          data-key="186"
          src="./sounds/C4.wav"
        />

        <audio
          ref={ref => (this.audio = ref)}
          class="audio"
          data-key="87"
          src="./sounds/Bb2.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          class="audio"
          data-key="82"
          src="./sounds/Db3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          class="audio"
          data-key="84"
          src="./sounds/Eb3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          class="audio"
          data-key="89"
          src="./sounds/Gb3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          class="audio"
          data-key="85"
          src="./sounds/Ab3.wav"
        />
        <audio
          ref={ref => (this.audio = ref)}
          class="audio"
          data-key="73"
          src="./sounds/Bb3.wav"
        />
      </div>
    );
  }
}

export default PianoKit;
