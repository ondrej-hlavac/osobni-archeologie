import React from 'react';
import { Flex } from '@chakra-ui/react';
import Tag from '../Tag';

const TagsMenu = () => {
  return (
    <Flex spacing={6} flexWrap="wrap" justifyContent="center">
      <Tag color="cyan" />
    </Flex>
  );
};

export default TagsMenu;
