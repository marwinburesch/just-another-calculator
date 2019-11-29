import styled from "@emotion/styled";
import React from "react";
import colors from "../utils/colors";

const NumberDisplay = styled.div`
  grid-area: 1 / 1 / 1 / 5;
  background: ${colors.dark};
  box-shadow: inset 0 -3px 0 ${colors.darkAccent};
`;

export default function Display({ value }) {
  return <NumberDisplay>{value}</NumberDisplay>;
}
