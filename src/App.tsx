import React from 'react';
import { ChakraProvider, Flex, Heading, Link } from '@chakra-ui/react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { routes } from './constants/routes';
import DetailPage from './pages/DetailPage';

// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */

function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* <Header /> */}

        <Flex p={{ base: 4, md: 8 }} grow={1} zIndex={99} justifyContent="center" borderBottom="1px solid #000000">
          <Link href={routes.HOME} mx={0}>
            <Heading textAlign="center">Osobní Archeologie</Heading>
          </Link>
        </Flex>

        <Switch>
          <Route path={routes.DETAIL}>
            <DetailPage />
          </Route>
          <Route path={routes.HOME}>
            <Homepage />
          </Route>
          {/* <ProtectedRoute path={routes.HOME}>
          <DevicesPage />
        </ProtectedRoute> */}
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
