import React from "react";
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif", lineHeight: 2 }}>
      <Tooltip text="Hello, I’m a tooltip!">
        <button>Hover me</button>
      </Tooltip>

      <br />

      <Tooltip text="More details here">
        <span style={{ borderBottom: "1px dashed" }}>Plain text with tooltip</span>
      </Tooltip>

      <br />

      <Tooltip text="Even images can have tooltips">
        <img
          src="https://placekitten.com/80/80"
          alt="cat"
          style={{ borderRadius: "50%" }}
        />
      </Tooltip>
    </div>
  );
}
