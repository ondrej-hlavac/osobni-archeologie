import React from 'react';
import { Button, Container, Divider, Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import FindingsList from '../../components/FindingsList';
import TagsMenu from '../../components/TagsMenu';

const Homepage = () => {
  return (
    <Container py={6} maxW="1200px">
      <TagsMenu />
      <Divider color="black" my={6} />
      {/* <Flex alignItems="center" flexDir={{ base: 'column', md: 'row' }}>
        <SearchIcon mr={6} />
        <Input colorScheme="purple" textAlign="center" placeholder="search tag" mr={{ base: 0, md: 6 }} />
        <Button variant="outline">Search</Button>
      </Flex> */}
      {/* <Divider color="black" my={6} /> */}
      <FindingsList />
    </Container>
  );
};

export default Homepage;
