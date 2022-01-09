export const createBusiness = item => {
  return {
    firstName: item.firstName,
    lastName: item.lastName,
    personalEmail: item.personalEmail,
    personalPhones: item.personalPhones,
    catalogueImages: item.catalogueImages || [],
    businessDescription: item.businessDescription,
    businessEmail: item.businessEmail,
    businessGpsLocation: item.businessGpsLocation,
    isVerified: item.isVerified,
    isFeatured: item.isFeatured,
    businessPhysicalAddress: item.businessPhysicalAddress,
    businessMainImage: item.businessMainImage || '',
    businessName: item.businessName,
    numberofEmployees: item.numberofEmployees,
    businessPhones: item.businessPhones,
    businessProductsOrServices: item.businessProductsOrServices,
    selectedBusinessCategories: item.selectedBusinessCategories,
    businessWebsite: item.businessWebsite,
    businessManagerName: item.businessManagerName,
    internalId: item.internalId,
    dbId: item.id,
  };
};