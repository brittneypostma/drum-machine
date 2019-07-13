import React from "react";

import "./Pads.css";

class Pads extends React.Component {
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
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.props.changeDisplay(this.props.name);
    }
  };
  render() {
    const { letter, name, src } = this.props;
    return (
      <button onClick={this.handleClick} className="pads" id={name}>
        {letter}
        <br />
        {name}
        <audio
          ref={ref => (this.audio = ref)}
          src={src}
          clasName="clip"
          id={name}
        />
      </button>
    );
  }
}

export default Pads;
