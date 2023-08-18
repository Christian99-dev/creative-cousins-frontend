import React from "react";
import GlobalStyle from "../theme/global";

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyle  />
      {children}
    </div>
  )
}