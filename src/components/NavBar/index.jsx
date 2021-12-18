import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      {/* <MenuItem onClick={logout}>Logout</MenuItem> */}
    </Menu>
  );

  return (
    <Box className={classes.container}>
      <AppBar className={classes.bar} position="relative" color="inherit">
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open Drawer"
          >
            {/* <MenuIcon /> */}
          </IconButton>

          {/* <img className={classes.logo} src={logo} alt="ROC" /> */}

          <Box className={classes.menuIconsContainer} />

          <Box className={classes.search}>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              placeholder="Suche"
              // value={searchKey}
              inputProps={{ 'aria-label': 'search' }}
              // onChange={e => dispatch(searchKeyChangeAction(e.target.value))}
              // onKeyDown={e => e.code === "Enter" && handleOpenSearchDialog()}
            />

            {/* <Box className={classes.searchIcon}>
              {searchKey && isSearchDialogOpened ? (
                <IconButton
                  classes={{ root: classes.closeIconButton }}
                  onClick={handleSearchClear}
                >
                </IconButton>
              ) : (
                <IconButton
                  classes={{ root: classes.closeIconButton }}
                  onClick={handleOpenSearchDialog}
                >
                </IconButton>
              )}
            </Box> */}
          </Box>

          <Box className={`${classes.section} ${classes.userInfo}`}>
            <Typography className={classes.username}>
              {/* {user && user.title} */}
            </Typography>

            <IconButton
              className={classes.userIcon}
              aria-label="Account"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              {/* <UserIcon /> */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
}

export default NavBar;
