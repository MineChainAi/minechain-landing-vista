
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

    // Create cubes
    const cubes: THREE.Mesh[] = [];
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0xF97316,
      opacity: 0.8,
      transparent: true,
      side: THREE.DoubleSide,
    });

    // Create multiple cubes in a network formation
    for (let i = 0; i < 8; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial.clone());
      cube.position.x = (Math.random() - 0.5) * 8;
      cube.position.y = (Math.random() - 0.5) * 8;
      cube.position.z = (Math.random() - 0.5) * 8;
      scene.add(cube);
      cubes.push(cube);
    }

    // Add lines connecting cubes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0EA5E9,
      opacity: 0.3,
      transparent: true,
    });

    for (let i = 0; i < cubes.length; i++) {
      for (let j = i + 1; j < cubes.length; j++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          cubes[i].position,
          cubes[j].position,
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
      }
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 15;

    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Rotate cubes
      cubes.forEach((cube, index) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // Add subtle floating movement
        cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });

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
