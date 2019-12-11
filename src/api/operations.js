export function calculateResult(operator, a, b) {
  let result = null;
  switch (operator) {
    case "+":
      result = parseInt(a) + parseInt(b);
      return result;
    case "-":
      result = parseInt(a) - parseInt(b);
      return result;
    case "x":
      result = parseInt(a) * parseInt(b);
      return result;
    case "/":
      result = parseInt(a) / parseInt(b);
      return result;
    default:
      return result;
  }
}
