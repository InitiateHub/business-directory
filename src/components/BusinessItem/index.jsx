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
import PropTypes from 'prop-types';
import useStyles from './styles';

const BusinessItem = () => {
  const classes = useStyles();
  const business = {
    image: '',
    name: 'John',
    description: 'Smith asdd asde dffe df',
    phone: '+233245425258',
    location: 'abansi',
  };
  const { name, description, image, phone, location } = business;
  const placeholderImage = 'https://via.placeholder.com/150';

  return (
    <Grid item xs={12} md={6}>
      <Box className={classes.card}>
        <div className={classes.content}>
          <Box className={classes.imageContainer}>
            <CardMedia
              component="img"
              className={classes.cardImage}
              image={image || placeholderImage}
              alt="business image"
            />
          </Box>
          <div className={classes.textContent}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" component="div">
              {description}
            </Typography>
            <div className={classes.info}>
              <Box display="flex" alignItems="center">
                <Phone /> {phone}
              </Box>
              <Box display="flex" alignItems="center">
                <LocationOn /> {location}
              </Box>
            </div>
            <CustomButton variant="outlined" label="View Business" />
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
