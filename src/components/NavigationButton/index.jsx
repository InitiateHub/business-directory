import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { changeNavigationAction } from 'store/actions/ui';
import useStyles from './styles';

function NavigationButton(props) {
  const classes = useStyles(props);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { route, label, icon, navigating, active, color, variant, ...rest } =
    props;

  const navigateTo = () => {
    if (navigating) {
      dispatch(changeNavigationAction(label));
    }
  };

  const navigateToByRouter = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <Button
      classes={{
        root: classes.button,
        startIcon: classes.buttonIcon,
      }}
      color={color}
      startIcon={icon}
      variant={variant}
      {...rest}
      onClick={route ? navigateToByRouter : navigateTo}
    >
      {label}
    </Button>
  );
}

NavigationButton.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  navigating: PropTypes.bool,
  active: PropTypes.bool,
  color: PropTypes.string,
  route: PropTypes.string,
  variant: PropTypes.string,
};

NavigationButton.defaultProps = {
  icon: null,
  navigating: true,
  active: false,
  route: '',
  variant: 'contained',
  color: 'primary',
};

export default NavigationButton;
