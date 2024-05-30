// Button.js
import React from "react";

function Button({ onClick, buttonName, style, width, height, backgroundColor }) {
  return (
    <div>
      <button
        className="button-style text-black rounded-xl"
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor || "purple",
          color: "white",
          width: width,
          height: height,
          ...style,
        }}
      >
        {buttonName}
      </button>
    </div>
  );
}

export default Button;
