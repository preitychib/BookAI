import React from "react";

const dots = [
  { top: "10%", left: "20%" },
  { top: "30%", left: "80%" },
  { top: "90%", left: "50%" },
  { top: "40%", left: "10%" },
  { top: "60%", left: "90%" },
];

const Dots = () => {
  return (
    <div className="relative w-full h-full overflow-hidden fixed inset-0">
      {/* Dots moving from bottom to top */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-[6px] h-[6px] rounded-full bg-gray-300"
          style={{
            top: dot.top,
            left: dot.left,
            animation: "moveUpDown 10s infinite ease-in-out"
          }}
        />
      ))}

      {/* Dots moving from top to bottom */}
      {dots.map((dot, index) => (
        <div
          key={index + dots.length}
          className="absolute w-[6px] h-[6px] rounded-full bg-gray-300"
          style={{
            top: dot.top,
            left: dot.left,
            animation: "moveDownUp 10s infinite ease-in-out"
          }}
        />
      ))}

      {/* Dots moving from left to right */}
      {dots.map((dot, index) => (
        <div
          key={index + dots.length * 2}
          className="absolute w-[6px] h-[6px] rounded-full bg-gray-300"
          style={{
            top: dot.top,
            left: dot.left,
            animation: "moveLeftRight 10s infinite ease-in-out"
          }}
        />
      ))}

      {/* Dots moving from right to left */}
      {dots.map((dot, index) => (
        <div
          key={index + dots.length * 3}
          className="absolute w-[6px] h-[6px] rounded-full bg-gray-300"
          style={{
            top: dot.top,
            left: dot.left,
            animation: "moveRightLeft 10s infinite ease-in-out"
          }}
        />
      ))}

      <style>
        {`
          body {
            margin: 0;
            overflow: hidden;
          }

          @keyframes moveUpDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-500px);
            }
          }

          @keyframes moveDownUp {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(500px);
            }
          }

          @keyframes moveLeftRight {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(500px);
            }
          }

          @keyframes moveRightLeft {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-500px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Dots;
