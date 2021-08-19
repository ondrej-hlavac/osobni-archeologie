import React from 'react';
import { Flex } from '@chakra-ui/react';
import TagsList from '../TagsList';

const TagsMenu = () => {
  return (
    <Flex spacing={6} flexWrap="wrap" justifyContent="center">
      <TagsList />
    </Flex>
  );
};

export default TagsMenu;
