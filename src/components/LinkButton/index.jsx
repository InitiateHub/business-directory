import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function LinkButton(props) {
  const classes = useStyles();

  const { route, label, startIcon, endIcon, active, color, variant, ...rest } =
    props;

  const handleClick = e => {
    // e.preventDefault();
  };

  return (
    <Link to={route} className={classes.link}>
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
        // onClick={e => handleClick(e)}
        color={color}
        {...rest}
      >
        {label}
      </Button>
    </Link>
  );
}

LinkButton.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.string,
  active: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.string,
};

LinkButton.defaultProps = {
  active: false,
  startIcon: null,
  endIcon: null,
  label: '',
  variant: 'contained',
  color: 'primary',
};

export default LinkButton;
