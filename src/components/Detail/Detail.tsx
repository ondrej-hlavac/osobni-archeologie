import React, { useEffect, useState } from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FINDING, headers } from '../../constants/api';
import TagsList from '../TagsList';
// import * as THREE from 'three';
// import { Canvas } from '@react-three/fiber';
// import { Model } from '../Model';

const Spinner: React.FC = () => {
  return <span>spinner</span>;
};

export const Detail = () => {
  const [finding, setFinding] = useState<{ image_url: string; '@ref': unknown }>();
  let { id } = useParams<{ id: string }>();

  const getFinding = async () => {
    const res = await axios.get<any>(`${FINDING}/${id}`, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      console.log('res?.data', res?.data);
      setFinding(res?.data?.data);
    }
  };

  useEffect(() => {
    getFinding();
  }, [id]);

  return (
    <Box>
      <Center>
        {finding?.image_url !== undefined ? (
          <Image src={finding?.image_url.replace('_thumbnails', '')} alt="placeholder" objectFit="cover" />
        ) : (
          <Box width="100%" height="500px" />
        )}
      </Center>
      <TagsList />
    </Box>
  );

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
};
