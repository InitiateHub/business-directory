import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Hero from 'components/Hero';
import { useBusinesses } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useStyles from './styles';

const BusinessDetails = () => {
  const classes = useStyles();

  const { businesses, business, setBusiness, fetchBusiness } = useBusinesses();
  useDocumentTitle(
    `${business?.businessName ?? 'Details'} | TheBusinessDirectory`,
  );
  const { id } = useParams();

  useEffect(() => {
    if (businesses.length > 0) {
      const biz = businesses?.find(item => item.internalId === id);
      setBusiness(biz);
    } else {
      fetchBusiness(id);
    }
    // Do not add business, businesses, fetchBusiness as dependencies
    // aside the already available ones
    // lest you fall into endless rerenders
  }, [id, setBusiness]);

  return (
    <>
      <Hero
        title={business?.businessName}
        bgImagePath={business?.businessMainImage}
        hasSearch={false}
        contentVerticalAlign="center"
      />
      <Grid item container className={classes.box}>
        <Grid item xs={false} sm={2} />
        <Grid
          item
          container
          xs={12}
          sm={8}
          className={classes.main}
          // spacing={3}
        >
          <Grid container className={classes.content} spacing={3}>
            <Grid item xs={12} sm={6}>
              {business?.businessSelectedCategories?.map(item => (
                <Typography key={item}>{item}</Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={12}>
              {business?.businessPhones?.map(item => (
                <Typography key={item}>{item}</Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>{business?.businessEmail}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>{business?.businessDescription}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};
export default BusinessDetails;
