import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Tomorrow", sans-serif;
        }
        h1 {
          color: white;
        }
      `}
    />
  );
}
