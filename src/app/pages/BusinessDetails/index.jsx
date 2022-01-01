import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import Hero from 'components/Hero';
import AllBusinessesData from 'assets/mockData';
import useStyles from './styles';

const BusinessDetails = () => {
  const classes = useStyles();

  const { id } = useParams();
  const [selectedBusiness, setSelectedBusiness] = useState({});
  useEffect(() => {
    const biz = AllBusinessesData.find(item => item.id === id);
    setSelectedBusiness(biz);
  }, [id]);

  console.log(selectedBusiness.mainImage);
  return (
    <>
      <Hero
        title={selectedBusiness.name}
        bgImagePath={selectedBusiness.mainImage}
        hasSearch={false}
        contentVerticalAlign="flex-end"
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
          <Typography variant="h2">Content</Typography>
          <Grid container className={classes.content}>
            Contetn
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};
export default BusinessDetails;
