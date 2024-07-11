import React, { Fragment } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

import { RenderTextField } from '../fields'; // Adjust path if necessary

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .MuiOutlinedInput-adornedEnd': {
      paddingRight: '0',
    },
  },
  iconButton: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '9px',
    paddingBottom: '9px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  searchIcon: {
    color: '#FFFFFF',
  },
}));

const RenderSearchField = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <RenderTextField
        className={classes.root}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton
              centerRipple={false}
              className={classes.iconButton}
              color="inherit"
              type="submit"
            >
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
          ),
        }}
        {...props}
      />
    </Fragment>
  );
};

export { RenderSearchField };