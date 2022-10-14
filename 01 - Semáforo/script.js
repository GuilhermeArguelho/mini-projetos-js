const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const handleColor = (event) => {

  stopAutomatic();
  turnOn[event.target.id]();
  let botao = event.target;
  console.log(botao);
};

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => (intervalId = setInterval(changeColor, 1000)),
};

buttons.addEventListener("click", handleColor);

const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

const stopAutomatic = () => clearInterval(intervalId);

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

console.log(buttons);
