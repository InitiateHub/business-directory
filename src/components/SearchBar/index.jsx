import React, { useEffect, useState } from 'react';
import { OutlinedInput, InputAdornment, FormControl } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LinkButton from 'components/LinkButton';
import { useBusinesses } from 'hooks/Context';
import useStyles from './styles';

function SearchBar() {
  const { businesses, fetchBusinesses, searchResults, setSearchResults } =
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

    performSearch();

    console.log('res', searchResults);

    // console.log(JSON.stringify(currentParams)); // get new values onchange
  }, [businesses, searchParams]);

  const performSearch = () => {
    const lowerValue = value?.toLowerCase();
    if (businesses) {
      const nameRes = businesses.filter(e =>
        e.name.toLowerCase().includes(lowerValue),
      );
      const descRes = businesses.filter(e =>
        e.description.toLowerCase().includes(lowerValue),
      );
      const locRes = businesses.filter(e =>
        e.location.toLowerCase().includes(lowerValue),
      );
      const combinedRes = [...nameRes, ...descRes, ...locRes];
      const newRes = Array.from(new Set(combinedRes));
      setSearchResults(newRes);
    }
  };

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${value}`);
      performSearch();
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
