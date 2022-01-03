import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  FilledInput,
  Typography,
} from '@mui/material';
import { useStyles } from './styles';

const CustomFormTextBox = ({
  id,
  label,
  className,
  required,
  value,
  handleOnChange,
  isDisabled,
}) => {
  const classes = useStyles();

  return (
    <FormControl
      variant="filled"
      className={`${classes.formControl} ${className}`}
    >
      {label ? (
        <FormLabel
          htmlFor={id}
          className={`${required ? classes.required : null} ${classes.label}`}
        >
          {label}
        </FormLabel>
      ) : null}
      <FilledInput
        disabled={isDisabled}
        className={classes.input}
        fullWidth
        type="text"
        disableUnderline
        value={value}
        onChange={e => handleOnChange(e)}
      />
    </FormControl>
  );
};

CustomFormTextBox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

CustomFormTextBox.defaultProps = {
  id: 'id',
  className: '',
  label: '',
  required: false,
};

export default CustomFormTextBox;
