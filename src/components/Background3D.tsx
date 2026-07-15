"use client";

import React, { useEffect, useState } from "react";

export default function Background3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate coordinates relative to viewport center (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="glass-shape-container">
      {/* Sphere Shape: Floating on the right side */}
      <div 
        className="glass-shape shape-sphere"
        style={{
          transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px) translate3d(0, 0, 0)`,
        }}
      />
      
      {/* Torus Ring Shape: Floating on the left side */}
      <div 
        className="glass-shape shape-torus"
        style={{
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px) rotateX(${mousePos.y * 15}deg) rotateY(${mousePos.x * 15}deg) translate3d(0, 0, 0)`,
        }}
      />
      
      {/* Cube Shape: Floating in the center-right region */}
      <div 
        className="glass-shape shape-cube"
        style={{
          transform: `translate(${mousePos.x * 45}px, ${mousePos.y * -45}px) rotateX(${mousePos.y * -25}deg) rotateY(${mousePos.x * 25}deg) translate3d(0, 0, 0)`,
        }}
      />
    </div>
  );
}
