import makeStyles from '@material-ui/core/styles/makeStyles';

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
    '& > *': {
      marginBottom: theme.spacing(4),
      '&:last-child': {
        marginBottom: 0,
      },
      '&:only-child': {
        marginBottom: 0,
      },
    },
  },
  box: {
    // display: 'flex',
    // flexDirection: 'column',
    paddingBlock: theme.spacing(6),
    backgroundColor: '#FFF',
  },
  title: {
    // fontSize: '44px',
  },
  subTitle: {
    // fontWeight
  },
}));
export default useStyles;
