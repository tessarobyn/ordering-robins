import { Array } from "./arrayLib.js";
import { randomInt } from "./random.js";
import { Robin } from "./robin.js";
import { CreateWires } from "./createWires.js";

class OrderingGame {
  constructor(robinContainers) {
    this.robinContainers = robinContainers;
    this.checkContainerClick();
    this.array = new Array(10);
    this.userArray = new Array(10);
    this.currentRobinContainer = document.getElementById(
      "currentRobinContainer"
    );
    this.robinNumText = document.getElementById("robinNum");
  }

  moveRobin(index) {
    const container = this.robinContainers.get(index);
    container.innerHTML = "";
    container.appendChild(this.currentRobin.robin);
  }

  checkMoveAllowed(index, num) {
    this.moveRobin(index);
    this.startTurn();
  }

  checkContainerClick() {
    for (let i = 0; i < this.robinContainers.getSize(); i++) {
      this.robinContainers.get(i).addEventListener("click", () => {
        this.checkMoveAllowed(
          this.robinContainers.get(i).id,
          this.currentRobin.num
        );
      });
    }
  }

  generateCompNums() {
    for (let i = 0; i < this.array.getSize(); i++) {
      this.array.assign(i, randomInt(1, 100));
    }
  }
  newRobin(index) {
    return new Robin(index, this.array.get(index), this.currentRobinContainer);
  }

  startTurn() {
    if (this.turn == 10) {
      console.log("finished");
    } else {
      this.currentRobin = this.newRobin(this.turn);
      this.robinNumText.innerText = `Robin Number ${this.turn}`;
      this.turn++;
    }
  }

  main() {
    this.generateCompNums();
    console.log(this.array);
    this.turn = 0;
    this.startTurn();
  }
}

const container = document.getElementById("wiresContainer");
const wires = new CreateWires(container);

const game = new OrderingGame(wires.getRobinContainers());
game.main();
