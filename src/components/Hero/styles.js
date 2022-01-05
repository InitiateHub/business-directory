import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  heroContainer: props => ({
    minHeight: `${props.height}`,
    backgroundImage: `linear-gradient(0deg, ${props.gradientFrom}, ${props.gradientTo}),        
    url(${props.bgImagePath})`,
    backgroundColor: `${props.bgColor}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: -1,

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
        marginBlock: `${theme.spacing(props.mBlock ?? 4)} `,
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
