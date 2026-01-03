'use client';

import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei';
import Swarm from './Swarm';

export default function MainScene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[#161012]">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }} gl={{ antialias: false }}>
        <color attach="background" args={['#161012']} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        {/* 3D Elements */}
        <Swarm count={300} color="#CA9F5B" />
        <Swarm count={150} color="#7A6F9B" />

        {/* Post Processing for Cinematic Feel */}
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

        {/* Camera Controls (Subtle Auto-rotate could be added here or via script) */}
         {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />  User wants 'copy' so cinematic camera is better, but orbit allows exploration. Disabling zoom/pan for landing page feel. */}
      </Canvas>
    </div>
  );
}
