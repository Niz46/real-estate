import { useState } from "react";

const Motion = ({ children }) => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Apply a factor to reduce speed of movement
    const speedFactor = 0.6;

    const percentageX = (mouseX / screenWidth) * 80 * speedFactor;
    const percentageY = (mouseY / screenHeight) * 80 * speedFactor;

    setPosition({
      x: `${50 + percentageX}%`, 
      y: `${50 + percentageY}%`,
    });
  };

  return (
    <div
      className="bg-hero bg-cover bg-center bg-no-repeat h-[100vh] w-full"
      style={{
        backgroundPosition: `${position.x} ${position.y}`,
      }}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default Motion;
