import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Hero from 'components/Hero';
import Featured from 'components/Featured';
import HeroBG from 'assets/images/home-hero.png';
import { useBusinesses } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';
import SearchResultsList from 'components/SearchResultsList';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useStyles from './styles';

function DirectoryHome() {
  const classes = useStyles();

  useDocumentTitle('Home | TheBusinessDirectory');

  const { businesses, fetchBusinesses } = useBusinesses();

  const [searchParams] = useSearchParams();

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(searchParams.get('q')?.toLowerCase() || '');
  }, [searchParams]);

  useEffect(() => {
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
        <Grid item container xs={12} sm={8} className={classes.main}>
          <Typography variant="h2">
            You searched for:{' '}
            <Typography variant="h5">{`"${value}"`}</Typography>
          </Typography>
          <SearchResultsList />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default DirectoryHome;
