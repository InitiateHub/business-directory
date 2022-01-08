import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  content: {
    // [theme.breakpoints.down('sm')]: {
    //   padding: theme.spacing(3),
    // },
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
    // '& > *': {
    //   marginBottom: theme.spacing(2),
    //   '&:last-child': {
    //     marginBottom: theme.spacing(4),
    //   },
    //   '&:only-child': {
    //     marginBottom: theme.spacing(4),
    //   },
    // },
  },
  box: {
    // display: 'flex',
    // flexDirection: 'column',
    paddingBlock: theme.spacing(6),
    backgroundColor: '#e5e5e5',
  },
  title: {
    // fontSize: '44px',
  },
  subTitle: {
    // fontWeight
  },
}));
export default useStyles;
