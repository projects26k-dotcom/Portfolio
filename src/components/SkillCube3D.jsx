import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Edges, Text } from '@react-three/drei';

export default function SkillCube3D() {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.1;
      // Gentle floating
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#f0a431" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ff00f0" />
      
      <Box ref={meshRef} args={[2.8, 2.8, 2.8]}>
        <meshPhysicalMaterial 
          color="#fff1d8" 
          transparent 
          opacity={0.8}
          roughness={0.1}
          metalness={0.5}
          transmission={0.5}
          thickness={0.5}
        />
        <Edges scale={1.05} threshold={15} color="#e85045" />
      </Box>

      {/* Floating UI Elements around the cube */}
      <Text position={[0, 0, 1.6]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle">
        REACT
      </Text>
      <Text position={[1.6, 0, 0]} rotation={[0, Math.PI / 2, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle">
        NODE.JS
      </Text>
      <Text position={[0, 0, -1.6]} rotation={[0, Math.PI, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle">
        THREE.JS
      </Text>
      <Text position={[-1.6, 0, 0]} rotation={[0, -Math.PI / 2, 0]} fontSize={0.26} color="#ffffff" anchorX="center" anchorY="middle">
        JAVASCRIPT
      </Text>
      <Text position={[0, 1.6, 0]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.3} color="#ffffff" anchorX="center" anchorY="middle">
        BOOTSTRAP
      </Text>
      <Text position={[0, -1.6, 0]} rotation={[Math.PI / 2, 0, 0]} fontSize={0.28} color="#ffffff" anchorX="center" anchorY="middle">
        WORDPRESS
      </Text>
    </group>
  );
}
