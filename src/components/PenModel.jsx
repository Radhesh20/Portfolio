// PenModel.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Import Three.js

const PenModel = ({ position = [0, 0, 0], scale = 1, rotationSpeed = 0.005 }) => {
  const group = useRef();
  // Load your pen model (replace with your actual model path)
  const { scene } = useGLTF('/models/pen.glb'); 

  useFrame(() => {
    // Basic continuous rotation for demonstration
    if (group.current) {
      group.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={scene.clone()} /> {/* Clone the scene for reusability if needed */}
    </group>
  );
};

// Preload the model to prevent flickering
useGLTF.preload('/models/pen.glb');

export default PenModel;