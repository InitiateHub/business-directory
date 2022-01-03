import { React } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import useStyles from './styles';

const Hero = ({
  bgImagePath,
  height,
  title,
  subTitle,
  hasSearch,
  contentVerticalAlign,
}) => {
  const classes = useStyles({ height, bgImagePath, contentVerticalAlign });

  return (
    <Grid item container className={classes.heroContainer}>
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
          {title && (
            <Typography variant="h2" component="h1" className={classes.title}>
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography variant="body1" className={classes.subTitle}>
              {subTitle}
            </Typography>
          )}
          {hasSearch && <SearchBar />}
        </Box>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

Hero.propTypes = {
  bgImagePath: PropTypes.string,
  height: PropTypes.number,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  hasSearch: PropTypes.bool,
  contentVerticalAlign: PropTypes.string,
};

Hero.defaultProps = {
  hasSearch: true,
  contentVerticalAlign: 'center',
  height: 560,
  title: '',
  subTitle: '',
};

export default Hero;
