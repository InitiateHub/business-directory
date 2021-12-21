import React from 'react';
import { Grid } from '@material-ui/core';
import Hero from 'components/Hero';
import Featured from 'components/Featured';
import HeroBG from 'assets/images/home-hero.png';

function DirectoryHome() {
  const heroTitle =
    'The fastest way to find businesses, products & services in Ghana';
  const heroSubTitle =
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.';
  return (
    <>
      <Hero bgImagePath={HeroBG} title={heroTitle} subTitle={heroSubTitle} />
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Featured />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default DirectoryHome;
