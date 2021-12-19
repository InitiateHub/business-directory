import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  InputBase,
  useMediaQuery,
  Link,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import DrawerComponent from 'components/DrawerComponent';
import useStyles from './styles';

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchor, setAnchor] = useState(null);

  const isMenuOpen = Boolean(anchor);

  const handleProfileMenuOpen = event => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  };

  return (
    <Box className={classes.container}>
      <AppBar
        position="sticky"
        className={classes.bar}
        // position="relative"
        color="inherit"
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.logo}>
            TBD
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Register Business
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
