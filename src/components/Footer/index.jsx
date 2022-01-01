import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';
import LinkButton from 'components/LinkButton';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  const subTitle =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.';
  return (
    <Grid item container className={classes.root}>
      <Grid item xs={false} sm={2} />
      <Grid
        item
        container
        xs={12}
        sm={8}
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.box}>
          <Typography variant="h5" component="h1" className={classes.logo}>
            #TheBusinessDirectory
          </Typography>
          <Typography variant="body2" className={classes.subTitle}>
            {subTitle}
          </Typography>
          <LinkButton
            color="primary"
            label="Register Business"
            // icon={<InformationIcon />}
            route="/register"
          />
          <Box className={classes.socials}>
            <a href="" target="_blank">
              <Twitter />
            </a>

            <a href="" target="_blank">
              <Facebook />
            </a>
            <a href="" target="_blank">
              <Instagram />
            </a>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}
export default Footer;
