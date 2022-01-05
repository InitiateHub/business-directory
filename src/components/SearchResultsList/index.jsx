import { React, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BusinessItem from 'components/BusinessItem';
import { useBusinesses } from 'hooks/Context';
import useStyles from './styles';

const SearchResultsList = () => {
  const classes = useStyles();
  const { isLoading, businesses } = useBusinesses();

  return (
    <Grid item container xs={12} sm={8} className={classes.main}>
      <Typography variant="h2">All Businesses</Typography>
      {businesses && businesses.length > 0 ? (
        <Grid container className={classes.content} spacing={3}>
          {businesses.map(item => {
            return <BusinessItem key={item.id} business={item} />;
          })}
        </Grid>
      ) : isLoading ? (
        <Grid container className={classes.content}>
          <Typography>Loading Businesses...</Typography>
        </Grid>
      ) : (
        <Grid container className={classes.content}>
          <Typography>No Businesses Found</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchResultsList;
