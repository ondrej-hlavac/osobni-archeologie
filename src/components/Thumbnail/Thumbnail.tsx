import React from 'react';
import { Box, Image, Link, Flex, Center } from '@chakra-ui/react';
import { routes } from '../../constants/routes';
import Tag from '../Tag';

interface IProps {
  imageUrl: string;
}

const Thumbnail = ({ imageUrl }: IProps) => {
  return (
    <Box border="1px solid black" p={4} position="relative">
      <Link href={routes.DETAIL}>
        <Center>
          <Image src={imageUrl} alt="placeholder" mb={4} />
        </Center>
      </Link>
      <Flex padding={2} position="absolute" bottom="0" left="0" right="0" backgroundColor="#ffffff83" zIndex={99}>
        <Tag color="teal" link path={routes.HOME} label="tag1" />
        <Tag color="pink" link path={routes.HOME} label="tag2" />
        <Tag color="purple" link path={routes.HOME} label="tag3" />
      </Flex>
    </Box>
  );
};

export default Thumbnail;
