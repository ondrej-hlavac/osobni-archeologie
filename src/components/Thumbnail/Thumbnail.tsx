import React from 'react';
import { Box, Image, Button, Link, Flex, Center } from '@chakra-ui/react';
import { routes } from '../../constants/routes';
import thumb from '../../assets/images/thumb.jpg';

const Thumbnail = () => {
  return (
    <Box border="1px solid black" p={4}>
      <Center>
        <Image src={thumb} alt="placeholder" mb={4} />
      </Center>
      <Flex spacing={6}>
        <Button colorScheme="teal" size="xs" m={1}>
          <Link colorScheme="teal" size="xs" href={routes.DETAIL}>
            #tag1
          </Link>
        </Button>
        <Button colorScheme="pink" size="xs" m={1}>
          <Link colorScheme="teal" size="xs" href={routes.DETAIL}>
            #tag2
          </Link>
        </Button>
        <Button colorScheme="cyan" size="xs" m={1}>
          <Link colorScheme="teal" size="xs" href={routes.DETAIL}>
            #tag3
          </Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default Thumbnail;
