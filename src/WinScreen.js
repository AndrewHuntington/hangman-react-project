import React, { Component } from "react";
import "./WinScreen.css";

class WinScreen extends Component {
  constructor(props) {
    super(props);
    this.handleReplay = this.handleReplay.bind(this);
  }

  handleReplay() {
    this.props.replay();
  }

  render() {
    return (
      <div className="WinScreen">
        <div className="WinScreen-content">
          <div className="WinScreen-msg">You win!</div>
          <button className="WinScreen-btn" onClick={this.handleReplay}>
            Play Again
          </button>
        </div>
      </div>
    );
  }
}

export default WinScreen;
