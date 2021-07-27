import React from 'react';
import { Box, Image, Button, Link, Flex, Center } from '@chakra-ui/react';
import { routes } from '../../constants/routes';

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
        <Flex spacing={6} position="absolute" bottom="0" left="0" right="0" backgroundColor="rgba(0,0,0,.3)">
          <Button colorScheme="teal" size="xs" m={1}>
            <Link colorScheme="teal" size="xs" href={routes.HOME}>
              #tag1
            </Link>
          </Button>
          <Button colorScheme="pink" size="xs" m={1}>
            <Link colorScheme="teal" size="xs" href={routes.HOME}>
              #tag2
            </Link>
          </Button>
          <Button colorScheme="cyan" size="xs" m={1}>
            <Link colorScheme="teal" size="xs" href={routes.HOME}>
              #tag3
            </Link>
          </Button>
          <Button colorScheme="orange" size="xs" m={1}>
            <Link colorScheme="teal" size="xs" href={routes.HOME}>
              #tag2
            </Link>
          </Button>
        </Flex>
      </Link>
    </Box>
  );
};

export default Thumbnail;
