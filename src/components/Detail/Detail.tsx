import React from 'react';
import { Box, Button, Center, Image, Link } from '@chakra-ui/react';
import { routes } from '../../constants/routes';
import thumb from '../../assets/images/thumb.jpg';

const Detail = () => {
  return (
    <Box>
      <Center>
        <Image src={thumb} alt="placeholder" objectFit="cover" />
      </Center>
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
    </Box>
  );
};

export default Detail;
