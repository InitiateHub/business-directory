import { React } from 'react';
import {
  Grid,
  Card,
  Box,
  Typography,
  CardContent,
  CardMedia,
} from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';
import CustomButton from 'components/CustomButton';
import LinkButton from 'components/LinkButton';
import PropTypes from 'prop-types';
import { truncateString } from 'utils';
import useStyles from './styles';

const BusinessItem = ({ business }) => {
  const classes = useStyles();

  const {
    businessName,
    businessDescription,
    businessMainImage,
    businessPhones,
    businessPhysicalAddress,
  } = business;
  const placeholderImage = 'https://via.placeholder.com/150';
  // console.log(business);

  return (
    <Grid item xs={12} md={6}>
      <Grid container className={classes.card}>
        <Grid item xs={12} md={4} className={classes.imageContainer}>
          <CardMedia
            component="img"
            className={classes.cardImage}
            image={businessMainImage || placeholderImage}
            alt="logo"
          />
        </Grid>
        <Grid item container xs={12} md={8}>
          <Box className={classes.textContent}>
            <Typography component="h1" variant="h6">
              {businessName && businessName}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {truncateString(businessDescription && businessDescription, 30)}
            </Typography>
            <div className={classes.info}>
              {businessPhones?.length > 0 && (
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.infoitem}
                >
                  <Phone className={classes.icon} /> {businessPhones[0]}
                </Box>
              )}
              <Box
                display="flex"
                alignItems="center"
                className={classes.infoitem}
              >
                <LocationOn className={classes.icon} />{' '}
                {businessPhysicalAddress && businessPhysicalAddress}
              </Box>
            </div>
            <LinkButton
              variant="outlined"
              label="View Business"
              route={`/business/${business?.internalId}`}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

BusinessItem.propTypes = {
  business: PropTypes.object.isRequired,
};

export default BusinessItem;
