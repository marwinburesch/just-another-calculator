import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import colors from "./utils/colors";
import Calculator from "./components/Calculator";

const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: ${colors.base};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ContentWrapper>
        <h1> cologne calc...</h1>
        <Calculator />
      </ContentWrapper>
    </>
  );
}

export default App;
