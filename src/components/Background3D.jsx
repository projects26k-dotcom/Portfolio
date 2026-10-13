import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField(props) {
  const ref = useRef();
  // 5000 points * 3 values per point (x, y, z) = 15000
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f0a431"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.32}
        />
      </Points>
    </group>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background z-0" />
    </div>
  );
};

export default Background3D;
