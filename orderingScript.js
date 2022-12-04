import { Array } from "./arrayLib.js";
import { randomInt } from "./random.js";
import { Robin } from "./robinDrag.js";

class OrderingGame {
  constructor() {
    this.array = new Array(10);
    this.userArray = new Array(10);
    this.currentRobinContainer = document.getElementById(
      "currentRobinContainer"
    );
    this.robinNumText = document.getElementById("robinNum");
  }
  generateCompNums() {
    for (let i = 0; i < this.array.getSize(); i++) {
      this.array.assign(i, randomInt(1, 100));
    }
  }
  newRobin(index) {
    return new Robin(index, this.array.get(index), this.currentRobinContainer);
  }
  main() {
    this.generateCompNums();
    console.log(this.array);
    let playing = true;
    let turn = 0;
    while (playing && turn < 1) {
      this.newRobin(turn);
      this.robinNumText.innerText = `Robin Number ${turn}`;
      turn++;
    }
  }
}

const game = new OrderingGame();
game.main();
