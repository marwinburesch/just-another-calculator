import React, { useState } from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import Display from "./Display";
import ActionKey from "./ActionKey";
import NumberKey from "./NumberKey";
import { add, substract, multiply, divide } from "../api/operations";

const Grid = styled.div`
  width: 400px;
  height: 500px;
  border: solid ${colors.lining};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default function Calculator() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [nextHasBeenPressed, setNextHasBeenPressed] = useState(false);
  const [result, setResult] = useState(null);

  console.log(firstNum);
  console.log(secondNum);
  console.log(nextHasBeenPressed);

  function handleNumKeyPress(value) {
    if (!nextHasBeenPressed) {
      setFirstNum(firstNum + value);
    } else {
      setSecondNum(secondNum + value);
    }
  }

  function handleActionKeyPress(key) {
    switch (key) {
      case "next":
        setNextHasBeenPressed(true);
        break;
      case "+":
        setResult(add(firstNum, secondNum));
        break;
      case "-":
        setResult(substract(firstNum, secondNum));
        break;
      case "x":
        setResult(multiply(firstNum, secondNum));
        break;
      case "/":
        setResult(divide(firstNum, secondNum));
        break;
      default:
        console.log("press keys damnit");
    }
  }

  return (
    <Grid>
      <Display>{result}</Display>
      {[7, 8, 9].map(value => (
        <NumberKey key={value} value={value} onClick={handleNumKeyPress} />
      ))}
      <ActionKey value={"/"} onClick={handleActionKeyPress} />
      {[4, 5, 6].map(value => (
        <NumberKey key={value} value={value} onClick={handleNumKeyPress} />
      ))}
      <ActionKey value={"x"} onClick={handleActionKeyPress} />
      {[1, 2, 3].map(value => (
        <NumberKey key={value} value={value} onClick={handleNumKeyPress} />
      ))}
      <ActionKey value={"-"} onClick={handleActionKeyPress} />
      <NumberKey key={0} value={0} onClick={handleNumKeyPress} />
      <ActionKey value={"+"} onClick={handleActionKeyPress} />
      <ActionKey value={"next"} onClick={handleActionKeyPress} />
    </Grid>
  );
}
