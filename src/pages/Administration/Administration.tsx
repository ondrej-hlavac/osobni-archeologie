import React, { useState } from 'react';
import { Container, Flex } from '@chakra-ui/react';
import AdminAddForm from '../../components/AdminAddForm';
import AdminHeader from '../../components/AdminHeader';
import AdminList from '../../components/AdminList';

const Administration = () => {
  const [showAddForm, setAddForm] = useState(false);

  const showForm = () => {
    setAddForm(true);
  };

  const hideForm = () => {
    setAddForm(false);
  };

  return (
    <Container maxW="1000px">
      {/* HEADER */}
      <AdminHeader showForm={showForm} showAddForm={showAddForm} />

      {/* LIST */}
      <AdminList />

      {/* ADD FORM */}
      <Flex
        position="fixed"
        top={showAddForm ? '0' : '100%'}
        bottom="0"
        left={0}
        right={0}
        zIndex={99}
        width="100%"
        bgColor={'white'}
        overflow="auto"
      >
        <Container maxW="1200px" p="0">
          <AdminAddForm hideForm={hideForm} />
        </Container>
      </Flex>
    </Container>
  );
};

export default Administration;
