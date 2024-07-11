import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

/**
 * InputFieldLabel component
 * Renders a label for an input field using Typography.
 *
 * @param {Object} props - Component properties
 * @param {string} props.label - The text to display as the label
 */
const InputFieldLabel = ({ label, ...props }) => {
  return (
    <Typography variant="body1" {...props}>
      {label}
    </Typography>
  );
};

// Define prop types for the InputFieldLabel component
InputFieldLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

// Set default props for the InputFieldLabel component
InputFieldLabel.defaultProps = {
  label: '',
};

export { InputFieldLabel };
