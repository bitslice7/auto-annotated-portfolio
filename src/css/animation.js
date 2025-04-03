// src/css/animation.js
import * as THREE from 'three';

export default function runAnimation(canvas) {
  // --- Scene Setup ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Use the provided canvas element.
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // --- Create the Extruded Ring (Hollow Disc) ---
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

  // --- Create the Static Center White Circle ---
  const centerCircleRadius = 5;
  const centerCircleGeometry = new THREE.CircleGeometry(centerCircleRadius, 64);
  const centerCircleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const centerCircle = new THREE.Mesh(centerCircleGeometry, centerCircleMaterial);
  centerCircle.position.z = 1.51;
  scene.add(centerCircle);

  // --- Create the Black Inner Circle ---
  const blackCircleRadius = 4;
  const blackCircleGeometry = new THREE.CircleGeometry(blackCircleRadius, 64);
  const blackCircleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const blackCircle = new THREE.Mesh(blackCircleGeometry, blackCircleMaterial);
  blackCircle.position.z = centerCircle.position.z + 0.01;
  scene.add(blackCircle);

  // --- Position the Camera and Tilt the Perspective ---
  camera.position.z = 25;
  camera.rotation.z = Math.PI / 4;

  // --- Scroll-Based Rotation ---
  const onScroll = () => {
    const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const effectiveFraction = Math.min(scrollFraction / 0.2, 1);
    extrudedRing.rotation.x = effectiveFraction * Math.PI / 2;
    extrudedRing.rotation.y = effectiveFraction * Math.PI / 2;
  };
  window.addEventListener('scroll', onScroll);

  // --- Animation Loop Setup ---
  let animationFrameId;
  let isAnimating = true;

  function animate() {
    if (!isAnimating) return;
    animationFrameId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // --- Handle Window Resizing ---
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onResize);

  // --- Handle Tab Visibility Changes ---
  const handleVisibilityChange = () => {
    if (!document.hidden && !isAnimating) {
      // Resume animation if needed.
      isAnimating = true;
      animate();
    }
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // --- Handle WebGL Context Lost/Restored ---
  const handleContextLost = (event) => {
    event.preventDefault();
    isAnimating = false;
    cancelAnimationFrame(animationFrameId);
  };

  const handleContextRestored = () => {
    isAnimating = true;
    animate();
  };

  canvas.addEventListener('webglcontextlost', handleContextLost, false);
  canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

  // --- Cleanup Function ---
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    canvas.removeEventListener('webglcontextlost', handleContextLost);
    canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    cancelAnimationFrame(animationFrameId);
    renderer.dispose();
  };
}
