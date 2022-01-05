import React from 'react';
import {
  Typography,
  Button,
  FilledInput,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Input,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import CustomButton from 'components/CustomButton';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';

function SearchBar({ value, handleChange }) {
  const classes = useStyles();

  const location = useLocation();
  console.log(JSON.stringify(new URLSearchParams(location), null, 2));

  return (
    <FormControl variant="filled" hiddenLabel className={classes.formControl}>
      <OutlinedInput
        className={classes.search}
        fullWidth
        type="text"
        // disableUnderline
        value={value}
        onChange={x => handleChange(x)}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <CustomButton
              label="Search"
              aria-label="begin search"
              // onClick={handleClickShowPassword}
            />
          </InputAdornment>
        }
        // label="Search"
      />
    </FormControl>
  );
}
export default SearchBar;
