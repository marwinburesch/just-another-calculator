import styled from "@emotion/styled";
import colors from "../utils/colors";

const gridColumn = {
  "=": "1/5"
};

const ActionKey = styled.button`
  all: unset;
  grid-column: ${props => gridColumn[props.value]};
  background: ${colors.light};
  box-shadow: inset -3px -3px 0 ${colors.lightAccent};
  text-align: center;
  color: white;
  font-size: 30px;
  user-select: none;
  &:active {
    transform: scale(0.95);
  }
`;

export default ActionKey;
