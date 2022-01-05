import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from 'utils/firebase.config';
import fbStorageService from 'services/firebase.storage.service';
import { getCategories, getCategory } from 'services/main.service';
import { v4 as uuid } from 'uuid';
import config from 'utils/config';
import storageService from 'services/storage.service';

const createBusiness = (task, type) => ({
  id: task.Id,
  guid: task.GUID,
});

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
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [gpsLocation, setGpsLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isApproved, setIsApproved] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [location, setLocation] = useState('');
  const [mainImage, setMainImage] = useState();
  const [name, setName] = useState('');
  const [numberofEmployees, setNumberOfEmployees] = useState('');
  const [phones, setPhones] = useState([]);
  const [services, setCategories] = useState([]);
  const [website, setWebsite] = useState('');
  const [id, setId] = useState('');
  const [isRegisterFormValid, setIsRegisterFormValid] = useState(false);
  const [theme, setTheme] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsRegisterFormValid(
      !!(
        category?.length &&
        description?.length &&
        location?.length &&
        name?.length &&
        phones?.length &&
        services?.length &&
        numberofEmployees?.length
      ),
    );
  }, [
    category?.length,
    description?.length,
    location?.length,
    name?.length,
    numberofEmployees?.length,
    phones?.length,
    services?.length,
  ]);

  // const [businesses, isLoading] = useSelector(state => [
  //   state.main.businesses,
  //   state.main.isLoading,
  // ]);

  const clear = () => {
    setCatalogueImages([]);
    setFolderUID('');
    setCategory('');
    setDescription('');
    setEmail('');
    setGpsLocation({});
    setLatitude('');
    setLongitude('');
    setIsApproved(false);
    setIsFeatured(false);
    setLocation('');
    setMainImage('');
    setName('');
    setNumberOfEmployees('');
    setPhones([]);
    setCategories([]);
    setWebsite('');
    setId('');
    selectedCategory();
    selectedCategories([]);
  };

  function getBusinessCategories() {
    return getCategories();
  }

  function getBusinessCategory(item) {
    return getCategory(item);
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
    setBusinesses(_results);

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

    if (catalogueImages.length > 0) {
      setFolderUID(internalId);
      console.log(folderUID);

      // await apiBriefingsService.createFolderIfNotExists(folderUID);

      // const sendFilesPromise = attachments.map(i =>
      //   apiBriefingsService.sendFile(i, i.name, folderUID),
      // );

      // const results = await Promise.allSettled(sendFilesPromise);
      // const rejected = results
      //   .filter(result => result.status === 'rejected')
      //   .map(result => result.reason);
      // if (rejected.length > 0) {
      //   console.log(rejected);
      //   throw new Error(JSON.stringify(rejected));
      // }
    }

    await fbStorageService.registerBusiness({
      catalogueImages,
      category,
      description,
      email,
      gpsLocation: gpsLocation || {
        Latitude: latitude,
        Longitude: longitude,
      },
      isApproved,
      isFeatured,
      location,
      mainImage,
      name,
      numberofEmployees,
      phones,
      services,
      website,
      id: internalId,
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
        category,
        description,
        email,
        gpsLocation,
        latitude,
        longitude,
        isApproved,
        isFeatured,
        location,
        mainImage,
        name,
        numberofEmployees,
        phones,
        services,
        website,
        id,
        isRegisterFormValid,
        theme,
        selectedCategory,
        selectedCategories,
        searchResults,
        setSearchResults,
        clear,
        fetchBusinesses,
        fetchBusiness,
        setBusiness,
        registerBusiness,
        setCatalogueImages,
        setFolderUID,
        setCategory,
        setDescription,
        setEmail,
        setGpsLocation,
        setLatitude,
        setLongitude,
        setIsApproved,
        setIsFeatured,
        setLocation,
        setMainImage,
        setName,
        setNumberOfEmployees,
        setPhones,
        setCategories,
        setWebsite,
        setId,
        getTheme,
        getBusinessCategories,
        getBusinessCategory,
        setSelectedCategories,
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
