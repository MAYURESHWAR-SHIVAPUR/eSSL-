import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Center } from '@react-three/drei';
import Form from './Form';

// Component to load and display the GLB model
function Model() {
    // Load GLB file from the public directory
    const { scene } = useGLTF('/earth.glb');

    return (
        <Center>
            <primitive object={scene} scale={1} />
        </Center>
    );
}

// Preload the model so there's no lag on mount
useGLTF.preload('/model.glb');

export default function App() {
    return (
        <div className="flex items-center justify-center min-h-screen h-full">

            <div className='md:block hidden' style={{ width: '50vw', height: '100vh', background: '#002335' }}>
                <Canvas camera={{ position: [2, 2, 3], fov: 50 }}>
                    {/* Basic lighting */}
                    <ambientLight intensity={0.5} scale={3} />
                    <directionalLight position={[10, 10, 5]} intensity={1} speed={2.5} />

                    {/* Realistic environment lighting */}
                    <Environment preset="city" />

                    {/* Loading state handling */}
                    <Suspense fallback={null}>
                        {/* Replace '/model.glb' with your exact GLB filename inside the public folder */}
                        <Model path="/model.glb" />
                    </Suspense>

                    {/* Mouse controls (rotate, zoom, pan) */}
                    <OrbitControls makeDefault enableDamping autoRotate rotationSpeed={200} />
                </Canvas>
            </div>
            <div className='md:w-1/2 w-full h-full flex items-center justify-center'>
                <Form />
            </div>
        </div>
    );
}