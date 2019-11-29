import React, { useState } from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import Display from "./Display";
import ActionKey from "./ActionKey";
import NumberKey from "./NumberKey";

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

  function handleNumKeyPress(value) {
    console.log(value + " has been pressed");
  }

  function handleActionKeyPress(key) {
    console.log(key);
  }

  return (
    <Grid>
      <Display />
      <NumberKey number={7} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={8} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={9} onNumKeyPress={handleNumKeyPress} />
      <ActionKey action={"/"} onActionKeyPress={handleActionKeyPress} />
      <NumberKey number={4} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={5} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={6} onNumKeyPress={handleNumKeyPress} />
      <ActionKey action={"x"} onActionKeyPress={handleActionKeyPress} />
      <NumberKey number={1} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={2} onNumKeyPress={handleNumKeyPress} />
      <NumberKey number={3} onNumKeyPress={handleNumKeyPress} />
      <ActionKey action={"-"} onActionKeyPress={handleActionKeyPress} />
      <NumberKey number={0} onNumKeyPress={handleNumKeyPress} />
      <ActionKey action={"+"} onActionKeyPress={handleActionKeyPress} />
      <ActionKey action={"next"} onActionKeyPress={handleActionKeyPress} />
    </Grid>
  );
}
