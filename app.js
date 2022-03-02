const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
  pow: (a, b) => Math.pow(a, b),
};

const addResult = calculator.add(5, 7);
const subResult = calculator.sub(5, 7);
const mulResult = calculator.mul(5, 7);
const powResult = calculator.pow(5, 7);
const divResult = calculator.div(5, 7);

console.log(addResult, subResult, mulResult, powResult, divResult);
