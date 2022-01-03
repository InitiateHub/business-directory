import { React } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import BusinessItem from 'components/BusinessItem';
import useStyles from './styles';

const Featured = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.box}>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} className={classes.main}>
        <Typography variant="h2">Featured</Typography>
        <Grid container className={classes.content} spacing={3}>
          <BusinessItem />
          <BusinessItem />
          <BusinessItem />
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

export default Featured;
