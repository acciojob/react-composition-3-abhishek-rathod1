import React, { useState } from "react";

/**
 * Props:
 *  - text: string  → content shown inside the tooltip bubble
 *  - children      → any React node over which the tooltip appears
 */
export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <span
      className="tooltip"
      onMouseEnter={show}
      onMouseLeave={hide}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}

      {visible && (
        <span
          className="tooltiptext"
          style={{
            position: "absolute",
            bottom: "125%",          /* above the element */
            left: "50%",
            transform: "translateX(-50%)",
            padding: "6px 10px",
            borderRadius: 4,
            background: "#333",
            color: "#fff",
            fontSize: 12,
            whiteSpace: "nowrap",
            zIndex: 1000,
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
}
