import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    '& button': {
      textTransform: 'none',
    },
  },
  filename: {
    color: theme.palette.primary.main,
  },
}));
