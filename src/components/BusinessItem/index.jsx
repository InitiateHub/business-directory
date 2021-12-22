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

  return (
    <Grid item xs={12} md={6} spacing={2}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={image}
          alt="business image"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {description}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} />
        </Box>
      </Card>
    </Grid>
  );
};

// BusinessItem.propTypes = {
//   business: PropTypes.object.isRequired,
// };

export default BusinessItem;
