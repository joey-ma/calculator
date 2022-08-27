let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".calculations");

export default {
  runningTotal: 0,
  buffer: "0",
  previousOperator: undefined,
  buttonClick: function buttonClick(value) {
    console.log("value clicked: ", value);
    if (isNaN(parseInt(value))) {
      this.handleSymbol(value);
    } else {
      this.handleNumber(value);
    }
    this.rerender();
  },

  handleNumber: function handleNumber(value) {
    if (this.buffer === "0") {
      this.buffer = value;
    } else {
      this.buffer += value;
    }
  },

  handleMath: function handleMath(value) {
    if (this.buffer === "0") {
      // do nothing
      return;
    }

    const intBuffer = parseInt(this.buffer);
    if (this.runningTotal === 0) {
      this.runningTotal = intBuffer;
    } else {
      this.flushOperation(intBuffer);
    }

    previousOperator = value;

    this.buffer = "0";
  },

  flushOperation: function flushOperation(intBuffer) {
    if (previousOperator === "+") {
      this.runningTotal += intBuffer;
    } else if (previousOperator === "-") {
      this.runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
      this.runningTotal *= intBuffer;
    } else {
      this.runningTotal /= intBuffer;
    }
  },

  handleSymbol: function handleSymbol(value) {
    switch (value) {
      case "AC":
        this.buffer = "0";
        this.runningTotal = 0;
        break;
      case "=":
        if (previousOperator === null) {
          // need two numbers to do math
          return;
        }
        this.flushOperation(parseInt(this.buffer));
        previousOperator = null;
        this.buffer = +this.runningTotal;
        this.runningTotal = 0;
        break;
      case "←":
        if (this.buffer.length === 1) {
          this.buffer = "0";
        } else {
          this.buffer = this.buffer.substring(0, this.buffer.length - 1);
        }
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        this.handleMath(value);
        break;
    }
  },

  rerender: function rerender() {
    screen.innerText = this.buffer;
  },
};
