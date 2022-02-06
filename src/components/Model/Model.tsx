import React from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Canvas, useLoader } from '@react-three/fiber';

interface ModelProps {
  modelMtl: string;
  modelObj: string;
  rotationX?: number;
  rotationY?: number;
}

export const Model = ({ modelMtl, modelObj }: ModelProps) => {
  const mtl = useLoader(MTLLoader, modelMtl);
  const obj = useLoader(OBJLoader, modelObj, (loader: any) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  return <primitive object={obj} position={[0, 0, 0]} />;
};

// return (
//   <div style={{ height: '80vh', width: '100%' }}>
//     <Canvas camera={{ fov: 75, position: [-30, -30, -20], zoom: 10 }} style={{ height: '1100px' }}>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <primitive object={obj} position={[0, 0, 0]} />
//     </Canvas>
//   </div>
// );
// return <div>tewts</div>;

// export const Model = ({ rotationX, rotationY, modelMtl, modelObj }: ModelProps) => {
//   const mtl = useLoader(MTLLoader, modelMtl);
//   const obj = useLoader(OBJLoader, modelObj, (loader: any) => {
//     mtl.preload();
//     loader.setMaterials(mtl);
//   });

//   return <primitive object={obj} rotation-y={rotationX} rotation-x={rotationY / 10} position={[0, 0, 0]} />;
// };
