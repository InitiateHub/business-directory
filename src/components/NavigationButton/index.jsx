import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { changeNavigationAction } from 'store/actions/ui';
import useStyles from './styles';

function NavigationButton(props) {
  const classes = useStyles(props);

  const history = useHistory();

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
      history.push(route);
    }
  };

  return (
    <Button
      classes={{
        root: classes.button,
        startIcon: classes.buttonIcon,
      }}
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
  active: true,
  route: '',
  variant: 'contained',
  color: 'primary',
};

export default NavigationButton;
