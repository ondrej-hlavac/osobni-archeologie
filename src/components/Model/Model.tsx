import React, { useRef, useMemo, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

interface ModelProps {
  rotationX: number;
  rotationY: number;
  modelMtl: string;
  modelObj: string;
}

export const Model = ({ rotationX, rotationY, modelMtl, modelObj }: ModelProps) => {
  // const mtl = useLoader(MTLLoader, modelMtl);
  // const obj = useLoader(OBJLoader, modelObj, (loader: any) => {
  //   mtl.preload();
  //   loader.setMaterials(mtl);
  // });

  const obj = useLoader(GLTFLoader, 'models/center-test.glb');

  return <primitive object={obj.scene} rotation-x={rotationX} rotation-y={rotationY} />;
};
