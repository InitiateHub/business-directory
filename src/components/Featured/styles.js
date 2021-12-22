import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    padding: 24,
    color: theme.palette.common.white,
    '& > *': {
      marginBottom: theme.spacing(4),
      '&: last - child': {
        marginBottom: 0,
      },
    },
  },
  title: {
    // fontSize: '44px',
  },
  subTitle: {
    // fontWeight
  },
}));
export default useStyles;
