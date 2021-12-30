import { React } from 'react';
import {
  Grid,
  Card,
  Box,
  Typography,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { LocationOn, Phone } from '@material-ui/icons';
import CustomButton from 'components/CustomButton';
import LinkButton from 'components/LinkButton';
import PropTypes from 'prop-types';
import useStyles from './styles';

const BusinessItem = ({ business }) => {
  const classes = useStyles();

  const { name, description, mainImage, phone, location } = business;
  const placeholderImage = 'https://via.placeholder.com/150';
  // console.log(business);

  return (
    <Grid item xs={12} md={6}>
      <Box className={classes.card}>
        <div className={classes.content}>
          <Box className={classes.imageContainer}>
            <CardMedia
              component="img"
              className={classes.cardImage}
              image={mainImage || placeholderImage}
              alt="business image"
            />
          </Box>
          <div className={classes.textContent}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            {/* <Typography variant="subtitle1" component="div">
              {description}
            </Typography> */}
            <div className={classes.info}>
              <Box display="flex" alignItems="center">
                <Phone /> {phone.length > 0 && phone[0]}
              </Box>
              <Box display="flex" alignItems="center">
                <LocationOn /> {location}
              </Box>
            </div>
            <LinkButton
              variant="outlined"
              label="View Business"
              route={`/business/${business.id}`}
            />
          </div>
        </div>
        <Box />
      </Box>
    </Grid>
  );
};

// BusinessItem.propTypes = {
//   business: PropTypes.object.isRequired,
// };

export default BusinessItem;
