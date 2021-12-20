import React from 'react';
import { Grid, Typography, Button, Link } from '@material-ui/core';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item container xs={12} sm={8} justifyContent="center">
          <Typography variant="h4" className={classes.logo}>
            Footer
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div>
  );
}
export default Footer;
