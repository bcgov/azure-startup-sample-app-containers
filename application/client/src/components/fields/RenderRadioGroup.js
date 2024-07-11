import React, { Fragment } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ErrorMessage } from 'formik';

import { InputFieldError, InputFieldLabel } from '../generic';

const RenderRadioGroup = ({
  field,
  form,
  label,
  options,
  disabled,
  ...props
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === 'true' || value === 'false') {
      field.onChange({ target: { name: field.name, value: value === 'true' } });
    } else {
      field.onChange({ target: { name: field.name, value } });
    }
  };

  return (
    <Fragment>
      {label && <InputFieldLabel label={label} />}
      <RadioGroup
        {...field}
        {...props}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            checked={field.value === option.value}
            label={option.label}
            disabled={disabled}
            labelPlacement="end"
            control={<Radio color={option.color || 'primary'} />}
          />
        ))}
      </RadioGroup>
      <InputFieldError error={<ErrorMessage name={field.name} />} />
    </Fragment>
  );
};

export { RenderRadioGroup };
