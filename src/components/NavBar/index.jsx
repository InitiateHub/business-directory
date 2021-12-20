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
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item container xs={12} sm={8} justifyContent="space-between">
              <Typography variant="h4" className={classes.logo}>
                TBD
              </Typography>
              {isMobile ? (
                <DrawerComponent />
              ) : (
                <div className={classes.navlinks}>
                  <Button variant="contained">Register Business</Button>

                  <NavigationButton
                    className={classes.topMenuButton}
                    color="primary"
                    label="Register Business"
                    // icon={<InformationIcon />}
                    route="/register-businiess"
                  />

                  <Link to="/" className={classes.link}>
                    <a className={classes.btnLink}>Register Business</a>
                  </Link>
                </div>
              )}
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
