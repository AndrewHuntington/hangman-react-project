/** generateButtons: return array of letter buttons to render */
function generateButtons() {
  return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
    <button
      key={ltr}
      value={ltr}
      onClick={this.handleGuess}
      disabled={this.state.guessed.has(ltr)}
    >
      {ltr}
    </button>
  ));
}

export { generateButtons };
