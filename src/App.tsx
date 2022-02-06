import React from 'react';
import { ChakraProvider, Flex, Heading, Link } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { routes } from './constants/routes';
import DetailPage from './pages/DetailPage';
import './App.css';
import { customTheme } from './style/theme';
import Fonts from './style/Fonts';
import Administration from './pages/Administration';
import TestPage from './pages/TestPage';
import { ProjectionOne } from './pages/ProjectionOne';
import { ProjectionTwo } from './pages/ProjectionTwo';
import { Header } from './components/Header';
import { ProtectedRoute } from './components/ProtectedRoute';
import ProjectionDecimated from './pages/ProjectionDecimated';

// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Router>
        <Header />

        <Switch>
          <Route path={`${routes.DETAIL}/:id`} exact>
            <DetailPage />
          </Route>

          <ProtectedRoute path={routes.ADMIN} component={Administration} exact />

          <Route path={routes.TEST} exact>
            <TestPage />
          </Route>

          {/* PROJECTIONS ROUTES */}
          <Route path={routes.PROJECTOR_ONE}>
            <ProjectionOne />
          </Route>
          <Route path={routes.PROJECTOR_TWO}>
            <ProjectionTwo />
          </Route>
          <Route path={routes.DECIMATED}>
            <ProjectionDecimated />
          </Route>

          <Route path={routes.HOME} exact>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
