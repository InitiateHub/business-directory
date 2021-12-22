import { React } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import BusinessItem from 'components/BusinessItem';
import useStyles from './styles';

const Featured = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      Featured
      <BusinessItem />
    </div>
  );
};

export default Featured;
