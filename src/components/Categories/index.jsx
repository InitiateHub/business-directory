import { React, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import BusinessItem from 'components/BusinessItem';
import AllBusinesses from 'assets/mockData/allBusinessesData';
import useStyles from './styles';

const Categories = () => {
  const classes = useStyles();
  // const allBusinesses = JSON.parse(AllBusinesses);
  const [businesses, setBusinesses] = useState(AllBusinesses);
  // console.log(businesses);
  return (
    <Grid container className={classes.box}>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} className={classes.main}>
        <Typography variant="h2">Categories</Typography>
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

export default Categories;
