import React from "react";
import GlobalStyle from "../theme/global";

export default function Root({ children }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <GlobalStyle />
      {children}
    </div>
  );
}
