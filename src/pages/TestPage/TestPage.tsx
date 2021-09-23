import React, { Suspense, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';

const Spinner: React.FC = () => {
  return <span>spinner</span>;
};

const TestPage = () => {
  const [mouseCoor, setMouseCoor] = useState<{ x: number; y: number }>();

  const handleOnMouseMove = (e: any) => {
    setMouseCoor({ x: e.screenX, y: e.screenY });
  };

  let rotateX = mouseCoor?.x ? mouseCoor.x / 100 : 10;
  let rotateY = mouseCoor?.y ? mouseCoor.y / 100 : 10;

  return (
    <div style={{ height: '95vh' }} onMouseMove={handleOnMouseMove}>
      <Suspense fallback={<Spinner />}>
        <Canvas camera={{ fov: 75, position: [-30, -30, -20], zoom: 10 }} style={{ height: '1100px' }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model rotationX={rotateX} rotationY={rotateY} modelMtl="models/denicek/model.mtl" modelObj="models/denicek/model.obj" />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default TestPage;
