import React from 'react';
import { Container } from '@chakra-ui/react';
import List from '../../components/List';

const Homepage = () => {
  var arr = new Array(12);
  console.log('🚀 ~ file: Homepage.tsx ~ line 7 ~ Homepage ~ arr', arr);

  return (
    <Container py={6} maxW="1200px">
      <List />
    </Container>
  );
};

export default Homepage;
