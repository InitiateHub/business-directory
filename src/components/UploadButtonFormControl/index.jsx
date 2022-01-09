import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, FormControl, FormLabel, Typography } from '@mui/material';
import { AttachmentIcon, DeleteIcon, UploadIcon } from 'components/Icons';
import DeleteFileModal from 'components/DeleteFileModal';
import CustomFormControl from 'components/CustomFormControl';
import { useStyles } from './styles';

const UploadButtonFormControl = ({
  id,
  label,
  multiple,
  buttonLabel,
  attachments,
  setAttachments,
  isDisabled,
  required,
  fullWidth,
}) => {
  const classes = useStyles({ fullWidth });

  const fileInput = React.useRef(null);

  const [open, setOpen] = React.useState(false);
  const [selectedFileToRemove, setSelectedFileToRemove] = React.useState();

  const handleChangeInputFiles = event => {
    if (multiple) {
      setAttachments(state =>
        [...state, ...Array.from(event.target.files)].filter(
          (i, idx, arr) => arr.findIndex(j => j?.name === i?.name) === idx,
        ),
      );
    } else {
      setAttachments(
        state => event.target.files[0],
        // .filter(
        // (i, idx, arr) => arr.findIndex(j => j?.name === i?.name) === idx,
        // ),
      );
    }
  };

  const handleOpenFileModal = file => {
    setOpen(true);
    setSelectedFileToRemove(file);
  };

  const handleRemoveFile = React.useCallback(() => {
    if (multiple) {
      if (selectedFileToRemove && selectedFileToRemove.name) {
        setAttachments(state =>
          state.filter(i => i?.name !== selectedFileToRemove.name),
        );
      }
    } else {
      setAttachments();
    }
  }, [selectedFileToRemove, setAttachments]);

  return (
    <>
      <DeleteFileModal
        open={open}
        setOpen={setOpen}
        cbOk={handleRemoveFile}
        filename={selectedFileToRemove?.name}
      />
      <CustomFormControl
        label={label}
        fullWidth={fullWidth}
        className={classes.container}
        required={required}
      >
        <Button
          fullWidth={fullWidth}
          startIcon={<UploadIcon />}
          variant="outlined"
          color="primary"
          className={classes.uploadButton}
          disabled={isDisabled}
          onClick={() => fileInput.current.click()}
        >
          {buttonLabel}
          <input
            type="file"
            ref={fileInput}
            multiple
            onChange={handleChangeInputFiles}
          />
        </Button>
        <Box className={classes.attachmentsList}>
          {multiple
            ? attachments?.map(i => {
                return (
                  <Typography key={i?.name}>
                    <span>
                      <span>
                        <AttachmentIcon />
                        {i?.name}
                      </span>
                    </span>
                    <Button
                      onClick={() => handleOpenFileModal(i)}
                      disabled={isDisabled}
                    >
                      <DeleteIcon />
                    </Button>
                  </Typography>
                );
              })
            : attachments && (
                <Typography key={attachments?.name}>
                  <span>
                    <span>
                      <AttachmentIcon />
                      {attachments?.name}
                    </span>
                  </span>
                  <Button
                    onClick={() => handleOpenFileModal(attachments)}
                    disabled={isDisabled}
                  >
                    <DeleteIcon />
                  </Button>
                </Typography>
              )}
        </Box>
      </CustomFormControl>
    </>
  );
};

UploadButtonFormControl.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  buttonLabel: PropTypes.string,
  // attachments: PropTypes.array || PropTypes.object,
  setAttachments: PropTypes.func,
  isDisabled: PropTypes.bool,
  multiple: PropTypes.bool,
};

UploadButtonFormControl.defaultProps = {
  id: 'id',
  label: '',
  buttonLabel: 'Upload',
  multiple: true,
};

export default UploadButtonFormControl;
