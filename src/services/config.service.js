import mainService from './main.service';

const fetch = async listType => {
  const configData = {
    listTitle: '',
    relativePath: '',
    listItemEntityType: '',
  };
  const configFiles = {
    listTitle: '',
    relativePath: '',
    listItemEntityType: '',
  };

  const { results } = await mainService.fetchConfig(
    `$select=ListName,RelativePath,Type,ListItemEntityType&$filter=(Type eq '${listType}')`,
  );

  const data = results.find(
    i => i.ListItemEntityType?.split('.')[1] === 'Data',
  );
  configData.listTitle = data?.ListName || '';
  configData.relativePath =
    data?.RelativePath === '/' ? '' : data?.RelativePath || '';
  configData.listItemEntityType = data?.ListItemEntityType || '';

  const files = results.find(
    i => i.ListItemEntityType?.split('.')[1] === 'Folder',
  );
  configFiles.listTitle = files?.ListName || '';
  configFiles.relativePath =
    files?.RelativePath === '/' ? '' : files?.RelativePath || '';
  configFiles.listItemEntityType = 'SP.Folder';

  return { configData, configFiles };
};

function config(listType, fnAsync) {
  let configData = null;
  let configFiles = null;

  return async (...args) => {
    if (!configData || !configFiles) {
      ({ configData, configFiles } = await fetch(listType));
    }

    return fnAsync.call(null, { configData, configFiles }, ...args);
  };
}

function getConfig(listType) {
  return fnAsync => config.call(null, listType, fnAsync);
}

export { getConfig };
