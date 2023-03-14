export default class Judge {
  constructor(game) {
    this.game = game;
  }

  winner() {
    let newArr = [
      ...this.game.options,
      ...this.game.options,
      ...this.game.options,
    ];
    let gameStep = (this.game.options.length - 1) / 2;
    let startIndex = newArr.indexOf(this.game.userOption, this.game.userOption);
    this.winChoice = newArr.slice(startIndex - gameStep, startIndex);

    if (this.winChoice.includes(this.game.computerOption)) {
      return "You lose!";
    } else if (this.game.computerOption === this.game.userOption) {
      return "Draw!";
    } else {
      return "You win!";
    }
  }
}
