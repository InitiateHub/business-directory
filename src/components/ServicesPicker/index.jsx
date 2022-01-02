// import React, {
//   useCallback,
//   // useEffect,
//   useState,
// } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { CircularProgress, TextField, Autocomplete } from '@material-ui/core';
// import _debounce from 'lodash.debounce';
// import { useStyles } from 'utils/styles';

// import { getPeopleAction } from '../../store/actions/main';

// const ServicesPicker = props => {
//   const { label, value, onChange, multiple, initialOptions, ...rest } = props;
//   const classes = useStyles();

//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);
//   const [options, setOptions] = useState(initialOptions || []);
//   const [field, setField] = useState(value || []);

//   const loading = open && options.length === 0;

//   const debouncedLoad = useCallback(
//     _debounce(newValue => {
//       dispatch(getPeopleAction(newValue))
//         .then(peopleList => {
//           console.log('ServicesPicker peopleList', peopleList);
//           setOptions(peopleList);
//         })
//         .catch(e => {
//           console.log('ServicesPicker ERROR', e);
//         });
//     }, 1000),
//     [],
//   );

//   const handleChangeTextField = e => {
//     setField(e.target.value);
//     debouncedLoad(e.target.value);
//   };

//   // useEffect(() => {
//   //   if (!open) {
//   //     setOptions([]);
//   //   }
//   // }, [open]);

//   return (
//     <Autocomplete
//       {...rest}
//       className={classes.inputDiv}
//       open={open}
//       onOpen={() => {
//         setOpen(true);
//       }}
//       onClose={() => {
//         setOpen(false);
//       }}
//       onChange={(e, val) => onChange(val)}
//       getOptionLabel={option =>
//         `${option?.DisplayText} (${option?.EntityData?.Email})`
//       }
//       getOptionSelected={(option, optionValue) =>
//         option.EntityData?.Email === optionValue.EntityData?.Email
//       }
//       value={value}
//       options={options.concat(initialOptions)}
//       loading={loading}
//       multiple={multiple}
//       style={{ width: 450 }}
//       renderInput={params => (
//         <TextField
//           {...params}
//           label={label}
//           variant="outlined"
//           onChange={handleChangeTextField}
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <>
//                 {loading ? (
//                   <CircularProgress color="inherit" size={20} />
//                 ) : null}
//                 {params.InputProps.endAdornment}
//               </>
//             ),
//           }}
//         />
//       )}
//     />
//   );
// };

// ServicesPicker.propTypes = {
//   label: PropTypes.string,
//   value: PropTypes.any,
//   onChange: PropTypes.func,
// };

// ServicesPicker.defaultProps = {
//   label: '',
//   value: {},
//   onChange: () => {},
// };

// export default ServicesPicker;
