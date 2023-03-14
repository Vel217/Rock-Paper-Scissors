import Judge from "./src/judge.js";
import Game from "./src/game.js";

function main() {
  const game = new Game(process.argv.slice(2));
  console.log(`HMAC: ${game.computerOptionVerificationHash()}`);

  game.promptUserOption();
  console.log(`Computer move: ${game.computerOption}`);

  const judge = new Judge(game);
  console.log(`Winner: ${judge.winner()}`);
  console.log("HMAC key:", game.verifier.token);
}

main();
