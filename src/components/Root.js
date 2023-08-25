import React from "react";
import GlobalStyle from "../theme/global";

export default function Root({ children }) {  
  return (
    <main style={{overflow: "hidden"}}>
      <GlobalStyle  />
      {children}
    </main>
  )
}