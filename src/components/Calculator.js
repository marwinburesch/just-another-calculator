import React, { useState } from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import Display from "./Display";
import ActionKey from "./ActionKey";
import NumberKey from "./NumberKey";
import { calculateResult } from "../api/operations";

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
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  console.log(firstNum, operator, secondNum, result);

  function getResult() {
    setResult(calculateResult(operator, firstNum, secondNum));
    setOperator(null);
  }

  function handleNumKeyPress(value) {
    operator ? setSecondNum(secondNum + value) : setFirstNum(firstNum + value);
  }

  function handleActionKeyPress(key) {
    setOperator(key);
  }

  return (
    <Grid>
      {/* display should show input,on getResult the result */}
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
      <ActionKey value={"="} onClick={getResult} />
    </Grid>
  );
}
