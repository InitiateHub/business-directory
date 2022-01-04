import React, {
  useCallback,
  // useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgress, FilledInput, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import _debounce from 'lodash.debounce';
import { useStyles as useGlobalStyles } from 'utils/styles';
import { useStyles } from './styles';

const DataItemPicker = ({
  label,
  // value,
  loading,
  onChange,
  handleGetData,
  multiple,
  initialOptions,
  isDropdown,
  ...rest
}) => {
  const globalClasses = useGlobalStyles();
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions ?? []);
  const [value, setValue] = useState();

  // const loading = open && options?.length === 0;

  const debouncedLoad = useCallback(
    _debounce(newValue => {
      // console.log(newValue);
      // dispatch(handleGetData(newValue))
      //   .then(dataList => {
      //     console.log('DataItemPicker dataList', dataList);
      //     setOptions(dataList);
      //   })
      //   .catch(e => {
      //     console.log('DataItemPicker ERROR', e);
      //   });
    }, 1000),
    [],
  );

  const handleChangeTextField = e => {
    // setField(e.target.value);
    debouncedLoad(e.target.value);
  };

  return (
    <Autocomplete
      {...rest}
      fullWidth
      // className={globalClasses.input}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e, val) => {
        onChange(val);
      }}
      getOptionLabel={option => `${option ?? option}`}
      isOptionEqualToValue={(option, optionValue) => option === optionValue}
      value={value}
      options={options}
      loading={loading || (open && options?.length === 0)}
      multiple={multiple}
      renderInput={params => (
        <TextField
          {...params}
          type="text"
          onChange={handleChangeTextField}
          className={classes.input}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {isDropdown ? params.InputProps.endAdornment : null}
              </>
            ),
          }}
        />
      )}
    />
  );
};

DataItemPicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  isDropdown: PropTypes.bool,
};

DataItemPicker.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
  isDropdown: true,
};

export default DataItemPicker;
