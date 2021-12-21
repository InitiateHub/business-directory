import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

function CustomButton(props) {
  const classes = useStyles();

  const {
    handleClick,
    label,
    startIcon,
    endIcon,
    active,
    color,
    variant,
    ...rest
  } = props;

  return (
    <Button
      classes={{
        root: `${classes.button} custom-button`,
        startIcon: classes.startButtonIcon,
        endIcon: classes.endButtonIcon,
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      aria-label="custom-button"
      onClick={handleClick}
      color={color}
      {...rest}
    >
      {label}
    </Button>
  );
}

CustomButton.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.string,
  active: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  variant: PropTypes.string,
};

CustomButton.defaultProps = {
  active: false,
  startIcon: null,
  endIcon: null,
  label: '',
  handleClick: () => {},
  variant: 'contained',
  color: 'primary',
};

export default CustomButton;
