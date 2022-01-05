import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  FilledInput,
  Typography,
  OutlinedInput,
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
  endAdornment,
  startAdornment,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl
      variant="outlined"
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
      <OutlinedInput
        disabled={isDisabled}
        className={classes.input}
        fullWidth
        type="text"
        // disableUnderline
        value={value}
        onChange={e => handleOnChange(e)}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        {...rest}
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
