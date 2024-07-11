import React from 'react';
import classNames from 'classnames';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 5px 0 #E5E9F2',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  noPadding: {
    padding: 0,
  },
}));

const CustomCard = ({ children, title, noPadding, className, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classNames(classes.root, { [classes.noPadding]: noPadding }, className)} {...props}>
      {title && <Typography className={classes.title} variant="h3" noWrap>{title}</Typography>}
      {children}
    </Card>
  );
};

export { CustomCard as Card };
