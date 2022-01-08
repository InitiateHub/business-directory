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
import UploadButtonFormControl from 'components/UploadButtonFormControl';
import useStyles from './styles';

const filter = createFilterOptions();

function RegisterBusiness() {
  useDocumentTitle('Register Business | TheBusinessDirectory');

  const classes = useStyles();

  const {
    isLoading,
    firstName,
    lastName,
    personalEmail,
    businessDescription,
    businessEmail,
    businessPhysicalAddress,
    businessMainImage,
    businessName,
    businessWebsite,
    registerBusiness,
    isRegisterFormValid,
    businessManagerName,
    catalogueImages,
    setCatalogueImages,
    setFirstName,
    setLastName,
    setPersonalEmail,
    setPersonalPhones,
    setBusinessDescription,
    setBusinessEmail,
    setBusinessPhysicalAddress,
    setBusinessMainImage,
    setBusinessName,
    setBusinessPhones,
    setBusinessWebsite,
    getBusinessCategories,
    getBusinessCategory,
    setSelectedBusinessCategories,
    setBusinessProductsOrServices,
    setBusinessManagerName,
    getBusinessProductsOrServices,
    getBusinessProductsOrService,
    setBusinessEstablishmentYear,
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

  return (
    <>
      <Hero
        title="Register your business"
        subTitle={subText}
        bgImagePath={HeroBG}
        hasSearch={false}
        // contentVerticalAlign="flex-end"
        height="300px"
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
            <Grid item xs={12}>
              <Typography variant="h5">Contact Information</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                label="First Name"
                value={firstName}
                handleOnChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                label="Last Name"
                value={lastName}
                handleOnChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormControl label="Phone(s)" required>
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
                    setPersonalPhones(x);
                  }}
                />
              </CustomFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                label="Email Address"
                value={personalEmail}
                handleOnChange={e => setPersonalEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Business Information</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                label="Business Name"
                value={businessName}
                handleOnChange={e => setBusinessName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                label="Business Manager Name"
                value={businessManagerName}
                handleOnChange={e => setBusinessManagerName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                label="Physical Address of Business"
                value={businessPhysicalAddress}
                handleOnChange={e => setBusinessPhysicalAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                label="Business Email"
                value={businessEmail}
                handleOnChange={e => setBusinessEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormControl label="Business Phone(s)" required>
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
                    setBusinessPhones(x);
                  }}
                />
              </CustomFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                isDisabled={isLoading}
                label="Website"
                value={businessWebsite}
                handleOnChange={e => setBusinessWebsite(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormControl label="Business Categories" required>
                <DataItemPicker
                  multiple
                  onChange={x => setSelectedBusinessCategories(x)}
                  initialOptions={getBusinessCategories}
                  handleGetData={x => getBusinessCategory(x)}
                />
              </CustomFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormControl label="Products or Services Rendered" required>
                <DataItemPicker
                  multiple
                  freeSolo
                  selectOnFocus
                  clearOnBlur
                  onChange={x => setBusinessProductsOrServices(x)}
                  initialOptions={getBusinessProductsOrServices}
                  handleGetData={x => getBusinessProductsOrService(x)}
                />
              </CustomFormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomFormTextBox
                isDisabled={isLoading}
                required
                multiline
                minRows={4}
                maxRows={5}
                label="Description of Business"
                value={businessDescription}
                handleOnChange={e => setBusinessDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UploadButtonFormControl
                isDisabled={isLoading}
                multiple={false}
                required
                label="Upload Business Logo"
                buttonLabel="Upload"
                attachments={businessMainImage}
                setAttachments={setBusinessMainImage}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UploadButtonFormControl
                isDisabled={isLoading}
                required
                label="Upload Business Catalogue Images"
                buttonLabel="Upload"
                attachments={catalogueImages}
                setAttachments={setCatalogueImages}
              />
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
