import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

interface AdminHeaderProps {
  showForm: () => void;
  showAddForm: boolean;
}

const AdminHeader = ({ showForm }: AdminHeaderProps) => {
  return (
    <Flex minH="120px">
      <Button
        onClick={showForm}
        position={{ base: 'fixed', md: 'relative' }}
        bottom={{ base: 8, md: 0 }}
        ml={{ base: 0, md: 8 }}
        mt={{ base: 0, md: 8 }}
        bg={'purple.700'}
        color="white"
        fontSize={30}
        width="70px"
        height="70px"
        left={{ base: 'calc(50% - 35px)', md: 0 }}
        zIndex={91}
        _hover={{ bg: 'pink.700' }}
      >
        +
      </Button>
    </Flex>
  );
};

export default AdminHeader;
