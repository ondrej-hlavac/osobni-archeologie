import React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import { routes } from '../../constants/routes';
import drivko from '../../assets/images/placeholders/drivko.png';
import Tag from '../Tag';

const Detail = () => {
  return (
    <Box>
      <Center>
        <Image src={drivko} alt="placeholder" objectFit="cover" />
      </Center>
      <Tag color="teal" link path={routes.HOME} label="tag1" />
      <Tag color="pink" link path={routes.HOME} label="tag2" />
      <Tag color="purple" link path={routes.HOME} label="tag3" />
    </Box>
  );
};

export default Detail;
