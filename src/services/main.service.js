import { businessCategories } from 'assets/mockData';

function getCategories() {
  return businessCategories;
}

async function getService(item) {
  const result = await businessCategories.find(x => x === item);
  return result;
}

function getCategory(item) {
  const result = businessCategories.find(x => x === item);
  return result;
}

export { getCategories, getService, getCategory };
