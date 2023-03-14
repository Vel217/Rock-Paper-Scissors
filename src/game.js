import readlineSync from "readline-sync";
import Verifier from "./verifier.js";
import Instructions from "./instructions.js";

export default class Game {
  constructor(options = []) {
    this.userOption = "";
    this.options = options;
    this.validateOptions();

    this.instructions = new Instructions(this);
    this.verifier = new Verifier();
    this.computerOption = this.pickRandomOption();
  }

  computerOptionVerificationHash() {
    return this.verifier.hash(this.computerOption);
  }

  pickRandomOption() {
    return this.options[Math.floor(Math.random() * this.options.length)];
  }

  validateOptions() {
    this.setArg = new Set(this.options);
    if (this.options.length % 2 == 0) {
      throw new Error(
        "Invalid parameters: the number of parameters must be odd"
      );
    }
    if (this.setArg.size !== this.options.length) {
      throw new Error("Invalid parameters: parameters must not be repeated");
    }
    if (this.options.length < 3) {
      throw new Error(
        "Invalid parameters: number of parameters must be greater than 3"
      );
    }
  }

  printMenu() {
    let mainMenu = {
      "?": "Help",
      0: "Exit",
    };
    let itemMenu = {};
    this.options.forEach((option) => {
      itemMenu[this.options.indexOf(option) + 1] = option;
    });
    console.log("Available move:");

    for (let key in itemMenu) {
      console.log(key + " - " + itemMenu[key]);
    }
    for (let key in mainMenu) {
      console.log(key + " - " + mainMenu[key]);
    }
  }

  promptUserOption() {
    this.printMenu();

    const userInput = readlineSync.question("Pick your answer ");

    if (userInput == "?") {
      this.instructions.print();
      this.promptUserOption();
    }

    if (userInput == "0") {
      console.log("See you late");
      process.exit(1);
    }

    this.userOption = this.options[parseInt(userInput) - 1];
    console.log(`You picked: ${this.userOption}`);
  }
}
