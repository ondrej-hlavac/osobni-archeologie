import React from 'react';
import { Button, Link } from '@chakra-ui/react';

interface TagProps {
  link?: string | boolean;
  path?: string;
  label?: string;
  color: string;
  onClick?: () => void;
}

const Tag = ({ link, color, label, path, onClick }: TagProps) => {
  if (link) {
    return (
      <Link
        backgroundColor={color}
        color="white"
        p={2}
        size="xs"
        fontSize="12px"
        fontWeight="semibold"
        href={path}
        m={1}
        borderRadius={0}
        fontFamily="Source Code Pro"
        height="40px"
        padding={0}
        paddingLeft="20px"
        paddingRight="20px"
        lineHeight="40px"
        _hover={{ backgroundColor: '#a8a8a8', color: '#353535', textDecoration: 'none' }}
      >
        #{label}
      </Link>
    );
  }

  return (
    <Button
      backgroundColor={color}
      fontSize="12px"
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
