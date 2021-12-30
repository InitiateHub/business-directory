import React from 'react';
import { Grid } from '@material-ui/core';
import Hero from 'components/Hero';
import Featured from 'components/Featured';
import Categories from 'components/Categories';
import HeroBG from 'assets/images/home-hero.png';

function DirectoryHome() {
  const heroTitle =
    'The fastest way to find businesses, products & services in Ghana';
  const heroSubTitle =
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.';
  return (
    <>
      <Hero bgImagePath={HeroBG} title={heroTitle} subTitle={heroSubTitle} />
      {/* <Featured /> */}
      <Categories />
    </>
  );
}
export default DirectoryHome;
