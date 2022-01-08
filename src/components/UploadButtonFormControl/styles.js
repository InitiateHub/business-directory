import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& svg': {
      fill: theme.palette.primary.main,
    },
    color: theme.palette.action.active,
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(2.5),
    '& button': {
      textTransform: 'none',

      '&[disabled]': {
        '& svg': {
          fill: theme.palette.action.disabled,
        },
      },
    },
  },
  uploadButton: {
    marginTop: theme.spacing(2),
    '& input': {
      display: 'none',
    },
    transition: theme.transitions.create('width'),
    paddingBlock: theme.spacing(1.75),
  },
  link: {
    textDecorationColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  attachmentsList: fullWidth => ({
    display: 'flex',
    paddingInline: theme.spacing(3),
    flexDirection: 'column',
    flexGrow: '1',
    // width: fullWidth ? '100%' : 'fit-content',
    marginTop: theme.spacing(1),
    '& p': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '& > span': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        color: theme.palette.primary.main,
        marginRight: theme.spacing(5),
        '& svg': {
          fontSize: '1rem',
          marginRight: theme.spacing(1),
        },
      },
      '&:not(:last-child)': {
        borderBottom: 'solid 0.5px',
        color: theme.palette.divider,
      },
      '& svg': {
        fontSize: '1rem',
      },
    },
    '& button': {
      padding: theme.spacing(0.5),
      minWidth: 'fit-content',
      '& svg': {
        fontSize: '1rem',
        fill: theme.palette.text.secondary,
      },
    },
  }),
}));
