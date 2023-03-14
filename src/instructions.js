import Table from "cli-table";

export default class Instructions {
  constructor(game) {
    this.game = game;
  }

  print() {
    console.log("game rules");
    let length = this.game.options.length;
    let gameStep = (length - 1) / 2;

    let a = [
      ...new Array(gameStep).fill("Lose"),
      "Draw",
      ...new Array(gameStep).fill("Win"),
    ];
    let newA = [...a, ...a, ...a];
    let data = [];

    for (let i = 0; i < length; i++) {
      data.push(newA.slice(gameStep - i + length, 2 * length - i + gameStep));
    }

    const result = data.map((array, index) => [
      this.game.options[index],
      ...array,
    ]);

    const header = ["Computer move\nYour move", ...this.game.options];
    const table = new Table({
      head: [...header],
    });
    result.forEach((row) => {
      table.push(row);
    });

    console.log(table.toString());
  }
}
