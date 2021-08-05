import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

interface AdminHeaderProps {
  showForm: () => void;
  showAddForm: boolean;
}

const AdminHeader = ({ showForm, showAddForm }: AdminHeaderProps) => {
  return (
    <Flex p={8}>
      <FormControl id="tag">
        <FormLabel>Najdi taB</FormLabel>
        <Input />
        <FormHelperText>Tady napiž tek co hledáž</FormHelperText>
      </FormControl>
      {!showAddForm && (
        <Button
          onClick={showForm}
          position="fixed"
          bottom={8}
          bg={'purple.700'}
          color="white"
          fontSize={30}
          width="70px"
          height="70px"
          left="calc(50% - 35px)"
          _hover={{ bg: 'pink.700' }}
        >
          +
        </Button>
      )}
    </Flex>
  );
};

export default AdminHeader;
