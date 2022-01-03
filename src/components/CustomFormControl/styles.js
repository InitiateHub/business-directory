import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
  required: {
    '&::after': {
      content: "'*'",
      color: theme.palette.primary.main,
      fontSize: '1.5rem',
      lineHeight: '1rem',
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2.5),
  },
}));
