
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function GPU({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 1, 0.5]} />
      <meshStandardMaterial color="#F97316" />
    </mesh>
  );
}

export const ThreeScene = () => {
  return (
    <div style={{ width: '100%', height: '400px', background: 'rgba(0,0,0,0.3)' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GPU position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
