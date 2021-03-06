import React from 'react';
import { Grid } from '@mui/material';
import Hero from 'components/Hero';
import Featured from 'components/Featured';
import Categories from 'components/Categories';
import HeroBG from 'assets/images/home-hero.png';
import AllBusinesses from 'components/AllBusinesses';
import { useBusinesses } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';

function DirectoryHome() {
  useDocumentTitle('Home | TheBusinessDirectory');
  const heroTitle =
    'The fastest way to find businesses, products & services in Ghana';
  const heroSubTitle =
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.';

  const { businesses, fetchBusinesses } = useBusinesses();

  React.useEffect(() => {
    // if (businesses?.length)
    fetchBusinesses();
  }, []);

  return (
    <>
      <Hero bgImagePath={HeroBG} title={heroTitle} subTitle={heroSubTitle} />
      <AllBusinesses />
      {/* <Featured /> */}
      {/* <Categories /> */}
    </>
  );
}
export default DirectoryHome;
