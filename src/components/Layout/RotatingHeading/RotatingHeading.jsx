import React from "react";
import "./RotatingHeading.css";

const heading = ["ReactBites", "ReactBites", "ReactBites"];

const RotatingText = () => {
  return (
    <div className="wrapper">
      <div className="words">
        {heading.map((item) => {
          return <span key={Math.random()}>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default RotatingText;
