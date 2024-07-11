import React, { Fragment } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ErrorMessage } from 'formik';

import { InputFieldLabel, InputFieldError } from '../generic';

const RenderCheckbox = ({
  field,
  form,
  label,
  ...props
}) => {
  return (
    <Fragment>
      <FormControlLabel
        label={<InputFieldLabel label={label} />}
        control={
          <Checkbox
            color="primary"
            checked={field.value === true}
          />
        }
        {...field}
        {...props}
      />
      <InputFieldError error={<ErrorMessage name={field.name} />} />
    </Fragment>
  );
};

export { RenderCheckbox };
