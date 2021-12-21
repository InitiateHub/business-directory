import { React } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import useStyles from './styles';

const Hero = ({ bgImagePath, height, title, subTitle }) => {
  const classes = useStyles();
  const styles = {
    heroContainer: {
      minHeight: `${height}px`,
      backgroundImage: `url(${bgImagePath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: -4,
      padding: 24,
    },
  };

  return (
    <Grid item container style={styles.heroContainer}>
      <Grid item xs={false} sm={2} />
      <Grid
        item
        container
        xs={12}
        sm={8}
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.box}>
          <Typography variant="h2" component="h1" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.subTitle}>
            {subTitle}
          </Typography>
          <SearchBar />
        </Box>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

Hero.propTypes = {
  bgImagePath: PropTypes.string.isRequired,
  height: PropTypes.number,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

Hero.defaultProps = {
  height: 560,
  title: '',
  subTitle: '',
};

export default Hero;
