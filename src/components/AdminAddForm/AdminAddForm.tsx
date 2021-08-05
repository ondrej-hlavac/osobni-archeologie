import React from 'react';
import { Button, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import AddedTags from './components/AddedTags';

interface AdminAddFormProps {
  hideForm: () => void;
}

const AdminAddForm = ({ hideForm }: AdminAddFormProps) => {
  return (
    <Flex direction="column" position="relative" mx={2} p={2} pt={20} mt={25} mb={4} border="1px solid gray" borderRadius={8}>
      <Button onClick={hideForm} position="absolute" top={8} right={8}>
        close
      </Button>
      <Heading as="h5">Nový archeologický nález</Heading>
      <Divider my={8} />
      <FormControl id="name">
        <FormLabel>Název</FormLabel>
        <Input placeholder="Název" />
        <FormHelperText>Na webu není vidět, ale lze podle něj filtrovat.</FormHelperText>
      </FormControl>
      <Divider my={8} />
      <AddedTags />
      <FormControl id="tag">
        <FormLabel>Přidat tag</FormLabel>
        <Input placeholder="tag" />
        <FormHelperText>Lze přidat více tagů, stačí napsat mezeru.</FormHelperText>
      </FormControl>
      <Divider my={8} />
      <Text>add thumbnail (png / jpg)</Text>
      <Divider my={8} />
      <Text>add 3d sken</Text>
      <Divider my={8} />
      <Button>NAHRáT</Button>
    </Flex>
  );
};

export default AdminAddForm;
