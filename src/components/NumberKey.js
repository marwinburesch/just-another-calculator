import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

const Key = styled.div`
  width: 100px;
  background: ${colors.medium};
  box-shadow: inset -3px -3px 0 ${colors.mediumAccent};
`;

export default function NumberKey({ number }) {
  return <Key>{number}</Key>;
}
