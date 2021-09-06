import React, { createRef, Suspense, useCallback, useState } from 'react';
import { chakra } from '@chakra-ui/system';
import { MyCanvas } from '../../components/MyCanvas';

const FindingData = [
  {
    objUrl: 'models/7_modelu/7_modelu/1/model.obj',
    mtlUrl: 'models/7_modelu/7_modelu/1/model.mtl',
  },
  {
    objUrl: 'models/7_modelu/7_modelu/2/model.obj',
    mtlUrl: 'models/7_modelu/7_modelu/2/model.mtl',
  },
  {
    objUrl: 'models/7_modelu/7_modelu/3/model.obj',
    mtlUrl: 'models/7_modelu/7_modelu/3/model.mtl',
  },
  // {
  //   objUrl: 'models/center/ngfx.obj',
  //   mtlUrl: 'models/center/ngfx.mtl',
  // },
  // {
  //   objUrl: 'models/pfanner_orange/model.obj',
  //   mtlUrl: 'models/pfanner_orange/model.mtl',
  // },
  // {
  //   objUrl: 'models/nokia_cerna/model.obj',
  //   mtlUrl: 'models/nokia_cerna/model.mtl',
  // },
  // {
  //   objUrl: 'models/denicek/model.obj',
  //   mtlUrl: 'models/denicek/model.mtl',
  // },
];

export const ProjectionOne = () => {
  // const frameRef = createRef<HTMLDivElement>();
  const [frameDimensions, setFrameDimensions] = useState<DOMRect>();

  const frameRef = useCallback((domNode) => {
    if (domNode) {
      setFrameDimensions(domNode.getBoundingClientRect());
    }
  }, []);

  const canvasSize = 800;

  const randomStartPosition = () => {
    if (frameDimensions) {
      const randomX = Math.random();
      const randomY = Math.random();
      const top = Math.floor(
        frameDimensions.height * randomY + canvasSize > frameDimensions.height
          ? frameDimensions.height - canvasSize - 100
          : frameDimensions?.height * randomY
      );
      const left = Math.floor(
        frameDimensions.width * randomX + canvasSize > frameDimensions.width
          ? frameDimensions.width - canvasSize - 100
          : frameDimensions?.width * randomX
      );
      return { x: left, y: top };
    }

    return { x: 100, y: 100 };
  };

  return (
    <chakra.div ref={frameRef} position="relative" width="100vw" height="100vh" backgroundColor="black">
      {FindingData.map((finding: any) => {
        return (
          <MyCanvas
            key={finding.mtlUrl}
            width={canvasSize}
            height={canvasSize}
            position={randomStartPosition()}
            frameDimensions={frameDimensions}
            mtlUrl={finding.mtlUrl}
            objUrl={finding.objUrl}
          />
        );
      })}
    </chakra.div>
  );
};
