import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
  label: {
    color: '#111111',
  },
  required: {
    '&::after': {
      content: "'*'",
      color: theme.palette.primary.main,
      fontSize: '1.5rem',
      lineHeight: '1rem',
    },
  },
  formControl: {
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(2.5),
    width: '100%',
  },
  input: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    // padding: theme.spacing(1, 1),
    // height: theme.spacing(10.4),
    // [theme.breakpoints.up('sm')]: {
    //   padding: theme.spacing(4.2, 7.5),
    // },
    // [theme.breakpoints.down('sm')]: {
    //   padding: theme.spacing(4.2, 2.5),
    // },
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    boxSizing: 'border-box',
    color: '#4D4D4D',
    transition: theme.transitions.create('width'),

    '& > input': {
      padding: theme.spacing(2, 2),
      '&:focus': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        borderRadius: 10,
      },
    },

    '&::placeholder': {
      color: '#7C7C7C',
    },

    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
}));
