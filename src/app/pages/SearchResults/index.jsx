import React from 'react';
import { Grid } from '@mui/material';
import Hero from 'components/Hero';
import Featured from 'components/Featured';
import HeroBG from 'assets/images/home-hero.png';
import { useBusinesses } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';
import SearchResultsList from 'components/SearchResultsList';
import useStyles from './styles';

function DirectoryHome() {
  const classes = useStyles();

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
      <Hero
        bgColor="#fff"
        gradientFrom="#fff"
        gradientTo="#fff"
        height="fit-content"
        // mBlock="16"
      />
      <Grid item container className={classes.box}>
        <Grid item xs={false} sm={2} />
        <SearchResultsList />
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default DirectoryHome;
