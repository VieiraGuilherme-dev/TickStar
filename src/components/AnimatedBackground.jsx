import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const stars = Array.from({ length: 50 });

  return (
    <div className="stars">
      {stars.map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
