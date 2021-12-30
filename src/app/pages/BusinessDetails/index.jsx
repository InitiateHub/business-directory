import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Hero from 'components/Hero';

function BusinessDetails() {
  const { id } = useParams();
  return (
    <>
      <Hero />
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} />
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default BusinessDetails;
