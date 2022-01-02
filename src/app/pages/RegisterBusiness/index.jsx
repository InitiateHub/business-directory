import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Hero from 'components/Hero';
import CustomFormTextBox from 'components/CustomFormTextBox';
import CustomButton from 'components/CustomButton';
import HeroBG from 'assets/images/plantain.png';
import { useBusinesses } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useStyles from './styles';

function RegisterBusiness() {
  useDocumentTitle('Register Business | TheBusinessDirectory');

  const classes = useStyles();

  const {
    isLoading,
    catalogueImages,
    category,
    description,
    email,
    gpsLocation,
    latitude,
    longitude,
    location,
    mainImage,
    name,
    numberofEmployees,
    phone,
    services,
    website,
    registerBusiness,
    setCatalogueImages,
    setFolderUID,
    setCategory,
    setDescription,
    setEmail,
    setGpsLocation,
    setLatitude,
    setLongitude,
    setLocation,
    setMainImage,
    setName,
    setNumberOfEmployees,
    setPhone,
    setServices,
    setWebsite,
  } = useBusinesses();

  const subText =
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.';

  const handleClick = () => {
    registerBusiness();
  };

  // useEffect(() => {
  //   console.log(email);
  // }, [email]);

  return (
    <>
      <Hero
        title="Register your business"
        subTitle={subText}
        bgImagePath={HeroBG}
        hasSearch={false}
        // contentVerticalAlign="flex-end"
        height={300}
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
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Business Name"
                value={name}
                handleOnChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Description"
                value={description}
                handleOnChange={e => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Location"
                value={location}
                handleOnChange={e => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Email"
                value={email}
                handleOnChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Phone"
                value={phone}
                handleOnChange={e => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Website"
                value={website}
                handleOnChange={e => setWebsite(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox isDisabled={isLoading} label="Upload Logo" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Category"
                value={category}
                handleOnChange={e => setCategory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomButton
                fullWidth
                isLoading={isLoading}
                label="Submit Business"
                handleClick={handleClick}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default RegisterBusiness;
