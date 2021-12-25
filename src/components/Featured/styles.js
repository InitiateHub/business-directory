import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  main: {
    '& > *': {
      marginBottom: theme.spacing(4),
      '&: last - child': {
        marginBottom: 0,
      },
    },
  },
  box: {
    // display: 'flex',
    // flexDirection: 'column',
    paddingBlock: theme.spacing(6),
    backgroundColor: '#FAFAFA',
  },
  title: {
    // fontSize: '44px',
  },
  subTitle: {
    // fontWeight
  },
}));
export default useStyles;
