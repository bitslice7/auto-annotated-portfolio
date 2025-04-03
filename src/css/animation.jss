// src/css/animation.js

import * as THREE from 'three';

export default function runAnimation(canvas) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // --- Scene Setup ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 25;
  camera.rotation.z = Math.PI / 4;

  // --- Create the Extruded Ring ---
  const outerRadius = 9;
  const innerRadius = 8;
  const ringShape = new THREE.Shape();
  ringShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);
  const holePath = new THREE.Path();
  holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
  ringShape.holes.push(holePath);
  const extrudeSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: false,
    curveSegments: 64,
  };
  const ringGeometry = new THREE.ExtrudeGeometry(ringShape, extrudeSettings);
  ringGeometry.center();
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const extrudedRing = new THREE.Mesh(ringGeometry, ringMaterial);
  scene.add(extrudedRing);

  // --- Additional Scene Objects (e.g., circles) ---
  const centerCircleRadius = 5;
  const centerCircleGeometry = new THREE.CircleGeometry(centerCircleRadius, 64);
  const centerCircleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const centerCircle = new THREE.Mesh(centerCircleGeometry, centerCircleMaterial);
  centerCircle.position.z = 1.51;
  scene.add(centerCircle);

  const blackCircleRadius = 4;
  const blackCircleGeometry = new THREE.CircleGeometry(blackCircleRadius, 64);
  const blackCircleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const blackCircle = new THREE.Mesh(blackCircleGeometry, blackCircleMaterial);
  blackCircle.position.z = centerCircle.position.z + 0.01;
  scene.add(blackCircle);

  // --- Scroll-Based Rotation ---
  const onScroll = () => {
    const scrollFraction =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const effectiveFraction = Math.min(scrollFraction / 0.2, 1);
    extrudedRing.rotation.x = effectiveFraction * (Math.PI / 2);
    extrudedRing.rotation.y = effectiveFraction * (Math.PI / 2);
  };
  window.addEventListener('scroll', onScroll);

  // --- Animation Loop ---
  let animationFrameId;
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  // --- Handle Window Resizing ---
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);

  // Return a cleanup function
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animationFrameId);
    renderer.dispose();
  };
}
