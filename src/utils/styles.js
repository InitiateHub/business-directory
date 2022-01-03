import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
  descriptionText: {
    color: '#0000008a',
    marginBottom: '24px',
  },

  inputBg: {
    color: theme.palette.common.white,
    backgroundColor: props =>
      props.type === 'BK'
        ? theme.palette.primary.blue
        : theme.palette.primary.main,
  },

  hidden: { display: 'none' },

  mainTitle: {
    fontSize: '25px',
    fontWeight: '700',
    textTransform: 'uppercase',
    borderRadius: '4px',
    flexGrow: `1`,
  },

  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '& svg': {
      fill: props =>
        props.type === 'BK'
          ? theme.palette.primary.blue
          : theme.palette.primary.main,
    },
    color: theme.palette.text.primary,
    '& button': {
      textTransform: 'none',

      '&[disabled]': {
        '& svg': {
          fill: theme.palette.action.disabled,
        },
      },
    },
    '& input': {
      padding: theme.spacing(1),
    },
    '& textarea': {
      padding: theme.spacing(1),
    },
    '& .Mui-focused fieldset': {
      borderColor: props =>
        `${
          props.type === 'BK'
            ? theme.palette.primary.blue
            : theme.palette.primary.main
        } !important`,
    },
    '& button.MuiButton-outlined.active': {
      backgroundColor: props =>
        `${
          props.type === 'BK'
            ? theme.palette.primary.blue
            : theme.palette.primary.main
        } !important`,
    },
    '& button:not(.Mui-disabled).MuiButton-outlined.MuiButton-outlinedPrimary':
      {
        color: props =>
          `${
            props.type === 'BK'
              ? theme.palette.primary.blue
              : theme.palette.primary.main
          } !important`,
        borderColor: props =>
          `${
            props.type === 'BK'
              ? theme.palette.primary.blue
              : theme.palette.primary.main
          }88 !important`,

        '&:hover': {
          borderColor: props =>
            `${
              props.type === 'BK'
                ? theme.palette.primary.blue
                : theme.palette.primary.main
            }88 !important`,
          backgroundColor: props =>
            `${
              props.type === 'BK'
                ? theme.palette.primary.blue
                : theme.palette.primary.main
            }0A !important`,
        },
      },
    '& button:not(.Mui-disabled).MuiButton-contained.MuiButton-containedPrimary':
      {
        borderColor: props =>
          `${
            props.type === 'BK'
              ? theme.palette.primary.blue
              : theme.palette.primary.main
          }88 !important`,
        backgroundColor: props =>
          `${
            props.type === 'BK'
              ? theme.palette.primary.blue
              : theme.palette.primary.main
          } !important`,

        '& > span > span > svg': {
          fill: theme.palette.common.white,
        },
        '&:hover': {
          borderColor: props =>
            `${
              props.type === 'BK'
                ? theme.palette.primary.blue
                : theme.palette.primary.main
            }88 !important`,
          backgroundColor: props =>
            `${
              props.type === 'BK'
                ? theme.palette.primary.blue
                : theme.palette.primary.main
            } !important`,
          /*
      '& > span > span > svg': {
        fill: theme.palette.common.white,
      }, */
        },
      },
    '& label.MuiFormLabel-root': {
      '&[class*="required"]': {
        '&::after': {
          color: props =>
            `${
              props.type === 'BK'
                ? theme.palette.primary.blue
                : theme.palette.primary.main
            } !important`,
        },
      },
      '&.Mui-focused': {
        color: props =>
          `${
            props.type === 'BK'
              ? theme.palette.primary.blue
              : theme.palette.primary.main
          } !important`,
      },
    },
    '& div.MuiCircularProgress-root.MuiCircularProgress-colorPrimary': {
      color: props =>
        `${
          props.type === 'BK'
            ? theme.palette.primary.blue
            : theme.palette.primary.main
        } !important`,
    },
    '& label[class*="inputCheck"]': {
      '& > div > div': {
        '& > span.back > svg': {
          stroke: props =>
            `${
              props.type === 'BK'
                ? theme.palette.primary.blue
                : theme.palette.primary.main
            } !important`,
        },
        '& > span.tick > svg': {
          fill: props =>
            `${
              props.type === 'BK'
                ? theme.palette.primary.blue
                : theme.palette.primary.main
            } !important`,
        },
      },
    },
  },
  sideButtons: {
    position: 'absolute',
    top: '170px',
    left: -theme.spacing(11.5),
    display: 'flex',
    flexDirection: 'column',

    '& > button:first-child': {
      borderTopRightRadius: theme.spacing(0.5),
    },

    '& > button:last-child': {
      borderBottomRightRadius: theme.spacing(0.5),
    },

    '& > button[class*="active"]': {
      backgroundColor: props =>
        props.type === 'BK'
          ? theme.palette.primary.blue
          : theme.palette.primary.main,
      color: theme.palette.common.white,

      '& svg': {
        fill: theme.palette.common.white,
      },

      '&[class*="threeDotsSVG"]': {
        '& svg': {
          fill: props =>
            props.type === 'BK'
              ? theme.palette.primary.blue
              : theme.palette.primary.main,
          stroke: theme.palette.common.white,
        },
      },
      '&[class*="addIconSVG"]': {
        '& svg': {
          fill: theme.palette.common.white,
          stroke: theme.palette.common.white,
        },
      },
    },

    '& > button[class*="valid"]': {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,

      '& svg': {
        fill: theme.palette.common.white,
      },

      '&[class*="threeDotsSVG"]': {
        '& > span > svg': {
          fill: theme.palette.success.main,
          stroke: theme.palette.common.white,
        },
      },

      '&[class*="addIconSVG"]': {
        '& svg': {
          fill: props =>
            props.type === 'BK'
              ? theme.palette.primary.blue
              : theme.palette.primary.main,
          stroke: theme.palette.common.white,
        },
      },
    },
  },
  threeDotsSVG: {
    '& > span > svg': {
      fill: 'none',
      stroke: theme.palette.text.secondary,
    },
  },
  columnOne: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  columnTwo: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  columnThird: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  paddindNoTitleOnColumn: {
    paddingTop: '52px',
  },
  backButton: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(0),
    color: props =>
      props.type === 'BK'
        ? theme.palette.primary.blue
        : theme.palette.primary.main,
    '& svg': {
      fontSize: '3rem',
    },
  },
  headerTitle: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontWeight: 700,
    color: props =>
      props.type === 'BK'
        ? theme.palette.primary.blue
        : theme.palette.primary.main,
  },
  submitButton: {
    '& svg': {
      fill: theme.palette.common.white,
    },
  },
  headerButtons: {
    '& > button': {
      '& + button': {
        marginLeft: theme.spacing(1),
      },
    },
  },
  columnTitle: {
    color: props =>
      props.type === 'BK'
        ? theme.palette.primary.blue
        : theme.palette.primary.main,
    fontSize: '1.2rem',
    marginBottom: theme.spacing(3),
  },
  marginY: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2.5),
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
  marginRight: {
    marginRight: '10px',
  },
  marginBottom: {
    marginBottom: theme.spacing(2.5),
  },
  inputDiv: {
    marginTop: theme.spacing(1),
    '& > div': {
      padding: 0,
    },
  },
  inputCheck: {
    marginTop: theme.spacing(1),
    '& > div': {
      paddingLeft: 0,
    },
  },
  inputCheckMarginRight: {
    marginRight: '55px',
  },
  datepicker: {
    margin: 0,
    maxWidth: '80%',
    marginTop: theme.spacing(1),
    '& > div': {
      padding: 0,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      maxWidth: '100%',
      marginLeft: '0px',
    },
  },
  isSaving: {
    margin: '0 6.5px',
    color: theme.palette.action.disabled,
  },
}));
