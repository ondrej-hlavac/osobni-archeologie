import React from 'react';
import { Box, Button, Image, Link } from '@chakra-ui/react';
import { routes } from '../../constants/routes';

const Detail = () => {
  return (
    <Box>
      <Image src="https://fakeimg.pl/1220x1400/?text=.obj&font=noto" alt="placeholder" />
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
