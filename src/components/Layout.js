import React from "react";
import GlobalStyle from "../theme/global";

export default function Layout({ children }) {
  return (
    <main style={{overflowY: "hidden"}}>
      <GlobalStyle  />
      {children}
    </main>
  )
}