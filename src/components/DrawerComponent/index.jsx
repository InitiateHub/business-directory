import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import NavigationButton from 'components/NavigationButton';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavigationButton
                color="primary"
                label="Register Business"
                // icon={<InformationIcon />}
                route="/register"
              />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
