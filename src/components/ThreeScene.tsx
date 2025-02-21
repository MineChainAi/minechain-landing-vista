
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create GPU rack structure
    const rackGroup = new THREE.Group();

    // Create base platform
    const baseGeometry = new THREE.BoxGeometry(8, 0.2, 4);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x2C2C2C });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    rackGroup.add(base);

    // Create GPUs
    const gpuGeometry = new THREE.BoxGeometry(3, 0.6, 2);
    const gpuMaterial = new THREE.MeshPhongMaterial({
      color: 0xF97316,
      opacity: 0.9,
      transparent: true,
      metalness: 0.8,
      roughness: 0.2,
    });

    // Add multiple GPUs in a rack formation
    for (let i = 0; i < 4; i++) {
      const gpu = new THREE.Mesh(gpuGeometry, gpuMaterial.clone());
      gpu.position.y = 1 + (i * 0.8); // Stack GPUs vertically
      gpu.position.x = (Math.random() - 0.5) * 0.2; // Slight random offset
      rackGroup.add(gpu);

      // Add glowing effect for each GPU
      const glowGeometry = new THREE.BoxGeometry(3.2, 0.7, 2.2);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x0EA5E9,
        transparent: true,
        opacity: 0.1,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.copy(gpu.position);
      rackGroup.add(glow);

      // Add "cooling fans" (cylinders)
      const fanGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 12);
      const fanMaterial = new THREE.MeshPhongMaterial({ color: 0x404040 });
      for (let j = 0; j < 2; j++) {
        const fan = new THREE.Mesh(fanGeometry, fanMaterial);
        fan.rotation.x = Math.PI / 2;
        fan.position.copy(gpu.position);
        fan.position.z = 0.8 * (j === 0 ? 1 : -1);
        rackGroup.add(fan);
      }
    }

    // Add support structure
    const supportGeometry = new THREE.CylinderGeometry(0.1, 0.1, 4, 8);
    const supportMaterial = new THREE.MeshPhongMaterial({ color: 0x404040 });
    
    for (let i = 0; i < 4; i++) {
      const support = new THREE.Mesh(supportGeometry, supportMaterial);
      support.position.y = 2;
      support.position.x = (i < 2 ? 3.5 : -3.5);
      support.position.z = (i % 2 === 0 ? 1.5 : -1.5);
      rackGroup.add(support);
    }

    scene.add(rackGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0x0EA5E9, 0.5);
    backLight.position.set(-1, 2, -1);
    scene.add(backLight);

    // Position camera
    camera.position.z = 10;
    camera.position.y = 5;
    camera.lookAt(0, 2, 0);

    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Rotate entire rack slowly
      rackGroup.rotation.y += 0.005;

      // Add subtle floating movement
      rackGroup.position.y = Math.sin(Date.now() * 0.001) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{ minHeight: '400px' }}
    />
  );
};
