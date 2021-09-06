import { Container, Divider } from '@chakra-ui/react';
import React from 'react';
import { Detail } from '../../components/Detail';
import List from '../../components/FindingsList';

const DetailPage = () => {
  return (
    // <Container py={6} maxW="990px">
    <div>
      <Detail />
      <Divider my={6} />
    </div>
    // {/* <List /> */}
    // </Container>
  );
};

export default DetailPage;
