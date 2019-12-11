import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

const Key = styled.button`
  all: unset;
  grid-column: ${props => props.span};
  background: ${colors.medium};
  box-shadow: inset -3px -3px 0 ${colors.mediumAccent};
  text-align: center;
  color: white;
  font-size: 30px;
  user-select: none;
  &:active {
    transform: scale(0.95);
  }
`;

export default function NumberKey({ value, onClick }) {
  let span = "span 1";
  if (value === 0) {
    span = "span 3";
  }

  function handleClick() {
    onClick(value);
  }

  return (
    <Key span={span} onClick={handleClick}>
      {value.toString()}
    </Key>
  );
}
