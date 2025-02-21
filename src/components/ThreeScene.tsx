
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Create GPU-like box with details
    const gpuGeometry = new THREE.BoxGeometry(2, 0.5, 1);
    const gpuMaterial = new THREE.MeshPhongMaterial({ 
      color: '#F97316',
      specular: 0x111111,
      shininess: 30,
      emissive: '#F97316',
      emissiveIntensity: 0.2,
    });
    const gpu = new THREE.Mesh(gpuGeometry, gpuMaterial);
    gpu.castShadow = true;
    gpu.receiveShadow = true;
    scene.add(gpu);

    // Add fan details (circles)
    const fanGeometry = new THREE.CircleGeometry(0.15, 32);
    const fanMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x444444,
      side: THREE.DoubleSide 
    });
    
    // Create two fans
    const fan1 = new THREE.Mesh(fanGeometry, fanMaterial);
    const fan2 = new THREE.Mesh(fanGeometry, fanMaterial);
    
    fan1.position.set(0.5, 0.26, 0);
    fan2.position.set(-0.5, 0.26, 0);
    fan1.rotation.x = Math.PI / 2;
    fan2.rotation.x = Math.PI / 2;
    
    gpu.add(fan1);
    gpu.add(fan2);

    // Add circuit-like details
    const circuitGeometry = new THREE.BoxGeometry(1.8, 0.05, 0.8);
    const circuitMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x222222,
      emissive: '#F97316',
      emissiveIntensity: 0.1,
    });
    const circuit = new THREE.Mesh(circuitGeometry, circuitMaterial);
    circuit.position.y = 0.25;
    gpu.add(circuit);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add point lights for glow effect
    const pointLight1 = new THREE.PointLight(0xF97316, 1, 5);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0EA5E9, 1, 5);
    pointLight2.position.set(-2, 2, -2);
    scene.add(pointLight2);

    // Position camera
    camera.position.z = 5;
    camera.position.y = 1;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth GPU rotation
      gpu.rotation.y += 0.01;
      
      // Fan rotation animation
      fan1.rotation.z += 0.1;
      fan2.rotation.z += 0.1;
      
      // Subtle floating animation
      gpu.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      
      // Light animation
      pointLight1.intensity = 1 + Math.sin(Date.now() * 0.002) * 0.5;
      pointLight2.intensity = 1 + Math.cos(Date.now() * 0.002) * 0.5;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[400px] bg-transparent"
      style={{ 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))'
      }}
    />
  );
};
