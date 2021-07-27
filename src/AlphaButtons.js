import React, { Component } from "react";

/** renders a sequence of buttons corresponding to letters. */
class AlphaButtons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleGuess(e);
  }

  render() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleClick}
        disabled={this.props.guessedLtrs.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
}

export default AlphaButtons;
