
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";
import * as THREE from "three";

function GPU({ position }: { position: [number, number, number] }) {
  const gpuRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (gpuRef.current) {
      gpuRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={gpuRef} position={position}>
      {/* GPU Body */}
      <mesh>
        <boxGeometry args={[2, 1, 0.5]} />
        <meshStandardMaterial color="#F97316" />
      </mesh>

      {/* Cooling Fans */}
      <mesh position={[0.6, 0.4, 0.3]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#404040" />
      </mesh>
      <mesh position={[-0.6, 0.4, 0.3]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#404040" />
      </mesh>

      {/* Glow Effect */}
      <mesh position={[0, 0, 0.3]}>
        <planeGeometry args={[2.2, 1.2]} />
        <meshBasicMaterial color="#0EA5E9" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function MiningRig() {
  return (
    <group>
      {/* GPUs in a Row */}
      {[...Array(4)].map((_, i) => (
        <GPU key={i} position={[i * 2.5 - 3.75, 0, 0]} />
      ))}

      {/* Support Structure */}
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[10, 0.3, 1.5]} />
        <meshStandardMaterial color="#2C2C2C" />
      </mesh>
    </group>
  );
}

export const ThreeScene = () => {
  return (
    <div className="h-[500px] w-full relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 3, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <SpotLight position={[5, 5, 5]} angle={0.3} intensity={2} />
        <OrbitControls enableZoom={true} />
        <MiningRig />
      </Canvas>
    </div>
  );
};
