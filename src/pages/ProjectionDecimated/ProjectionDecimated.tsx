import React, { Suspense, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { ModelTest } from '../TestPage/Model';
import { position } from '@chakra-ui/styled-system';
// import { OrbitControls } from '@react-three/drei';

const Spinner: React.FC = () => {
  return <span>spinner</span>;
};

const ModelCenter = ({ rotateY, rotateX }: any) => {
  const mtl = useLoader(MTLLoader, 'models/denicek/model.mtl');
  const obj = useLoader(OBJLoader, 'models/denicek/model.obj', (loader: any) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  // const boundingBox = new THREE.Box3();
  let center = new THREE.Vector3();
  let size = new THREE.Vector3();
  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(obj);
  boundingBox.getCenter(center);
  boundingBox.getSize(size);

  obj.position.set(-center.x, -center.y, -center.z);

  return <primitive object={obj} />;
};

const ProjectionDecimated = () => {
  const [mouseCoor, setMouseCoor] = useState<{ x: number; y: number }>();

  const handleOnMouseMove = (e: any) => {
    setMouseCoor({ x: e.screenX, y: e.screenY });
  };

  let rotateX = mouseCoor?.x ? mouseCoor.x / 100 : 10;
  let rotateY = mouseCoor?.y ? mouseCoor.y / 100 : 10;

  return (
    <div style={{ height: '90vh', width: '100vw', backgroundColor: 'blue' }} onMouseMove={handleOnMouseMove}>
      <Suspense fallback={<Spinner />}>
        <Canvas camera={{ fov: 75, position: [30, 30, 20], zoom: 4 }} style={{ height: '100%', width: '100%' }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ModelCenter rotateY={rotateY} rotateX={rotateX} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ProjectionDecimated;
