import { React } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import BusinessItem from 'components/BusinessItem';
import { GetAllBusinesses } from 'services/firebase.storage.service';
import useStyles from './styles';

const Categories = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.box}>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} className={classes.main}>
        <Typography variant="h2">Categories</Typography>
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

export default Categories;