import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import apiDirectoryService from 'containers/DirectoryHome/services/api-briefings.service';
import { useSelector } from 'react-redux';

const DirectoryContext = React.createContext();

const DirectoryProvider = ({ children }) => {
  const [id, setId] = React.useState();

  const clear = React.useCallback(() => {
    console.log('clear form called');
    setId();
  }, []);

  const postDataToAPI = async _status => {
    // let folderUID = '';
    // let communicationFolderUID = '';
    const createItemCommentId = uuid();

    // if (attachments.length > 0) {
    //   setFolderUID(uuid());
    //   console.log(folderUID);
    //   await apiDirectoryService.createFolderIfNotExists(folderUID);

    //   const sendFilesPromise = attachments.map(i =>
    //     apiDirectoryService.sendFile(i, i.name, folderUID),
    //   );

    //   const results = await Promise.allSettled(sendFilesPromise);
    //   const rejected = results
    //     .filter(result => result.status === 'rejected')
    //     .map(result => result.reason);
    //   if (rejected.length > 0) {
    //     console.log(rejected);
    //     throw new Error(JSON.stringify(rejected));
    //   }
    // }

    const internalId = uuid();

    const {
      data: { d: result },
    } = await apiDirectoryService.createNewBriefing({
      internalId,
      status: _status,
      // title,
    });
  };

  const updateDataToAPI = async () => {
    // if (attachments.length > 0) {
    //   if (folderUID?.length < 1 || !folderUID) {
    //     setFolderUID(uuid());
    //     console.log(folderUID);
    //     await apiDirectoryService.createFolderIfNotExists(folderUID);
    //   }

    //   const sendFilesPromise = attachments.map(i =>
    //     apiDirectoryService.sendFile(i, i.name, folderUID),
    //   );

    //   const results = await Promise.allSettled(sendFilesPromise);
    //   const rejected = results
    //     .filter(result => result.status === 'rejected')
    //     .map(result => result.reason);
    //   if (rejected.length > 0) {
    //     console.log(rejected);
    //     throw new Error(JSON.stringify(rejected));
    //   }
    // }

    await apiDirectoryService.updateBriefing({
      id,
    });
  };

  // const fetchTemplates = React.useCallback(async () => {
  //   try {
  //     // setIsLoadingTemplates(true);
  //     const { results } = await apiDirectoryService.getTemplateItems(type);

  //     const list = [];
  //     // for (let i = 0; i < results.length; i++) {
  //     //   let files = [];
  //     //   if (results[i].KIMultiuploadItemId) {
  //     //     // eslint-disable-next-line no-await-in-loop
  //     //     const {
  //     //       data: { d },
  //     //       // eslint-disable-next-line no-await-in-loop
  //     //     } = await apiDirectoryService.getFiles(
  //     //       results[i].KIMultiuploadItemId,
  //     //     );
  //     //     files = d;
  //     //   }

  //     //   let opFiles = [];
  //     //   if (results[i].OpKIMultiUploadItemId) {
  //     //     // eslint-disable-next-line no-await-in-loop
  //     //     const {
  //     //       data: { d },
  //     //       // eslint-disable-next-line no-await-in-loop
  //     //     } = await apiDirectoryService.getFiles(
  //     //       results[i].OpKIMultiUploadItemId,
  //     //     );
  //     //     opFiles = d;
  //     //   }

  //     //   const template = createBriefing(results[i]);
  //     //   template.attachmentsResources = {
  //     //     isLoading: false,
  //     //     error: null,
  //     //     list: files,
  //     //   };

  //     //   template.opAttachmentsResources = {
  //     //     isLoading: false,
  //     //     error: null,
  //     //     list: opFiles,
  //     //   };

  //     //   list.push(template);

  //     //   // console.log('DirectoryHome loaded template:', results[i], template);
  //     // }

  //     // setTemplates(list);
  //   } finally {
  //     // setIsLoadingTemplates(false);
  //   }
  // }, [type]);

  const deleteItem = React.useCallback(async itemId => {
    try {
      // setIsLoadingDrafts(true);
      // setIsLoadingTemplates(true);
      // await apiDirectoryService.deleteItem(itemId);
    } finally {
      // setIsLoadingDrafts(false);
      // setIsLoadingTemplates(false);
    }
  }, []);

  const saveOrUpdateSendBriefing = async () => {
    // if (isFormStepOneValid && isFormStepTwoValid && isFormStepThreeValid) {
    //   setIsSaving(true);
    //   try {
    //     if (!id || status !== 'send') {
    //       await postDataToAPI('send');
    //       clear();
    //     } else {
    //       await updateDataToAPI();
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     setIsSaving(false);
    //   }
    // }
  };

  const fillFormWith = React.useCallback(item => {
    // clear();
    console.log('fillFormWith', item);
    // setCanComment(item.canComment);

    // Mapped/added property "name" to use the value of "Name" we get from SP to avoid issues with the upload control
    // setAttachments(
    //   item.attachmentsResources?.list?.results?.map(file => ({
    //     ...file,
    //     name: file.Name,
    //   })) || [],
    // );
  }, []);

  return (
    <DirectoryContext.Provider
      value={{
        // id,
        clear,
        setId,
      }}
    >
      {children}
    </DirectoryContext.Provider>
  );
};

DirectoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useDirectory = () => {
  const context = React.useContext(DirectoryContext);

  if (!context) {
    throw new Error('useDirectory must be within an DirectoryProvider');
  }

  return context;
};

export { DirectoryProvider, useDirectory };
