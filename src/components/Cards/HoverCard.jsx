import React, { useState } from "react";

const HoverCard = ({ triggerContent, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div>{triggerContent}</div>
      {isHovered && (
        <div
          className="absolute z-10 rounded-xl bg-heroBackground p-2 shadow-lg backdrop-blur-3xl dark:bg-[#111111]/50"
          style={{
            left: mouseX,
            top: "20%",
            transform: "translateY(-80%) translateX(-50%)",
          }}
        >
          {hoverContent}
        </div>
      )}
    </div>
  );
};

export default HoverCard;
