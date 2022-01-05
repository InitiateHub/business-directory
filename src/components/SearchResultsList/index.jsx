import { React, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BusinessItem from 'components/BusinessItem';
import { useBusinesses } from 'hooks/Context';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useStyles from './styles';

const SearchResultsList = () => {
  const classes = useStyles();
  const {
    isLoading,
    businesses,
    fetchBusinesses,
    searchResults,
    setSearchResults,
  } = useBusinesses();

  const [searchParams] = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get('q')?.toLowerCase() || '',
  );

  return (
    <Grid item container xs={12} sm={8} className={classes.main}>
      <Typography variant="h2">
        You searched for: <Typography variant="h5">{`"${value}"`}</Typography>
      </Typography>
      {searchResults && searchResults.length > 0 ? (
        <Grid container className={classes.content} spacing={3}>
          {searchResults.map(item => {
            return <BusinessItem key={item.id} business={item} />;
          })}
        </Grid>
      ) : isLoading ? (
        <Grid container className={classes.content}>
          <Typography>Loading Businesses...</Typography>
        </Grid>
      ) : (
        <Grid container className={classes.content}>
          <Typography>There are no results matching your query.</Typography>
          <Typography>Possible Solutions</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchResultsList;
