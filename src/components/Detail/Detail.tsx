import React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import drivko from '../../assets/images/placeholders/drivko.png';
import TagsList from '../TagsList';

const Detail = () => {
  return (
    <Box>
      <Center>
        <Image src={drivko} alt="placeholder" objectFit="cover" />
      </Center>
      <TagsList />
    </Box>
  );
};

export default Detail;
