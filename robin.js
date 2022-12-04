export class Robin {
  constructor(index, num, container) {
    this.index = index;
    this.num = num;
    const robin = document.createElement("div");
    robin.classList.add("robin");
    robin.id = index.toString();
    const beak = document.createElement("div");
    beak.classList.add("beak");
    const breast = document.createElement("div");
    breast.classList.add("breast");
    const numText = document.createElement("p");
    numText.innerText = num;

    breast.appendChild(numText);
    robin.appendChild(beak);
    robin.appendChild(breast);
    container.appendChild(robin);
  }
}
