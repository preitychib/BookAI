import React from "react";

const Dot = ({ style }) => {
  return (
    <div
      className="dot absolute w-[6px] h-[6px] rounded-full bg-gray-300"
      style={style}
    ></div>
  );
};

export default Dot;
