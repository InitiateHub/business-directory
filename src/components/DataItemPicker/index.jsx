import React, {
  useCallback,
  // useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgress, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import _debounce from 'lodash.debounce';
import { useStyles } from 'utils/styles';

const DataItemPicker = props => {
  const {
    label,
    value,
    onChange,
    handleGetData,
    multiple,
    initialOptions,
    ...rest
  } = props;
  const classes = useStyles();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions || []);
  const [field, setField] = useState(value || []);

  const loading = open && options.length === 0;

  const debouncedLoad = useCallback(
    _debounce(newValue => {
      dispatch(handleGetData(newValue))
        .then(dataList => {
          console.log('DataItemPicker dataList', dataList);
          setOptions(dataList);
        })
        .catch(e => {
          console.log('DataItemPicker ERROR', e);
        });
    }, 1000),
    [],
  );

  const handleChangeTextField = e => {
    setField(e.target.value);
    debouncedLoad(e.target.value);
  };

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

  return (
    <Autocomplete
      {...rest}
      fullWidth
      className={classes.inputDiv}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e, val) => onChange(val)}
      getOptionLabel={option =>
        `${option?.DisplayText} (${option?.EntityData?.Email})`
      }
      getOptionSelected={(option, optionValue) =>
        option.EntityData?.Email === optionValue.EntityData?.Email
      }
      value={value}
      options={options.concat(initialOptions)}
      loading={loading}
      multiple={multiple}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          onChange={handleChangeTextField}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
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
};

DataItemPicker.defaultProps = {
  label: '',
  value: {},
  onChange: () => {},
};

export default DataItemPicker;
