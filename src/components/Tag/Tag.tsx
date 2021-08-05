import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { routes } from '../../constants/routes';

interface TagProps {
  link?: string;
  color: string;
}

const Tag = ({ link, color }: TagProps) => {
  if (link) {
    <Button colorScheme={color} size="xs" m={1}>
      <Link colorScheme={color} size="xs" href={routes.HOME}>
        #tag13
      </Link>
    </Button>;
  }

  return (
    <Button colorScheme={color} size="xs" m={1}>
      #tag13
    </Button>
  );
};

export default Tag;
