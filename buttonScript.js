const rulesButton = document.getElementById("rulesButton");
const backButton = document.getElementById("backButton");
const startButton = document.getElementById("startButton");

try {
  rulesButton.addEventListener("click", () => {
    window.location.href = "./rules.html";
  });
} catch {}

try {
  backButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
} catch {}

try {
  startButton.addEventListener("click", () => {
    window.location.href = "./game.html";
  });
} catch {}
