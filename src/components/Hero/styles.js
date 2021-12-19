import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'sticky',
    top: 0,
    zIndex: 2000,
    flexGrow: 1,
  },
  bar: {
    color: theme.palette.primary.main,
    boxShadow: '0 3px 6px #00000029',
  },
  toolbar: {
    position: 'relative',
    padding: 0,
  },
  menuButton: {
    width: 70,
    height: 70,
    backgroundColor: `${theme.palette.primary.main} !important`,
    borderRadius: 0,
  },
  logo: {
    height: 70,
    marginLeft: theme.spacing(2),
  },
  search: {
    position: 'absolute',
    left: 'calc(70%)',
    width: theme.spacing(33),
    height: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderRadius: theme.spacing(2.5),
    boxSizing: 'border-box',
  },
  searchIcon: {
    padding: theme.spacing(0, 2.25),
  },
  closeIconButton: {
    padding: 0,

    '& svg': {
      fill: '#4D4D4D',
    },
  },
  inputRoot: {
    flex: 1,
  },
  inputInput: {
    width: '100%',
    height: 'unset',
    padding: theme.spacing(1, 0, 1, 2.5),
    lineHeight: `${theme.spacing(3) - 2}px`,
    color: '#4D4D4D',
    transition: theme.transitions.create('width'),

    '&::placeholder': {
      color: '#7C7C7C',
    },
  },
  section: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  version: {
    marginRight: theme.spacing(2),
  },
  username: {
    marginRight: theme.spacing(3.75),
    color: '#4D4D4D',
  },
  userIcon: {
    marginRight: theme.spacing(5),
    padding: 0,
  },
  menuIconsContainer: {
    marginLeft: '15px',
  },
  topMenuButton: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#333',
    '&:hover': {
      backgroundColor: '#E20874',
      color: '#fff',
    },
  },
  userInfo: {
    float: 'right',
    // paddingLeft: '100px',
  },
}));
export default useStyles;