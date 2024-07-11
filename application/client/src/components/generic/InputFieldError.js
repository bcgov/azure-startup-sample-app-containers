import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@mui/material/FormHelperText';

const InputFieldError = ({ error, ...props }) => {
  return (
    <FormHelperText error {...props}>
      {error}
    </FormHelperText>
  );
};

InputFieldError.propTypes = {
  error: PropTypes.string.isRequired,
};

export { InputFieldError };
