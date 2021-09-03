import React, { useRef, useMemo, useState } from 'react';
// import { useLoader } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { TextureLoader } from 'expo-three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useLoader } from '@react-three/fiber';

// export const Model: React.FC = () => {
//   const ref = useRef();
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   const obj = useLoader(OBJLoader, 'models/nokia_cerna/model.obj');

//   return (
//     <mesh
//       position={[1.2, 0, 0]}
//       ref={ref}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   );
// };
// const textureLoader = new TextureLoader();

export const Model = ({ rotationX, rotationY }: any) => {
  // const model = useRef();
  // let rot = 0;

  // const obj = useMemo(() => new OBJLoader().load({ url: '../../assets/models/nokia_cerna/model.obj' }), [url]);
  // useRender(() => {
  //   const rad = 5 * Math.sin(THREEMath.degToRad((rot += 0.3)));
  //   model.current.rotation.set(rad, rad, 0);
  // });

  const mtl = useLoader(MTLLoader, 'models/denicek/model.mtl');
  // const mapImage = textureLoader.load(require('models/denicek/texture0.jpg'));
  // const normalMapImage = textureLoader.load(require('models/denicek/texture1.jpg'));
  const obj = useLoader(OBJLoader, 'models/denicek/model.obj', (loader: any) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  return <primitive object={obj} rotation-y={rotationX} rotation-x={rotationY / 10} />;
};

// export default Model;
