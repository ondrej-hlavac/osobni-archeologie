import React, { createRef, Suspense, useCallback, useState } from 'react';
import { chakra } from '@chakra-ui/system';
import { MyCanvas } from '../../components/MyCanvas';

const FindingData = [
  {
    objUrl: 'zlin/Dieta_Lowpoly/Dieta_lowpoly.obj',
    mtlUrl: 'zlin/Dieta_Lowpoly/Dieta_lowpoly.mtl',
  },
  {
    objUrl: 'zlin/Muscle_Fitness_Lowpoly/Muscle_Fitness_Lowpoly.obj',
    mtlUrl: 'zlin/Muscle_Fitness_Lowpoly/Muscle_Fitness_Lowpoly.mtl',
  },
  {
    objUrl: 'zlin/Odeprit_smysl_zivota_Lowpoly/Odeprit_smysl_zivota_Lowpoly.obj',
    mtlUrl: 'zlin/Odeprit_smysl_zivota_Lowpoly/Odeprit_smysl_zivota_Lowpoly.mtl',
  },
  {
    objUrl: 'zlin/Skolni_rad_Lowpoly/Skolni_rad_Lowpoly.obj',
    mtlUrl: 'zlin/Skolni_rad_Lowpoly/Skolni_rad_Lowpoly.mtl',
  },
  {
    objUrl: 'zlin/Weed_cosi_Lowpoly/Weed_cosi_Lowpoly.obj',
    mtlUrl: 'zlin/Weed_cosi_Lowpoly/Weed_cosi_Lowpoly.mtl',
  },
];

export const ZlinOne = () => {
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
