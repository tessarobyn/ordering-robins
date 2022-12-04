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

  moveRobin(index, num) {
    const container = this.robinContainers.get(index);
    container.innerHTML = "";
    container.appendChild(this.currentRobin.robin);
    this.userArray.assign(index, num);
  }

  checkMoveAllowed(index, num) {
    let lowFound = false;
    let lowOk = false;
    let currentIndex = index--;
    for (let i = currentIndex; i >= 0; i--) {
      if (this.userArray.get(i) != undefined && !lowFound) {
        lowFound = true;
        if (this.userArray.get(i) <= num) {
          lowOk = true;
        }
      }
    }
    if (!lowFound) {
      lowOk = true;
    }

    let highFound = false;
    let highOk = false;
    currentIndex = index += 1;
    for (let i = currentIndex; i < this.userArray.getSize(); i++) {
      if (this.userArray.get(i) != undefined && !highFound) {
        highFound = true;
        if (this.userArray.get(i) >= num) {
          highOk = true;
        }
      }
    }
    if (!highFound) {
      highOk = true;
    }

    if (lowOk && highOk) {
      return true;
    } else {
      return false;
    }
  }

  checkContainerClick() {
    for (let i = 0; i < this.robinContainers.getSize(); i++) {
      this.robinContainers.get(i).addEventListener("click", () => {
        if (
          this.checkMoveAllowed(
            this.robinContainers.get(i).id,
            this.currentRobin.num
          ) === true
        ) {
          this.moveRobin(this.robinContainers.get(i).id, this.currentRobin.num);
          this.startTurn();
        }
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
      this.robinNumText.innerText = "You win!";
    } else {
      this.currentRobin = this.newRobin(this.turn);
      this.robinNumText.innerText = `Robin Number ${this.turn}`;
      this.turn++;
      this.gameOver = true;
      for (let i = 0; i < this.userArray.getSize(); i++) {
        if (this.userArray.get(i) == undefined) {
          if (this.checkMoveAllowed(i, this.currentRobin.num) == true) {
            this.gameOver = false;
          }
        }
      }
      if (this.gameOver) {
        this.robinNumText.innerText = `${this.currentRobin.num} doesn't fit. You lose!`;
      }
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
