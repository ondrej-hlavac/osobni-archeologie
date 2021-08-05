import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import AdminListItem from './components/AdminListItem';

const AdminList = () => {
  return (
    <Flex direction="column" pb={40}>
      <Heading as="h4" mb={4}>
        Seznam přidaných nálezů
      </Heading>
      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
    </Flex>
  );
};

export default AdminList;
