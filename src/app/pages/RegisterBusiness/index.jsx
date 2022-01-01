import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Hero from 'components/Hero';
import CustomFormTextBox from 'components/CustomFormTextBox';
import CustomButton from 'components/CustomButton';
import HeroBG from 'assets/images/plantain.png';
import useStyles from './styles';

function RegisterBusiness() {
  const classes = useStyles();

  const subText =
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.';

  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [businessName, setBusinessName] = useState('');

  // useEffect(() => {
  //   console.log(fullName);
  // }, [fullName]);

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
                label="Business Name"
                value={businessName}
                handleOnChange={e => setBusinessName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                label="Description"
                value={description}
                handleOnChange={e => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                label="Location"
                value={location}
                handleOnChange={e => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                label="Email"
                value={email}
                handleOnChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                label="Phone"
                value={phone}
                handleOnChange={e => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                label="Website"
                value={website}
                handleOnChange={e => setWebsite(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox label="Upload Logo" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormTextBox
                label="Category"
                value={category}
                handleOnChange={e => setCategory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomButton fullWidth label="Submit Business" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default RegisterBusiness;
