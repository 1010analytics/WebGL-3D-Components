import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 10; // Move the camera further back to fit the larger cube

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400); // Renderer size
    mountRef.current.appendChild(renderer.domElement);

    // Wireframe Cube
    const geometry = new THREE.BoxGeometry(5, 5, 5); // Larger cube with size 5x5x5
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff }); // Cyan color
    const cube = new THREE.LineSegments(wireframe, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01; // Rotate the cube
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ margin: '10px', display: 'inline-block' }}></div>;
};

export default Cube;
