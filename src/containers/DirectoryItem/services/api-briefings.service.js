import httpService from 'services/http.service';
import { getConfig } from 'services/config.service';
import { selectFields, expandFields } from '../helpers';

const config = getConfig('Briefings');

const sendFile = config(async ({ configFiles }, file, fileName, refId) => {
  const endpoint = `${configFiles.relativePath}/_api/web/getfolderbyserverrelativeurl('${configFiles.listTitle}/${refId}')/Files/Add(url='${fileName}', overwrite=true)`;

  return httpService.post(endpoint, file);
});

const getFiles = config(async ({ configFiles }, refId) => {
  const endpoint = `${configFiles.relativePath}/_api/web/getfolderbyserverrelativeurl('${configFiles.listTitle}/${refId}')/Files`;

  return httpService.get(endpoint);
});

const createFolderIfNotExists = config(async ({ configFiles }, refId) => {
  const getEndpoint = `${configFiles.relativePath}/_api/web/getfolderbyserverrelativeurl('${configFiles.listTitle}/${refId}')`;
  const postEndpoint = `${configFiles.relativePath}/_api/web/folders`;

  // eslint-disable-next-line consistent-return
  return httpService.get(getEndpoint).catch(error => {
    if (error.response.status === 404) {
      return httpService.post(postEndpoint, {
        __metadata: { type: configFiles.listItemEntityType },
        ServerRelativeUrl: `${configFiles.listTitle}/${refId}`,
      });
    }
  });
});

const updateBriefing = config(async ({ configData }, data) => {
  if (!data || !data.id) return;

  // console.log(data);

  const endpoint = `${configData.relativePath}/_api/web/lists/getbytitle('${configData.listTitle}')/getitembyid('${data.id}')`;

  const partialBriefing = {
    __metadata: {
      type: configData.listItemEntityType,
    },
    // Status: status,

    ...(data.title ? { Title: data.title } : null),
  };

  await httpService.put(endpoint, partialBriefing);
});

const createNewBriefing = config(async ({ configData }, data) => {
  console.log('createNewBriefing', data);

  const { internalId } = data;

  const endpoint = `${configData.relativePath}/_api/web/Lists/getbytitle('${configData.listTitle}')/items`;

  const newBriefing = {
    __metadata: {
      type: configData.listItemEntityType,
    },
    InternalId: internalId,
  };

  console.log('Create new briefing data object', newBriefing);
  return httpService.post(endpoint, newBriefing);
});

const getItems = config(async ({ configData }, complement = '') => {
  const endpoint = `${configData.relativePath}/_api/web/lists/getbytitle('${configData.listTitle}')/items${complement}`;
  // console.log('endpoint: ', endpoint);

  return httpService.get(endpoint).then(({ data }) => data.d);
});

const deleteItem = config(async ({ configData }, itemId) => {
  const endpoint = `${configData.relativePath}/_api/web/lists/getbytitle('${configData.listTitle}')/getitembyid('${itemId}')`;

  // eslint-disable-next-line consistent-return
  return httpService.remove(endpoint, {
    __metadata: {
      type: configData.listItemEntityType,
    },
  });
});

export default {
  sendFile,
  getFiles,
  createFolderIfNotExists,
  createNewBriefing,
  getItems,
  updateBriefing,
  deleteItem,
};
