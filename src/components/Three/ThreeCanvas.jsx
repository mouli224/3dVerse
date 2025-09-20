import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Model = ({ modelName }) => {
  let geometry;
  switch (modelName) {
    case 'cube':
      geometry = <boxGeometry args={[1, 1, 1]} />;
      break;
    case 'sphere':
      geometry = <sphereGeometry args={[0.7, 32, 32]} />;
      break;
    case 'cone':
      geometry = <coneGeometry args={[0.7, 1.5, 32]} />;
      break;
    case 'cylinder':
      geometry = <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />;
      break;
    default:
      geometry = <boxGeometry args={[1, 1, 1]} />;
  }

  return (
    <mesh>
      {geometry}
      <meshStandardMaterial color={0xeaeaea} metalness={0.5} roughness={0.5} />
    </mesh>
  );
};

const ThreeCanvas = ({ modelName }) => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.8} />
      <pointLight intensity={1.2} position={[5, 5, 5]} />
      <Model modelName={modelName} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;
