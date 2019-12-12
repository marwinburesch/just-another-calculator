import styled from "@emotion/styled";
import colors from "../utils/colors";

const gridColumn = {
  0: "1/4"
};

const NumberKey = styled.button`
  all: unset;
  grid-column: ${props => gridColumn[props.value]};
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

export default NumberKey;
