import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const ProtectedRoute = ({ component: Component, ...restOfProps }: any) => {
  // eslint-disable-next-line no-undef
  const keyValue = process.env.REACT_APP_API_KEY;
  const keyStorage = window.localStorage.authKey;

  const isAuthenticated: boolean = keyStorage === keyValue;

  return <Route {...restOfProps} render={(props: any) => (isAuthenticated ? <Component {...props} /> : <Redirect to={routes.HOME} />)} />;
};
