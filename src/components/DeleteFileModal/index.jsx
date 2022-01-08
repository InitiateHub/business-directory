import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useStyles } from './styles';

const DeleteFileModal = ({ open, setOpen, cbOk, filename }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDelete = () => {
    cbOk();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-title"
    >
      <Box className={classes.container}>
        <DialogTitle id="alert-dialog-title">
          <Typography>
            Are you sure you want to delete{' '}
            <span className={classes.filename}>{filename}?</span>
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button
            id="abort-button"
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            id="delete-button"
            variant="contained"
            color="primary"
            autoFocus
            onClick={handleClickDelete}
          >
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

DeleteFileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  cbOk: PropTypes.func.isRequired,
  filename: PropTypes.string,
};

DeleteFileModal.defaultProps = {
  filename: '',
};

export default DeleteFileModal;
