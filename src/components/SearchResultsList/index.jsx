import React from 'react';
import { Grid, Typography } from '@mui/material';
import BusinessItem from 'components/BusinessItem';
import { useBusinesses } from 'hooks/Context';
import useStyles from './styles';

const SearchResultsList = () => {
  const classes = useStyles();
  const { isLoading, searchResults } = useBusinesses();

  return (
    <>
      {(() => {
        if (searchResults && searchResults.length > 0) {
          return (
            <Grid container className={classes.content} spacing={3}>
              {searchResults.map(item => {
                return <BusinessItem key={item.id} business={item} />;
              })}
            </Grid>
          );
        }
        if (isLoading) {
          return (
            <Grid container className={classes.content}>
              <Typography>Loading Businesses...</Typography>
            </Grid>
          );
        }
        return (
          <Grid container className={classes.content}>
            <Grid item sm={12}>
              <Typography variant="h5" component="p">
                Sorry, there are no results matching your search query 😥.
                <Typography variant="h5" component="p">
                  Possible Solutions may be:{' '}
                </Typography>
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <ul>
                <li>
                  <Typography>
                    To Make sure all words are spelled correctly
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Try different keywords or more general keywords
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Try searching for other relevant keywords (such as
                    &apos;repair&apos; instead of &apos;maintenance&apos;)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Try broadening the search location (where)
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        );
      })()}
    </>
  );
};

export default SearchResultsList;
