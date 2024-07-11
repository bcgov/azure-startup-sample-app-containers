import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Route, Redirect } from 'react-router-dom';

import { Routes } from '../../constants';
import { verifyJWT } from '../../utils';

const PublicRoute = ({ adminRedirect, component: Component, ...rest }) => {
  const [isValid, setValidity] = useState(null);

  useEffect(() => {
    const checkJWT = async () => {
      const jwt = window.localStorage.getItem('jwt');
      if (!jwt) {
        setValidity(false);
      } else {
        const isValidJWT = await verifyJWT(jwt);
        setValidity(isValidJWT);
      }
    };

    checkJWT();
  }, []);

  if (isValid === null) {
    return <LinearProgress />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isValid && adminRedirect ? (
          <Redirect to={Routes.Lookup} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export { PublicRoute };
