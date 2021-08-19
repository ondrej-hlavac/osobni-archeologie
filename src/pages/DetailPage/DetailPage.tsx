import { Container, Divider } from '@chakra-ui/react';
import React from 'react';
import Detail from '../../components/Detail';
import List from '../../components/FindingsList';

const DetailPage = () => {
  return (
    <Container py={6} maxW="990px">
      <Detail />
      <Divider my={6} />
      <List />
    </Container>
  );
};

export default DetailPage;
