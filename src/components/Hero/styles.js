import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  // heroContainer: ({ height, bgImagePath }) => ({
  //   minHeight: `${height}px`,
  //   backgroundImage: `url(${bgImagePath})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   margin: -4,

  //   [theme.breakpoints.down('sm')]: {
  //     padding: theme.spacing(3),
  //   },
  // }),
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
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
