import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import fbStorageService from 'services/firebase.storage.service';
import {
  getProductsOrServices,
  getCategories,
  getService,
  getCategory,
} from 'services/main.service';
import { v4 as uuid } from 'uuid';
import config from 'utils/config';
import storageService from 'services/storage.service';
import { createBusiness } from 'utils/helpers';

// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext();

const BusinessDirectoryProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [business, setBusiness] = useState();
  const [catalogueImages, setCatalogueImages] = useState([]);
  const [folderUID, setFolderUID] = useState();
  const [businessDescription, setBusinessDescription] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessGpsLocation, setBusinessGpsLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [businessPhysicalAddress, setBusinessPhysicalAddress] = useState('');
  const [businessMainImage, setBusinessMainImage] = useState();
  const [businessName, setBusinessName] = useState('');
  const [numberofEmployees, setNumberOfEmployees] = useState('');
  const [businessPhones, setBusinessPhones] = useState([]);
  const [businessWebsite, setBusinessWebsite] = useState('');
  const [id, setId] = useState('');
  const [isRegisterFormValid, setIsRegisterFormValid] = useState(false);
  const [theme, setTheme] = useState();
  const [selectedBusinessCategories, setSelectedBusinessCategories] = useState(
    [],
  );
  const [searchResults, setSearchResults] = useState([]);
  const [businessManagerName, setBusinessManagerName] = useState('');
  const [businessEstablishmentYear, setBusinessEstablishmentYear] =
    useState('');
  const [businessProductsOrServices, setBusinessProductsOrServices] = useState(
    [],
  );
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [personalPhones, setPersonalPhones] = useState([]);

  useEffect(() => {
    setIsRegisterFormValid(
      firstName?.length &&
        lastName?.length &&
        personalEmail?.length &&
        personalPhones?.length &&
        selectedBusinessCategories?.length &&
        businessProductsOrServices?.length &&
        businessDescription?.length &&
        businessPhysicalAddress?.length &&
        businessName?.length &&
        businessPhones?.length &&
        // numberofEmployees?.length &&
        businessManagerName?.length,
      // && businessEstablishmentYear?.length,
    );
  }, [
    businessDescription?.length,
    // businessEstablishmentYear?.length,
    businessManagerName?.length,
    businessName?.length,
    businessPhones?.length,
    businessPhysicalAddress?.length,
    businessProductsOrServices?.length,
    firstName?.length,
    lastName?.length,
    // numberofEmployees?.length,
    personalEmail?.length,
    personalPhones?.length,
    selectedBusinessCategories?.length,
  ]);

  // const [businesses, isLoading] = useSelector(state => [
  //   state.main.businesses,
  //   state.main.isLoading,
  // ]);

  const clear = () => {
    setFirstName('');
    setLastName('');
    setPersonalEmail('');
    setPersonalPhones([]);
    setFolderUID('');
    setBusinessDescription('');
    setBusinessEmail('');
    setIsVerified(false);
    setIsFeatured(false);
    setBusinessPhysicalAddress('');
    setBusinessMainImage('');
    setBusinessName('');
    setNumberOfEmployees('');
    setBusinessPhones([]);
    setSelectedBusinessCategories([]);
    setBusinessWebsite('');
    setId('');
    setSelectedBusinessCategories([]);
    setBusinessManagerName('');
    setBusinessProductsOrServices([]);
    setBusinessManagerName('');
    setCatalogueImages([]);
  };

  // TODO: Rewrite this search function
  const performSearch = value => {
    const lowerValue = value?.toLowerCase();
    if (businesses) {
      const nameRes = businesses.filter(e =>
        e?.businessName?.toLowerCase().includes(lowerValue),
      );
      const descRes = businesses.filter(e =>
        e?.businessDescription?.toLowerCase().includes(lowerValue),
      );
      const locRes = businesses.filter(e =>
        e?.businessPhysicalAddress?.toLowerCase().includes(lowerValue),
      );
      const combinedRes = [...nameRes, ...descRes, ...locRes];
      const newRes = Array.from(new Set(combinedRes));
      setSearchResults(newRes);
    }
  };

  function getBusinessCategories() {
    return getCategories();
  }

  function getBusinessCategory(item) {
    return getCategory(item);
  }

  function getBusinessProductsOrServices() {
    return getProductsOrServices();
  }

  function getBusinessProductsOrService(item) {
    return getService(item);
  }

  function getTheme() {
    const value = storageService.getItem(config.themeKey);
    if (value) {
      setTheme(value);
    }
  }

  function changeTheme(newTheme) {
    storageService.setItem(config.themeKey, theme);
  }

  async function fetchBusinesses() {
    setIsLoading(true);
    const _results = await fbStorageService.getAllApprovedBusinesses();

    const list = [];
    // console.info(_results);

    _results.forEach(async i => {
      let logo;
      if (i.internalId) {
        fbStorageService.getLogo(i.internalId).then(res => {
          logo = res;
        });
        // logo = data;
        if (i.internalId === '444746cd-99fa-41db-9f4c-b8b76780a56c')
          console.log('logo data: ', logo);
      }

      let businessCatalogueImages = [];
      if (i.internalId) {
        fbStorageService.getCatalogueImages(i.internalId).then(res => {
          businessCatalogueImages = res;
        });
        // businessCatalogueImages = data;
        if (i.internalId === '444746cd-99fa-41db-9f4c-b8b76780a56c')
          console.log('catImgs: ', businessCatalogueImages);
      }

      const newBusiness = createBusiness(i);

      newBusiness.businessMainImage = logo || i.businessMainImage;

      newBusiness.catalogueImages =
        businessCatalogueImages || i.businessCatalogueImages;

      list.push(newBusiness);
    });

    setBusinesses(list);

    setIsLoading(false);
  }

  async function fetchBusiness(businessId) {
    setIsLoading(true);
    const _result = await fbStorageService.getBusiness(businessId);
    setBusiness(_result);

    setIsLoading(false);
  }

  async function registerBusiness() {
    setIsLoading(true);

    const internalId = uuid();

    if (businessMainImage) {
      const _result = await fbStorageService.uploadFile(
        internalId,
        businessMainImage,
      );
    }

    if (catalogueImages.length > 0) {
      const _result = await fbStorageService.uploadFile(
        internalId,
        catalogueImages,
      );
    }

    await fbStorageService.registerBusiness({
      firstName,
      lastName,
      personalEmail,
      personalPhones,
      // catalogueImages,
      businessDescription,
      businessEmail,
      businessGpsLocation: businessGpsLocation || {
        Latitude: latitude,
        Longitude: longitude,
      },
      isVerified: false,
      isFeatured,
      businessPhysicalAddress,
      // businessMainImage,
      businessName,
      numberofEmployees,
      businessPhones,
      businessProductsOrServices,
      selectedBusinessCategories,
      businessWebsite,
      businessManagerName,
      internalId,
    });

    clear();
    setIsLoading(false);
    // return data;
  }

  return (
    <FirebaseContext.Provider
      value={{
        isLoading,
        businesses,
        business,
        catalogueImages,
        businessDescription,
        businessEmail,
        businessGpsLocation,
        latitude,
        longitude,
        isVerified,
        isFeatured,
        businessPhysicalAddress,
        businessMainImage,
        businessPhones,
        numberofEmployees,
        businessProductsOrServices,
        businessWebsite,
        id,
        isRegisterFormValid,
        theme,
        selectedBusinessCategories,
        searchResults,
        firstName,
        lastName,
        personalEmail,
        personalPhones,
        businessName,
        businessManagerName,

        registerBusiness,
        setSearchResults,
        clear,
        fetchBusinesses,
        fetchBusiness,
        setBusiness,
        setCatalogueImages,
        setFolderUID,
        setBusinessGpsLocation,
        setBusinessProductsOrServices,
        setLatitude,
        setLongitude,
        setIsVerified,
        setIsFeatured,
        setNumberOfEmployees,
        setSelectedBusinessCategories,
        setId,
        getTheme,
        getBusinessCategories,
        getBusinessCategory,
        setFirstName,
        setLastName,
        setPersonalEmail,
        setPersonalPhones,
        setBusinessDescription,
        setBusinessEmail,
        setBusinessPhysicalAddress,
        setBusinessMainImage,
        setBusinessName,
        setBusinessPhones,
        setBusinessWebsite,
        setBusinessManagerName,
        performSearch,
        getBusinessProductsOrServices,
        getBusinessProductsOrService,
        setBusinessEstablishmentYear,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

BusinessDirectoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useBusinesses = () => {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error(
      'useBusinesses must be within an BusinessDirectoryProvider',
    );
  }

  return context;
};

export { BusinessDirectoryProvider, useBusinesses };
