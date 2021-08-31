import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Center, Image } from '@chakra-ui/react';
import axios from 'axios';
import TagsList from '../TagsList';
import { FINDING, headers } from '../../constants/api';

const Detail = () => {
  const [finding, setFinding] = useState<{ image_url: string; '@ref': unknown }>();

  let { id } = useParams<{ id: string }>();

  const getFinding = async () => {
    const res = await axios.get<any>(`${FINDING}/${id}`, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      setFinding(res?.data?.data);
    }
  };

  useEffect(() => {
    getFinding();
  }, [id]);

  return (
    <Box>
      <Center>
        <Image src={finding?.image_url} alt="placeholder" objectFit="cover" />
      </Center>
      <TagsList />
    </Box>
  );
};

export default Detail;
