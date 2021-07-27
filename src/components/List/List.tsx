import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Thumbnail from '../Thumbnail';

const List = () => {
  var arr = new Array(12);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {[...arr].map((item: any, index: number) => {
        return <Thumbnail key={index} />;
      })}
    </SimpleGrid>
  );
};

export default List;
