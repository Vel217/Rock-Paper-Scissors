let arr = ["rock", "paper", "scissors", "lizard", "spock", "knife", "bread"];
// process.argv;
let collection = new Set(arr);
let crypto = require("crypto");
let compChoice = Math.floor(Math.random() * arr.length);

let key = new Uint8Array(32);
let gameKey = crypto.getRandomValues(key);
let newKey = Array.from(gameKey);
newKey.push(arr[compChoice]);
let string = newKey.join("");
const hashStart = crypto.createHash("sha3-256").update(string).digest("hex");

console.log(hashStart);

let peopleWord = "spock";
if (arr.length % 2 == 0) {
  console.log("нужно ввести нечетное число аргументов");
} else if (collection.size !== arr.length) {
  console.log("эоементы не должны повторяться");
} else if (arr.length < 3) {
  console.log("количество аргументов должно быть больше 3");
} else {
  let newArr = [...arr, ...arr, ...arr];

  let peopleChoice = arr.indexOf(peopleWord);
  let gameStep = (arr.length - 1) / 2;

  let a = newArr.indexOf(peopleChoice, peopleChoice);

  let winChoice = newArr.slice(a - gameStep, a);
  let looseChoice = newArr.slice(a + 1, a + gameStep + 1);

  if (winChoice.includes(compWord)) {
    console.log("you win!");
  } else {
    console.log("you loose");
  }
}
