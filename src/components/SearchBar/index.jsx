import React, { useEffect, useState } from 'react';
import { OutlinedInput, InputAdornment, FormControl } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LinkButton from 'components/LinkButton';
import { useBusinesses } from 'hooks/Context';
import useStyles from './styles';

function SearchBar() {
  const { businesses, fetchBusinesses, searchResults, performSearch } =
    useBusinesses();

  const classes = useStyles();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get('q')?.toLowerCase() || '',
  );

  const [results, setResults] = useState([]);

  useEffect(() => {
    // const currentParams = Object.fromEntries([...searchParams]);

    performSearch(value);
    // console.log(JSON.stringify(currentParams)); // get new values onchange
  }, [businesses, searchParams]);

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${value}`);
      performSearch(value);
    }
  };

  return (
    <FormControl variant="filled" hiddenLabel className={classes.formControl}>
      <OutlinedInput
        className={classes.search}
        fullWidth
        type="text"
        placeholder="Search for any business"
        value={value}
        onChange={x => setValue(x.target.value)}
        onKeyDown={e => handleKeyUp(e)}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <LinkButton
              label="Search"
              route={value ? `/search?q=${value}` : ''}
            />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
export default SearchBar;
