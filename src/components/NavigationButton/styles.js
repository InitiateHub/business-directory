import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  button: {
    width: 'fit-content',
    height: theme.spacing(5),
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(0.5, 2.5),
    backgroundColor: props =>
      props.active
        ? theme.palette[props.color].main
        : theme.palette.common.white,
    // borderColor: props => theme.palette[props.color].main,
    // borderRadius: theme.spacing(2.5),
    // fontSize: '1rem',
    // fontWeight: 400,
    color: props =>
      props.active
        ? theme.palette.common.white
        : theme.palette[props.color].main,
    textTransform: 'none',

    '&:last-child': {
      marginRight: 0,
    },

    '&:hover': {
      color: props => theme.palette[props.color].main,
    },

    '& svg': {
      fontSize: '24px !important',
    },

    '& path': {
      stroke: 'none',
    },
  },
  buttonIcon: {
    marginLeft: 0,
    marginRight: theme.spacing(1.25),
    fill: 'currentColor',
  },
}));
export default useStyles;
