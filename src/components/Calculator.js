import React, { useState } from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import Display from "./Display";
import ActionKey from "./ActionKey";
import NumberKey from "./NumberKey";
import calculateResult from "../api/operations";

const Grid = styled.div`
  width: 400px;
  height: 500px;
  border: solid ${colors.lining};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const NumberPad = styled.div`
  grid-column: 1/4;
  grid-row: 2 / 6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export default function Calculator() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  console.log(firstNum, operator, secondNum, result);

  function getResult() {
    setResult(calculateResult(operator, firstNum, secondNum));
    reset();
  }

  function reset() {
    setOperator(null);
    setFirstNum("");
    setSecondNum("");
  }

  function handleNumKeyPress(value) {
    if (operator) {
      setSecondNum(secondNum * 10 + value);
    } else {
      setFirstNum(firstNum * 10 + value);
    }
  }

  function handleActionKeyPress(key) {
    setOperator(key);
  }

  return (
    <Grid>
      {/* display should show input,on getResult the result */}
      <Display>{result}</Display>
      <NumberPad>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(value => (
          <NumberKey
            key={value}
            value={value}
            onClick={() => {
              handleNumKeyPress(value);
            }}
          >
            {value.toString()}
          </NumberKey>
        ))}
        <NumberKey
          key={0}
          value={0}
          gridColumn={"1 / 4"}
          onClick={() => handleNumKeyPress(0)}
        >
          {0}
        </NumberKey>
      </NumberPad>
      <ActionKey value={"/"} onClick={handleActionKeyPress} />
      <ActionKey value={"*"} onClick={handleActionKeyPress} />
      <ActionKey value={"-"} onClick={handleActionKeyPress} />
      <ActionKey value={"+"} onClick={handleActionKeyPress} />
      <ActionKey value={"="} onClick={getResult} />
    </Grid>
  );
}
