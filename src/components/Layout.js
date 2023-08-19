import React from "react";
import GlobalStyle from "../theme/global";

export default function Layout({ children }) {
  return (
    <main>
      <GlobalStyle  />
      {children}
    </main>
  )
}