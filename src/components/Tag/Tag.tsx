import React from 'react';
import { Button, Link } from '@chakra-ui/react';

interface TagProps {
  link?: boolean;
  path?: string;
  label?: string;
  color: string;
  onClick?: () => void;
}

const Tag = ({ link, color, label, path, onClick }: TagProps) => {
  if (link) {
    return (
      <Link backgroundColor={color} color="white" p={2} size="xs" href={path} m={1} borderRadius={0}>
        #{label}
      </Link>
    );
  }

  return (
    <Button
      backgroundColor={color}
      color="white"
      size="xs"
      m={1}
      borderRadius={0}
      p={5}
      onClick={onClick}
      _hover={{ backgroundColor: '#a8a8a8', color: '#353535' }}
    >
      #{label}
    </Button>
  );
};

export default Tag;
