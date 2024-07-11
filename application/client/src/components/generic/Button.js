import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import MuiButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '42px',
  },
  small: {
    height: '30px',
    fontSize: '13px',
    lineHeight: '16px',
  },
  large: {
    height: '52px',
  },
}));

const Button = ({
  text,
  loading,
  disabled,
  ...props
}) => {
  const classes = useStyles();
  return (
    <MuiButton
      classes={{ root: classes.root, sizeSmall: classes.small, sizeLarge: classes.large }}
      disabled={loading || disabled}
      variant="contained"
      color="primary"
      fullWidth
      {...props}
    >
      {loading ? <CircularProgress size={24} /> : text}
    </MuiButton>
  )
};

export { Button };
