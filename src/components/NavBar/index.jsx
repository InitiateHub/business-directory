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
  Grid,
  Button,
  Box,
} from '@material-ui/core';
import DrawerComponent from 'components/DrawerComponent';
import NavigationButton from 'components/NavigationButton';
import LinkButton from 'components/LinkButton';
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
    // <Box className={classes.container}>
    <AppBar
      position="sticky"
      className={classes.bar}
      // position="relative"
      color="inherit"
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <Grid item container className={classes.content}>
          <Grid item xs={false} sm={2} />
          <Grid
            item
            container
            xs={12}
            sm={8}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" component="h1" className={classes.logo}>
              #TheBusinessDirectory
            </Typography>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className={classes.navlinks}>
                <LinkButton
                  color="primary"
                  label="Register Business"
                  // icon={<InformationIcon />}
                  route="/register"
                />
              </div>
            )}
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}

export default NavBar;
