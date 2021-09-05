import React from 'react';
import { Flex, Link, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const Header = () => {
  const { pathname } = useLocation();

  if (pathname === routes.PROJECTOR_ONE || pathname === routes.PROJECTOR_TWO) return null;

  return (
    <Flex p={{ base: 4, md: 8 }} grow={1} zIndex={99} justifyContent="center" borderBottom="1px solid #000000" position="relative">
      <Link href={routes.HOME} mx={0}>
        <Heading textAlign="center">Osobní Archeologie</Heading>
      </Link>
      <Link href={routes.ADMIN} position="absolute" right={8} color="gray.100" _hover={{ color: 'teal.600' }}>
        atmin
      </Link>
    </Flex>
  );
};
