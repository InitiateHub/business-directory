import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
  search: {
    width: '100%',
    height: theme.spacing(10.4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4.2, 7.5),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4.2, 2.5),
    },
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    boxSizing: 'border-box',
    color: '#4D4D4D',
    transition: theme.transitions.create('width'),

    '&::placeholder': {
      color: '#7C7C7C',
    },
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  closeIconButton: {
    padding: 0,

    '& svg': {
      fill: '#4D4D4D',
    },
  },
}));
export default useStyles;
