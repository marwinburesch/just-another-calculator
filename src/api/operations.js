function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

const operatorFunctions = {
  "+": add,
  "-": sub,
  "*": multi,
  "/": div
};

export default function calculateResult(operator, a, b) {
  const operatorFunction = operatorFunctions[operator];
  if (!operatorFunction) {
    throw new Error("Unknown operator" + operator);
  }
  return operatorFunction(a, b);
}
