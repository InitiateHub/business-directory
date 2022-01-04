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
    width: '100%',
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2.5),
  },
}));
