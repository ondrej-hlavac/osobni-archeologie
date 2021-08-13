import React from 'react';
import { Button, Link } from '@chakra-ui/react';

interface TagProps {
  link?: boolean;
  path?: string;
  label?: string;
  color: string;
}

const Tag = ({ link, color, label, path }: TagProps) => {
  if (link) {
    return (
      <Link backgroundColor={color} color="white" p={2} size="xs" href={path} m={1} borderRadius={0}>
        #{label ? label : 'tag'}
      </Link>
    );
  }

  return (
    <Button colorScheme={color} size="xs" m={1} borderRadius={0}>
      #{label ? label : 'tag'}
    </Button>
  );
};

export default Tag;
