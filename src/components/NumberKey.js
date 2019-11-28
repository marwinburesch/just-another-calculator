import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

const Key = styled.div`
  grid-column: ${props => props.span};
  background: ${colors.medium};
  box-shadow: inset -3px -3px 0 ${colors.mediumAccent};
  text-align: center;
  color: white;
  font-size: 30px;
  line-height: 80px;
`;

export default function NumberKey({ number }) {
  let span = "";
  if (number === 0) {
    span = "span 3";
  }
  return <Key span={span}>{number}</Key>;
}
