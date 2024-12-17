let display = document.getElementById("display");
let currentExpression = "";

function appendCharacter(char) {
  if (currentExpression === "0" && char !== ".") {
    currentExpression = char;
  } else {
    currentExpression += char;
  }
  updateDisplay();
}

function clearDisplay() {
  currentExpression = "";
  updateDisplay();
}

function undo() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentExpression = eval(currentExpression).toString();
  } catch (error) {
    currentExpression = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentExpression || "0";
}
