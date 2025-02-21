
import React, { useRef, Suspense } from "react";
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
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 1, 0.5]} />
        <meshStandardMaterial color="#F97316" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Cooling Fans */}
      <mesh position={[0.6, 0.4, 0.3]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.6, 0.4, 0.3]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Glow Effect */}
      <mesh position={[0, 0, 0.3]}>
        <planeGeometry args={[2.2, 1.2]} />
        <meshBasicMaterial color="#0EA5E9" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function MiningRig() {
  return (
    <group position={[0, 0, -2]}>
      {/* GPUs in a Row */}
      {[...Array(4)].map((_, i) => (
        <GPU key={i} position={[i * 2.5 - 3.75, 0, 0]} />
      ))}

      {/* Support Structure */}
      <mesh position={[0, -0.7, 0]} receiveShadow>
        <boxGeometry args={[10, 0.3, 1.5]} />
        <meshStandardMaterial color="#2C2C2C" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <SpotLight 
        position={[5, 5, 5]} 
        angle={0.3} 
        penumbra={1}
        intensity={1} 
        castShadow
      />
      <MiningRig />
    </>
  );
}

export const ThreeScene = () => {
  return (
    <div className="w-full h-[400px] bg-black/30">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene />
          <PerspectiveCamera makeDefault position={[0, 3, 10]} fov={50} />
          <OrbitControls 
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
