import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Model } from './Model';

import * as THREE from 'three';

// import ObjectModel from 'react-three-renderer-objects';
// import model from '../../assets/models/nokia_cerna/model.obj';
// import material from '../../assets/models/nokia_cerna/model.mtl';
// import React3 from 'react-three-renderer';

// https://medium.com/@zakhuber/loading-3d-models-into-react-with-webgl-and-three-js-273a492e645f
// https://www.youtube.com/watch?v=9ZEjSxDRIik

// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { useLoader } from '@react-three/fiber';

const Spinner: React.FC = () => {
  return <span>spinner</span>;
};

// function Camera(props: any) {
//   const ref = useRef()
//   const { setDefaultCamera } = useThree();
//   // This makes sure that size-related calculations are proper
//   // Every call to useThree will return this camera instead of the default camera
//   useEffect(() => void setDefaultCamera(ref.current), []);
//   return <perspectiveCamera ref={camera} {...props} />;
// }

// const CameraControls = () => {
//   // Get a reference to the Three.js Camera, and the canvas html element.
//   // We need these to setup the OrbitControls class.
//   // https://threejs.org/docs/#examples/en/controls/OrbitControls

//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   // Ref to the controls, so that we can update them on every frame using useFrame
//   const controls: any = useRef();
//   useFrame((state) => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, domElement]}
//       enableZoom={false}
//       maxAzimuthAngle={Math.PI / 4}
//       maxPolarAngle={Math.PI}
//       minAzimuthAngle={-Math.PI / 4}
//       minPolarAngle={0}
//     />
//   );
// };

const TestPage = () => {
  // const [scene, setScene] = useState();
  // let sceneRef = React.createRef<React.RefObject<any>>();

  // useEffect(() => {
  //   setScene(scene);
  //   return () => {
  //     setScene({} as any);
  //   };
  // }, []);

  // let width = window.innerWidth;
  // let height = window.innerHeight;
  // const zeroVector: any = new THREE.Vector3(0, 0, 0);

  // return (
  //   <React3 mainCamera="camera" width={width} height={height} alpha={true}>
  //     <scene ref={sceneRef}>
  //       <perspectiveCamera
  //         key={`perspectiveCamera`}
  //         name="camera"
  //         fov={75}
  //         aspect={width / height}
  //         near={0.1}
  //         far={1000}
  //         position={new THREE.Vector3(0, 0, 25)}
  //         lookAt={zeroVector}
  //       />
  //       <group name="carGroup">
  //         <ObjectModel name="boat" model={model} material={material} scene={scene} group="carGroup" />
  //       </group>
  //     </scene>
  //   </React3>
  // );

  // const obj = useLoader(OBJLoader, 'models/nokia_cerna/model.obj');
  // return <primitive object={obj} />;

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
          <Model rotationX={rotateX} rotationY={rotateY} />
        </Canvas>
      </Suspense>
    </div>
  );

  // return <div>nene</div>;
};

export default TestPage;
