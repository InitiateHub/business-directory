import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  heroContainer: props => ({
    minHeight: `${props.height}px`,
    backgroundImage: `linear-gradient(0deg, #00000099, #00000099),        
    url(${props.bgImagePath})`,
    backgroundColor: '#f5f5f5',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: -4,

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  }),
  box: props => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: `${props.contentVerticalAlign}`,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    color: theme.palette.common.white,
    '& > *': {
      marginBottom: theme.spacing(4),
      '&:last-child': {
        marginBottom: 0,
      },
      '&:only-child': {
        marginBottom: theme.spacing(0),
      },
    },
  }),
  title: {
    // fontSize: '44px',
  },
  subTitle: {
    // fontWeight
  },
}));
export default useStyles;
