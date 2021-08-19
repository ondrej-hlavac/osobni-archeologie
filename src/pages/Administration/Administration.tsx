import React, { useState } from 'react';
import { Container, Flex } from '@chakra-ui/react';
import AdminAddForm from '../../components/AdminAddForm';
import AdminHeader from '../../components/AdminHeader';
import AdminList from '../../components/AdminList';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminTags from '../../components/AdminTags';

const buttonStyle = {
  fontSize: '30px',
  textDecoration: 'underline',
};

const Administration = () => {
  const [showAddForm, setAddForm] = useState(false);
  let { path, url } = useRouteMatch();

  const showForm = () => {
    setAddForm(true);
  };

  const hideForm = () => {
    setAddForm(false);
  };

  return (
    <Container maxW="1000px">
      {/* HEADER */}
      <Flex justifyContent="space-between" alignItems="baseline">
        <AdminHeader showForm={showForm} showAddForm={showAddForm} />
        <Link style={buttonStyle} to={`${url}/tags`}>
          Tagss
        </Link>
        <Link style={buttonStyle} to={`${url}`}>
          Seznam nálezů
        </Link>
      </Flex>

      {/* ADMIN BODY CONTENT */}
      <Switch>
        {/* LIST */}
        <Route exact path={path}>
          <AdminList />
        </Route>

        <Route exact path={`${path}/tags`}>
          <AdminTags />
        </Route>
      </Switch>

      {/* ADD FORM */}
      <Flex
        position="fixed"
        top={showAddForm ? '0' : '100%'}
        bottom="0"
        left={0}
        right={0}
        zIndex={99}
        width="100%"
        bgColor={'white'}
        overflow="auto"
      >
        <Container maxW="1200px" p="0">
          <AdminAddForm hideForm={hideForm} />
        </Container>
      </Flex>
    </Container>
  );
};

export default Administration;
