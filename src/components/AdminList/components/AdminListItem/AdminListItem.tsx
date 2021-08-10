import React from 'react';
import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import AddedTags from '../../../AdminAddForm/components/AddedTags';

const AdminListItem = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} mb={2} justifyContent="space-between" border="1px solid gray" borderRadius={8} p={4}>
      <Image src="https://fakeimg.pl/250x100/" />
      <Flex direction="column" flexGrow={1} ml={4}>
        <Heading as="h6">Název</Heading>
        <AddedTags />
      </Flex>
      <Flex direction="column" justifyContent="space-between">
        <Button color="cyan.400">Edit</Button>
        <Button color="red.300">Delete</Button>
      </Flex>
    </Flex>
  );
};

export default AdminListItem;
