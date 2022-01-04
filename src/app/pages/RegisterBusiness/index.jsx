import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Hero from 'components/Hero';
import CustomFormControl from 'components/CustomFormControl';
import CustomFormTextBox from 'components/CustomFormTextBox';
import CustomButton from 'components/CustomButton';
import HeroBG from 'assets/images/plantain.png';
import { useBusinesses } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';
import DataItemPicker from 'components/DataItemPicker';
import useStyles from './styles';

const filter = createFilterOptions();

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
    phones,
    services,
    website,
    registerBusiness,
    isRegisterFormValid,
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
    setPhones,
    setWebsite,
    getBusinessCategories,
    getBusinessCategory,
    getBusinessServices,
    getBusinessService,
    setSelectedCategory,
    setSelectedServices,
  } = useBusinesses();

  const subText =
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.';

  const handleClick = () => {
    registerBusiness();
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some(option => inputValue === option.value);
    if (inputValue !== '' && !isExisting) {
      filtered.push(inputValue);
    }

    return filtered;
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
              <CustomFormControl label="Phones">
                <DataItemPicker
                  multiple
                  freeSolo
                  selectOnFocus
                  clearOnBlur
                  loading={false}
                  loadingText=""
                  filterOptions={(options, params) =>
                    filterOptions(options, params)
                  }
                  isDropdown={false}
                  onChange={x => {
                    setPhones(x);
                  }}
                />
              </CustomFormControl>
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
              <CustomFormControl label="Category">
                <DataItemPicker
                  onChange={x => setSelectedCategory(x)}
                  initialOptions={getBusinessCategories}
                  handleGetData={x => getBusinessCategory(x)}
                />
              </CustomFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormControl label="Services">
                <DataItemPicker
                  multiple
                  onChange={x => setSelectedServices(x)}
                  initialOptions={getBusinessServices}
                  handleGetData={x => getBusinessServices(x)}
                />
              </CustomFormControl>
            </Grid>
            <Grid item container>
              <Grid item xs={12} sm={6}>
                <CustomButton
                  fullWidth
                  isLoading={isLoading}
                  label="Submit Business"
                  disabled={!isRegisterFormValid}
                  handleClick={handleClick}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default RegisterBusiness;
