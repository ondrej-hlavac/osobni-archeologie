import React, { createRef, Suspense, useCallback, useState } from 'react';
import { chakra } from '@chakra-ui/system';
import { MyCanvas } from '../../components/MyCanvas';

const FindingData = [
  {
    objUrl: 'models/ultraCenter1/model.obj',
    mtlUrl: 'models/ultraCenter1/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter2/model.obj',
    mtlUrl: 'models/ultraCenter2/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter3/model.obj',
    mtlUrl: 'models/ultraCenter3/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter4/model.obj',
    mtlUrl: 'models/ultraCenter4/model.mtl',
  },
  // {
  //   objUrl: 'models/ultraCenter5/model.obj',
  //   mtlUrl: 'models/ultraCenter5/model.mtl',
  // },
  // {
  //   objUrl: 'models/ultraCenter6/model.obj',
  //   mtlUrl: 'models/ultraCenter6/model.mtl',
  // },
  // {
  //   objUrl: 'models/ultraCenter7/model.obj',
  //   mtlUrl: 'models/ultraCenter7/model.mtl',
  // },
  // {
  //   objUrl: 'models/ultraCenter8/model.obj',
  //   mtlUrl: 'models/ultraCenter8/model.mtl',
  // },
  // {
  //   objUrl: 'models/ultraCenter9/model.obj',
  //   mtlUrl: 'models/ultraCenter9/model.mtl',
  // },
  // {
  //   objUrl: 'models/ultraCenter10/model.obj',
  //   mtlUrl: 'models/ultraCenter10/model.mtl',
  // },
  {
    objUrl: 'models/ultraCenter11/model.obj',
    mtlUrl: 'models/ultraCenter11/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter12/model.obj',
    mtlUrl: 'models/ultraCenter12/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter13/model.obj',
    mtlUrl: 'models/ultraCenter13/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter14/model.obj',
    mtlUrl: 'models/ultraCenter14/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter15/model.obj',
    mtlUrl: 'models/ultraCenter15/model.mtl',
  },
  {
    objUrl: 'models/ultraCenter16/model.obj',
    mtlUrl: 'models/ultraCenter16/model.mtl',
  },
  // {
  //   objUrl: 'models/ultraCenter17/model.obj',
  //   mtlUrl: 'models/ultraCenter17/model.mtl',
  // },
  {
    objUrl: 'models/ultraCenter18/model.obj',
    mtlUrl: 'models/ultraCenter18/model.mtl',
  },
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
          ? frameDimensions.height - canvasSize
          : frameDimensions?.height * randomY
      );
      const left = Math.floor(
        frameDimensions.width * randomX + canvasSize > frameDimensions.width
          ? frameDimensions.width - canvasSize
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
