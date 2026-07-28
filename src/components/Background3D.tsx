"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

const ParticleWave = () => {
  const meshRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const { resolvedTheme } = useTheme();

  // Create a grid of particles
  const count = 100;
  const sep = 0.25; // separation
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    const colors = new Float32Array(count * count * 3);
    
    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iy = 0; iy < count; iy++) {
        // x, y, z
        positions[i] = ix * sep - (count * sep) / 2; // centered
        positions[i + 1] = 0; // y calculated in animation
        positions[i + 2] = iy * sep - (count * sep) / 2;

        colors[i] = 1.0;
        colors[i + 1] = 1.0;
        colors[i + 2] = 1.0;

        i += 3;
      }
    }
    return [positions, colors];
  }, [count, sep]);

  const pointMaterialRef = useRef<THREE.PointsMaterial>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iy = 0; iy < count; iy++) {
        const x = positions[i];
        const z = positions[i + 2];
        
        const wave1 = Math.sin((ix + time * 1.5) * 0.1) * 0.5;
        const wave2 = Math.cos((iy + time * 1.2) * 0.1) * 0.5;
        const wave3 = Math.sin((ix * iy + time * 0.5) * 0.02) * 0.3;
        
        const dx = mouse.x * 10 - x;
        const dy = -mouse.y * 10 - z;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const mouseRipple = Math.max(0, 1 - distance / 4) * Math.sin(distance * 3 - time * 5) * 0.8;

        positions[i + 1] = wave1 + wave2 + wave3 + mouseRipple;
        i += 3;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    
    meshRef.current.rotation.y = Math.sin(time * 0.1) * 0.2;
    meshRef.current.position.y = -2;
    meshRef.current.position.z = -5;
    meshRef.current.rotation.x = Math.PI / 6;
  });

  const isDark = resolvedTheme === "dark";
  const particleColor = isDark ? "#A0A83C" : "#BF4B0A";
  const opacity = isDark ? 0.3 : 0.4;

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={pointMaterialRef}
        size={0.05}
        color={particleColor}
        transparent
        opacity={opacity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Scene = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  return (
    <>
      <fog attach="fog" args={[isDark ? "#16140F" : "#F2EEE6", 5, 25]} />
      <ParticleWave />
    </>
  );
};

export default function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "var(--background)",
      }}
    >
      <Canvas camera={{ position: [0, 3, 15], fov: 60 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
