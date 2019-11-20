import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          color: hotpink;
          display: flex;
          width: 100vw;
          height: 100%;
          background: #282c34;
          justify-content: center;
          align-items: center;

          margin: 0;
          font-family: "Alatsi", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
