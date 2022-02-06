import React, { Suspense, useEffect, useState } from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { Model } from '../Model';
import TagsList from '../TagsList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FINDING, headers } from '../../constants/api';
import { Html, useProgress } from '@react-three/drei';
// import * as THREE from 'three';

const Spinner: React.FC = () => {
  return <span>spinner</span>;
};

export const Detail = () => {
  return (
    <Box style={{ width: '100vw' }} px={0}>
      <Suspense fallback={<Spinner />}>
        <Canvas camera={{ fov: 75, position: [-30, -30, -20], zoom: 10 }} style={{ height: '900px' }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model modelMtl="http://localhost:3000/models/denicek/model.mtl" modelObj="http://localhost:3000/models/denicek/model.obj" />
        </Canvas>
      </Suspense>
      {/* {finding?.image_url !== undefined ? (
          <Image src={finding?.image_url.replace('_thumbnails', '')} alt="placeholder" objectFit="cover" />
        ) : (
          <Box width="100%" height="500px" />
        )} */}
      {/* <Center>
        <TagsList />
      </Center> */}
    </Box>
  );
};

// const [finding, setFinding] = useState<{ image_url: string; '@ref': unknown }>();
// let { id } = useParams<{ id: string }>();

// const getFinding = async () => {
//   const res = await axios.get<any>(`${FINDING}/${id}`, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
//   if (res) {
//     // console.log('res?.data', res?.data);
//     setFinding(res?.data?.data);
//   }
// };

// useEffect(() => {
//   getFinding();
// }, [id]);

// return (
//   <div style={{ height: 600 }} onMouseMove={handleOnMouseMove}>
//     <Suspense fallback={<Spinner />}>
//       <Canvas camera={{ fov: 75, position: [-30, -30, -20], zoom: 10 }} style={{ height: '600px' }}>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Model rotationX={rotateX} rotationY={rotateY} modelMtl="models/denicek/model.mtl" modelObj="models/denicek/model.mtl" />
//       </Canvas>
//     </Suspense>
//   </div>
// );
