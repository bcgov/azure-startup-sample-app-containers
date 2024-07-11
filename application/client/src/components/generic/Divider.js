import React from 'react';
import { makeStyles } from '@mui/styles';

// Define styles using makeStyles
const useStyles = makeStyles(() => ({
  divider: {
    height: '3px',
    backgroundColor: '#E2A014',
    border: 'none',
  },
}));

const Divider = () => {
  const classes = useStyles();
  return <hr className={classes.divider} />;
};

export { Divider };
