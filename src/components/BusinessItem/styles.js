import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  info: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    '& > *': {
      marginRight: theme.spacing(3),
      '&: last - child': {
        marginRight: 0,
      },
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    width: '100%',
    padding: theme.spacing(2),
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    paddingLeft: theme.spacing(1.9),
  },
  card: {
    // display: 'flex',
    // flexWrap: 'nowrap',
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
    paddingInline: theme.spacing(2),
    // width: '100%',
    color: '#4d4d4d',
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.standard,
    }),
    backgroundColor: '#fcfcfc',
    borderRadius: '10px',
  },
  imageContainer: {
    width: '30%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
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
}));
export default useStyles;
