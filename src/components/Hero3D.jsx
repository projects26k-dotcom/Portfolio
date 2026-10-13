import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

export default function Hero3D() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#f0a431" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ff00f0" />
      
      <Icosahedron ref={meshRef} args={[1.5, 4]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0a0a0f"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Icosahedron>
    </group>
  );
}
