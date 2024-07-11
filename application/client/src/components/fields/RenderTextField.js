// src/components/fields/RenderTextField.js
import React from 'react';
import TextField from '@mui/material/TextField';

const RenderTextField = ({ field, form, label, ...props }) => {
  const error = form.errors[field.name];
  const touched = form.touched[field.name];

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      error={touched && !!error}
      helperText={touched && error}
      variant="outlined"
      fullWidth
    />
  );
};

export default RenderTextField;
