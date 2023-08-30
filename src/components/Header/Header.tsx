import React from 'react';
import { Flex, Link, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const Header = () => {
  const { pathname } = useLocation();

  if (pathname === routes.PROJECTOR_ONE || pathname === routes.PROJECTOR_TWO || pathname === routes.ZLIN_ONE) return null;

  return (
    <Flex p={{ base: 4, md: 8 }} grow={1} zIndex={99} justifyContent="center" borderBottom="1px solid #000000" position="relative">
      <Link href={routes.HOME} mx={0}>
        <Heading textAlign="center">Osobní Archeologie</Heading>
      </Link>
    </Flex>
  );
};
