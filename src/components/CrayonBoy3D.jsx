import { useState } from 'react';
import { Float, PresentationControls, ContactShadows, RoundedBox, Html } from '@react-three/drei';

const WaxMaterial = ({ color }) => (
  <meshStandardMaterial color={color} roughness={0.92} metalness={0} />
);

function DeveloperBoy({ surprise, onSurprise }) {
  return (
    <group position={[0, -0.65, 0]}>
      {/* Hoodie */}
      <RoundedBox args={[2.25, 1.7, 1.05]} radius={0.28} smoothness={4} position={[0, -0.4, 0]}>
        <WaxMaterial color="#f0a431" />
      </RoundedBox>
      <mesh position={[0, 0.12, 0.56]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.07, 10, 22]} />
        <WaxMaterial color="#e85045" />
      </mesh>

      {/* Head and ears */}
      <mesh position={[0, 1.55, 0.08]} scale={[1, 1.08, .92]}>
        <sphereGeometry args={[1.02, 32, 32]} />
        <WaxMaterial color="#f4b183" />
      </mesh>
      <mesh position={[-1.02, 1.5, 0.08]} scale={[.22, .32, .18]}><sphereGeometry args={[1, 20, 20]} /><WaxMaterial color="#f4b183" /></mesh>
      <mesh position={[1.02, 1.5, 0.08]} scale={[.22, .32, .18]}><sphereGeometry args={[1, 20, 20]} /><WaxMaterial color="#f4b183" /></mesh>

      {/* Chunky dark crayon hair */}
      <mesh position={[0, 2.26, 0.04]} scale={[.96, .48, .88]}><sphereGeometry args={[1, 32, 20]} /><WaxMaterial color="#4a3429" /></mesh>
      <mesh position={[-.54, 2.14, .28]} scale={[.48, .34, .48]}><sphereGeometry args={[1, 24, 20]} /><WaxMaterial color="#4a3429" /></mesh>
      <mesh position={[.48, 2.18, .26]} scale={[.5, .33, .45]}><sphereGeometry args={[1, 24, 20]} /><WaxMaterial color="#4a3429" /></mesh>

      {/* Glasses */}
      {[-.38, .38].map((x) => <mesh key={x} position={[x, 1.62, .87]}><torusGeometry args={[.31, .055, 10, 24]} /><WaxMaterial color="#26314a" /></mesh>)}
      <mesh position={[0, 1.62, .87]} scale={[.26, .05, .05]}><boxGeometry args={[1, 1, 1]} /><WaxMaterial color="#26314a" /></mesh>
      <mesh position={[-.38, 1.61, .88]} scale={[.06, .1, .06]}><sphereGeometry args={[1, 16, 16]} /><WaxMaterial color="#26314a" /></mesh>
      <mesh position={[.38, 1.61, .88]} scale={[.06, .1, .06]}><sphereGeometry args={[1, 16, 16]} /><WaxMaterial color="#26314a" /></mesh>
      <mesh position={[0, 1.25, .9]} scale={[.25, .045, .04]}><sphereGeometry args={[1, 16, 16]} /><WaxMaterial color="#e85045" /></mesh>

      {/* Laptop in front */}
      <RoundedBox onClick={(event) => { event.stopPropagation(); onSurprise(); }} args={[2.15, 1.28, .16]} radius={.08} smoothness={3} position={[0, -.54, 1.05]} rotation={[-.2, 0, 0]}>
        <WaxMaterial color={surprise ? '#e85045' : '#76a9ab'} />
      </RoundedBox>
      <RoundedBox args={[2.35, .16, 1.35]} radius={.08} smoothness={3} position={[0, -1.18, .7]} rotation={[-.05, 0, 0]}>
        <WaxMaterial color="#26314a" />
      </RoundedBox>
      <mesh position={[0, -.54, 1.15]} rotation={[-.2, 0, 0]}><torusGeometry args={[.18, .04, 8, 3]} /><WaxMaterial color="#ffd04a" /></mesh>

      {/* Hands resting on the keyboard */}
      <mesh position={[-.86, -.88, 1.08]} scale={[.3, .18, .24]}><sphereGeometry args={[1, 20, 20]} /><WaxMaterial color="#f4b183" /></mesh>
      <mesh position={[.86, -.88, 1.08]} scale={[.3, .18, .24]}><sphereGeometry args={[1, 20, 20]} /><WaxMaterial color="#f4b183" /></mesh>
    </group>
  );
}

const CrayonBoy3D = () => (
  <CrayonScene />
);

const CrayonScene = () => {
  const [surprise, setSurprise] = useState(false);
  return <>
    <ambientLight intensity={1.5} />
    <directionalLight position={[4, 5, 5]} intensity={2.5} color="#fff0c2" />
    <directionalLight position={[-4, 2, 3]} intensity={1.1} color="#8aa5f2" />
    <PresentationControls global rotation={[0, -.18, 0]} polar={[-.25, .25]} azimuth={[-.55, .55]}>
      <Float speed={2} rotationIntensity={.12} floatIntensity={.35}>
        <DeveloperBoy surprise={surprise} onSurprise={() => setSurprise((value) => !value)} />
      </Float>
    </PresentationControls>
    <ContactShadows position={[0, -2.1, 0]} opacity={.22} scale={6} blur={2.5} far={4} color="#26314a" />
    {surprise && <Html position={[0, 3.2, 0]} center><div className="whitespace-nowrap -rotate-3 rounded-lg border-2 border-[#26314a] bg-[#ffd04a] px-3 py-2 text-xs font-bold text-[#26314a] shadow-[3px_3px_0_#26314a]">You found the color switch! ✦</div></Html>}
  </>;
};

export default CrayonBoy3D;
