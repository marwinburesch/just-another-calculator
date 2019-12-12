import styled from "@emotion/styled";
import colors from "../utils/colors";

const ActionKey = styled.button`
  all: unset;
  grid-column: ${props => props.gridColumn};
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
