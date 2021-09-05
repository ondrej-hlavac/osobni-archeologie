import React, { useEffect, useState, Suspense } from 'react';
import * as THREE from 'three';
import { chakra, Image } from '@chakra-ui/react';
import { Canvas, useFrame } from '@react-three/fiber';

// import imageUrl from '../../assets/images/placeholders/naramek.png';

// import modelObj from '../../assets/models/center/ngfx.obj';
// import modelMtl from '../../assets/models/center/ngfx.mtl';

import { ProjectionModel } from '../ProjectionModel';

interface CanvasProps {
  width: number;
  height: number;
  position: { x: number; y: number };
  frameDimensions?: DOMRect;
}

interface AnimationProps {
  directionXprop?: DirectionX;
  directionYprop?: DirectionY;
}

enum DirectionX {
  Left,
  Right,
}

enum DirectionY {
  Top = 'top',
  Bottom = 'bottom',
}

const Spinner: React.FC = () => {
  return <span>spinner</span>;
};

export const MyCanvas = ({ width: canvasWidth, height: canvasHeight, position, frameDimensions }: CanvasProps) => {
  const modelObj = 'models/pfanner_orange/model.obj';
  const modelMtl = 'models/pfanner_orange/model.mtl';
  const [left, setLeft] = useState(position.x);
  const [top, setTop] = useState(position.y);
  const [directionX, setDirectionX] = useState(DirectionX.Right);
  const [directionY, setDirectionY] = useState(DirectionY.Top);
  // console.log('🚀 ~ file: MyCanvas.tsx ~ line 41 ~ MyCanvas ~ directionX', directionX);
  // console.log('🚀 ~ file: MyCanvas.tsx ~ line 39 ~ randXdir', randXdir());
  const [rotation, setRotation] = useState(0);
  console.log('🚀 ~ file: MyCanvas.tsx ~ line 49 ~ MyCanvas ~ rotation', rotation);

  useEffect(() => {
    if (position) {
      setLeft(position?.x);
      setTop(position?.y);
    }
  }, [position]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleAnimation();
      rotateModel();
    }, 333);
    return () => {
      clearTimeout(timer);
      handleAnimation();
      rotateModel();
    };
  }, [left]);

  const rotateModel = () => {
    if (rotation <= 359) {
      setRotation(rotation + 1);
    } else {
      setRotation(0);
    }
  };

  const handleAnimation = () => {
    // console.log('🚀 ~ file: MyCanvas.tsx ~ line 48 ~ animateScreenSaver ~ directionXprop', directionXprop);
    // const newPosition =
    // animateX;

    if (!frameDimensions) return;

    // HORIZONTAL MOVEMENT
    if (directionX === DirectionX.Right && left + canvasWidth < frameDimensions.width) {
      setLeft(left + 1);
    }

    if (directionX === DirectionX.Right && left + canvasWidth === frameDimensions.width) {
      setLeft(left - 1);
      setDirectionX(DirectionX.Left);
    }

    if (directionX === DirectionX.Left && left > 0) {
      setLeft(left - 1);
    }

    if (directionX === DirectionX.Left && left === 0) {
      setLeft(left + 1);
      setDirectionX(DirectionX.Right);
    }

    // VERTICAL MOVEMENT
    if (directionY === DirectionY.Top && top > 0) {
      setTop(top - 1);
    }

    if (directionY === DirectionY.Top && top === 0) {
      setTop(top + 1);
      setDirectionY(DirectionY.Bottom);
    }

    if (directionY === DirectionY.Bottom && top + canvasHeight < frameDimensions.height) {
      setTop(top + 1);
    }

    if (directionY === DirectionY.Bottom && top + canvasHeight === frameDimensions.height) {
      setTop(top - 1);
      setDirectionY(DirectionY.Top);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: `${canvasWidth}`,
        height: `${canvasHeight}`,
        backgroundColor: '#0e8a5a7f',
        overflow: 'hidden',
      }}
    >
      <Suspense fallback={<Spinner />}>
        <Canvas camera={{ fov: 75, position: [0, 0, 140], zoom: 44 }} style={{ height: `${canvasHeight}px`, width: `${canvasWidth}px` }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ProjectionModel rotationX={rotation} rotationY={rotation} modelObjUrl={modelObj} modelMtlUrl={modelMtl} />
        </Canvas>
      </Suspense>
    </div>
  );

  // return (
  //   <chakra.div position="absolute" left={left} top={top}>
  //     <Image
  //       display="inline-block"
  //       width={width}
  //       height={height}
  //       src={imageUrl}
  //       objectFit="contain"
  //       objectPosition="50% 50%"
  //       alt="placeholder"
  //       m="auto"
  //     />
  //   </chakra.div>
  // );
};
