
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const children = "Hover over me";
  const tooltip = 'this is tool tip'

  return (
    <div id="main">
      <Tooltip tooltip={tooltip} children={children} />
    </div>
  )
}

export default App
