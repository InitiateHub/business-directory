import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import Hero from 'components/Hero';
import { useBusinesses } from 'hooks/Context';
import useStyles from './styles';

const BusinessDetails = () => {
  const classes = useStyles();

  const { businesses, business, fetchBusiness } = useBusinesses();

  const { id } = useParams();
  const [selectedBusiness, setSelectedBusiness] = useState({});

  useEffect(() => {
    if (businesses.length > 0) {
      const biz = businesses?.find(item => item.id === id);
      console.log('inside', biz);
      setSelectedBusiness(biz);
    } else {
      fetchBusiness(id);
      console.log('outside', business);
      setSelectedBusiness(business);
    }
  }, [business, id]);

  return (
    <>
      <Hero
        title={selectedBusiness?.name}
        bgImagePath={selectedBusiness?.mainImage}
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
              <Typography>{selectedBusiness.category}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {selectedBusiness.phone?.map(item => (
                <Typography>{item}</Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>{selectedBusiness?.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>{selectedBusiness?.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};
export default BusinessDetails;
