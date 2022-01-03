import React from 'react';
import {
  Typography,
  Button,
  FilledInput,
  InputAdornment,
  FormControl,
  Input,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import CustomButton from 'components/CustomButton';
import useStyles from './styles';

function SearchBar() {
  const classes = useStyles();
  return (
    <FormControl variant="filled" hiddenLabel className={classes.formControl}>
      <Input
        className={classes.search}
        fullWidth
        type="text"
        disableUnderline
        // value={values.password}
        // onChange={handleChange('password')}
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
