import { React, useState } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import BusinessItem from 'components/BusinessItem';
import { GetAllBusinesses } from 'services/firebase.storage.service';
import AllBusinessesData from 'assets/mockData';
import useStyles from './styles';

const AllBusinesses = () => {
  const classes = useStyles();
  // const allBusinesses = JSON.parse(AllBusinesses);
  const [businesses, setBusinesses] = useState(AllBusinessesData);
  // console.log(businesses);
  return (
    <Grid container className={classes.box}>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} className={classes.main}>
        <Typography variant="h2">All Businesses</Typography>
        <Grid container className={classes.content} spacing={3}>
          {businesses.map(item => {
            return <BusinessItem key={item.id} business={item} />;
          })}
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

export default AllBusinesses;
