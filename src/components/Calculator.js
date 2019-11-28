import React from "react";
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
  return (
    <Grid>
      <Display />
      <NumberKey />
      <NumberKey />
      <NumberKey />
      <ActionKey />
      <NumberKey />
      <NumberKey />
      <NumberKey />
      <ActionKey />
      <NumberKey />
      <NumberKey />
      <NumberKey />
      <ActionKey />
      <NumberKey number={0} />
      <ActionKey />
    </Grid>
  );
}
