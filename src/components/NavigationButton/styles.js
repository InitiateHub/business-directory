import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    width: 'fit-content',
    height: theme.spacing(5.6),
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(1.5, 2.25),
    fontWeight: 'bold',
    '&:last-child': {
      marginRight: 0,
    },
    '&:only-child': {
      marginRight: 0,
    },

    '& svg': {
      fontSize: '24px !important',
    },

    '& path': {
      stroke: 'none',
    },
  },
  buttonIcon: {
    marginLeft: 0,
    marginRight: theme.spacing(1.25),
    fill: 'currentColor',
  },
}));
export default useStyles;
