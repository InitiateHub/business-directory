import React from 'react';
import { Grid } from '@material-ui/core';
import Hero from 'components/Hero';

function DirectoryHome() {
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
export default DirectoryHome;
