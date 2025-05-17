import React from "react";

const Tooltip = ({ tooltip, children }) => {
  return (
    <div>
      <div className="tooltip">
        {children}
        <span className="tooltiptext">{tooltip}</span>
      </div>
      
    </div>
  );
};

export default Tooltip;
