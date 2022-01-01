import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    // flexGrow: 1,
    // flexWrap: 'nowrap',
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
    paddingBlock: theme.spacing(2),
    paddingInline: theme.spacing(2),
    // width: '100%',
    height: '100%',
    color: '#4d4d4d',
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.standard,
    }),
    backgroundColor: '#fafafa',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
      transition: theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    flexGrow: 1,
    // width: '100%',
    // height: '100%',
    // justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-around',
    // width: '70%',
    paddingLeft: theme.spacing(1.9),
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
  },
  imageContainer: {
    // width: '30%',
    display: 'flex',
    alignItems: 'stretch',
    // justifyContent: 'center',
    // alignSelf: 'stretch',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  cardImage: {
    borderRadius: '10px',
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
  info: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    '& > *': {
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(1),
      '&:last-child': {
        marginRight: 0,
        marginBottom: 0,
      },
      '&:only-child': {
        marginRight: 0,
        marginBottom: 0,
      },
    },
  },
  infoitem: {
    // marginBottom: theme.spacing(1),
    // '&:last-child': {
    //   marginBottom: 0,
    // },
  },
}));
export default useStyles;
