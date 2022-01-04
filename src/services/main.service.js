import { businessCategories, businessServices } from 'assets/mockData';

function getServices() {
  return businessServices;
}

function getCategories() {
  return businessCategories;
}

async function getService(item) {
  const result = await businessServices.find(x => x === item);
  return result;
}

function getCategory(item) {
  const result = businessCategories.find(x => x === item);
  return result;
}

export { getServices, getCategories, getService, getCategory };
