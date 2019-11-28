import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

const colors = {
  base: "#00232E",
  lining: "#46595A"
};

const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: ${colors.base};
`;

const Calculator = styled.div`
  width: 300px;
  height: 500px;
  border: solid ${colors.lining};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ContentWrapper>
        <Calculator />
      </ContentWrapper>
    </>
  );
}

export default App;
