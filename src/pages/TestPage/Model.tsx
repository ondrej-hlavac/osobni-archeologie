import React, { useRef, useMemo, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useLoader } from '@react-three/fiber';

interface ModelProps {
  rotationX: number;
  rotationY: number;
  modelMtl: string;
  modelObj: string;
}

export const Model = ({ rotationX, rotationY, modelMtl, modelObj }: ModelProps) => {
  const mtl = useLoader(MTLLoader, modelMtl);
  const obj = useLoader(OBJLoader, modelObj, (loader: any) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  return <primitive object={obj} rotation-y={rotationX} rotation-x={rotationY / 10} />;
};
