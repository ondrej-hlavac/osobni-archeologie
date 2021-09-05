import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

interface ModelProps {
  rotationX: number;
  rotationY: number;
  modelMtlUrl: string;
  modelObjUrl: string;
}

export const ProjectionModel = ({ rotationX, rotationY, modelMtlUrl, modelObjUrl }: ModelProps) => {
  const mtl = useLoader(MTLLoader, modelMtlUrl);
  const obj = useLoader(OBJLoader, modelObjUrl, (loader: any) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  return <primitive object={obj} rotation-y={rotationX} rotation-x={rotationY / 10} />;
};
