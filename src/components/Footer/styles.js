import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.black,
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.common.white,
    paddingTop: theme.spacing(12.75),
    paddingBottom: theme.spacing(4.2),
    '& > *': {
      marginBottom: theme.spacing(3.25),
      '&: last - child': {
        marginBottom: 0,
      },
    },
  },
  socials: {
    // color: `${theme.palette.common.white} !important`,
    '& > *': {
      color: `${theme.palette.common.white}`,
      marginRight: theme.spacing(2.5),
      '&:last - child': {
        marginRight: 0,
      },
      '&:hover': {
        color: `${theme.palette.primary.main}`,
      },
    },
  },
}));
export default useStyles;
