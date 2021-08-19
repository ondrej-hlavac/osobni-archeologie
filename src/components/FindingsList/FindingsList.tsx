import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Thumbnail from '../Thumbnail';

import drivko from '../../assets/images/placeholders/drivko.png';
import pepsi_2 from '../../assets/images/placeholders/pepsi_2.png';
import naramek from '../../assets/images/placeholders/naramek.png';
import whiskey from '../../assets/images/placeholders/drivko.png';

const FindingsList = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0}>
      <Thumbnail imageUrl={drivko} />
      <Thumbnail imageUrl={pepsi_2} />
      <Thumbnail imageUrl={naramek} />
      <Thumbnail imageUrl={whiskey} />
      <Thumbnail imageUrl={drivko} />
      <Thumbnail imageUrl={naramek} />
      <Thumbnail imageUrl={whiskey} />
      <Thumbnail imageUrl={pepsi_2} />
      <Thumbnail imageUrl={drivko} />
      <Thumbnail imageUrl={naramek} />
      <Thumbnail imageUrl={pepsi_2} />
      <Thumbnail imageUrl={whiskey} />
    </SimpleGrid>
  );
};

export default FindingsList;
