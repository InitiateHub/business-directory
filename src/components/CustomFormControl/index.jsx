import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel } from '@mui/material';
import { useStyles } from './styles';

const CustomFormControl = ({
  id,
  label,
  className,
  required,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl className={`${classes.formControl} ${className}`} {...rest}>
      {label ? (
        <FormLabel
          htmlFor={id}
          className={`${required ? classes.required : null} ${classes.label}`}
        >
          {label}
        </FormLabel>
      ) : null}
      {children}
    </FormControl>
  );
};

CustomFormControl.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

CustomFormControl.defaultProps = {
  id: 'id',
  className: '',
  label: '',
  required: false,
};

export default CustomFormControl;
