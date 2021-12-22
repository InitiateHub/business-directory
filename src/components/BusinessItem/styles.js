import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  card: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // fontSize: '44px',
  },
  description: {
    // fontWeight
  },
  icon: {
    // icons
  },
}));
export default useStyles;
