import React, { Component } from "react";
import AlphaButtons from "./AlphaButtons";
import WinScreen from "./WinScreen";
import { randomWord } from "./words";
import "./Hangman.css";

import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  /** loseMsg: message to rendered upon player loss */
  loseMsg() {
    return (
      <p className="Hangman-lose-msg">
        <span>You lose!</span>
        <br />
        The secret word was:{" "}
        <span className="Hangman-word-reveal">{this.state.answer}</span>
      </p>
    );
  }

  /** handleReset: reset the game:
   - pick a new random word
   - resets the guessed list and number of wrong guesses
  */
  handleReset() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  checkWin(word) {
    word = word.join("");
    return word === this.state.answer;
  }

  /** render: render game */
  render() {
    let guessedWord;

    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img
          src={this.props.images[this.state.nWrong]}
          alt={`${this.state.nWrong} out of ${this.props.maxWrong} wrong guesses`}
        />
        <p>Number wrong: {this.state.nWrong}</p>
        <p className="Hangman-word">{(guessedWord = this.guessedWord())}</p>
        <div className="Hangman-btns">
          {this.checkWin(guessedWord) ? (
            <WinScreen replay={this.handleReset} />
          ) : null}
          {this.state.nWrong === this.props.maxWrong ? (
            this.loseMsg()
          ) : (
            <AlphaButtons
              guessedLtrs={this.state.guessed}
              handleGuess={this.handleGuess}
            />
          )}
        </div>
        <div className="Hangman-restart-btn" onClick={this.handleReset}>
          RESTART
        </div>
      </div>
    );
  }
}

export default Hangman;
