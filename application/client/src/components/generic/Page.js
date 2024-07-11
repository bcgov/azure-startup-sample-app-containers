import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import { Header } from './Header';

const useStyles = makeStyles(() => ({
  root: {
    height: 'calc(100vh - 82px)',
  },
}));

const Page = ({ children }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />
      <Grid className={classes.root} container justifyContent="center">
        {children}
      </Grid>
    </Fragment>
  );
};

export { Page };
