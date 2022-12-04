function createWires(container) {
  let numOfWires;
  let numOfRobins;
  if (container.offsetWidth < 1000) {
    document.body.style.height = "auto";
    numOfWires = 5;
    numOfRobins = 2;
  } else if (container.offsetWidth < 1700) {
    numOfWires = 2;
    numOfRobins = 5;
  } else {
    numOfWires = 1;
    numOfRobins = 10;
  }
  let robinNum = 0;
  for (let i = 0; i < numOfWires; i++) {
    const wire = document.createElement("div");
    wire.classList.add("wire");
    for (let j = 0; j < numOfRobins; j++) {
      const robinContainer = document.createElement("div");
      robinContainer.classList.add("robinContainer");
      robinContainer.id = `robinContainer${robinNum}`;
      const p = document.createElement("p");
      p.innerText = robinNum.toString();
      robinContainer.appendChild(p);
      wire.appendChild(robinContainer);
      robinNum++;
    }
    container.appendChild(wire);
  }
}

const container = document.getElementById("wiresContainer");
createWires(container);
