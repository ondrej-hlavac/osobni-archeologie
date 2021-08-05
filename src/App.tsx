import React from 'react';
import { ChakraProvider, Flex, Heading, Link } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { routes } from './constants/routes';
import DetailPage from './pages/DetailPage';
import './App.css';
import { customTheme } from './style/theme';
import Fonts from './style/Fonts';
import Administration from './pages/Administration';

// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Router>
        <Flex p={{ base: 4, md: 8 }} grow={1} zIndex={99} justifyContent="center" borderBottom="1px solid #000000" position="relative">
          <Link href={routes.HOME} mx={0}>
            <Heading textAlign="center">Osobní Archeologie</Heading>
          </Link>
          <Link href={routes.ADMIN} position="absolute" right={8} color="gray.100" _hover={{ color: 'teal.600' }}>
            atmin
          </Link>
        </Flex>

        <Switch>
          <Route exact path={routes.HOME}>
            <Homepage />
          </Route>
          <Route path={routes.DETAIL}>
            <DetailPage />
          </Route>
          <Route path={routes.ADMIN}>
            <Administration />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
