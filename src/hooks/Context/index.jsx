import React from 'react';
import PropTypes from 'prop-types';
import mainService from 'services/main.service';

const createBusiness = (task, type) => ({
  id: task.Id,
  guid: task.GUID,
});

const BusinessesContext = React.createContext();

const BusinessDirectoryProvider = ({ children }) => {
  const [isLoadingBusinesses, setIsLoadingBusinesses] = React.useState(false);
  const [isLoadingBusinessesAssigned, setIsLoadingBusinessesAssigned] =
    React.useState(false);

  const [tasksCreated, setBusinesses] = React.useState([]);
  const [tasksNew, setBusinessesNew] = React.useState([]);
  const [tasksInProgress, setBusinessesInProgress] = React.useState([]);

  const updateBusinessAssigned = React.useCallback((old, newPartial) => {
    const newBusiness = {
      ...old,
      ...newPartial,
    };
    if (old.status === 'created') {
      setBusinessesNew(s => s.filter(i => i.id !== old.id));
    } else if (old.status === 'doing') {
      setBusinessesInProgress(s => s.filter(i => i.id !== old.id));
    }

    if (newBusiness.status === 'created') {
      newBusiness.type = 'new';
      setBusinessesNew(s => [...s, newBusiness]);
    } else if (newBusiness.status === 'doing') {
      newBusiness.type = 'inProgress';
      setBusinessesInProgress(s => [...s, newBusiness]);
    }
  }, []);

  const fetchBusinesses = React.useCallback(async user => {
    try {
      setIsLoadingBusinesses(true);
      const { results } = await mainService.getItems('ROCCalendarBusinesses');

      const tasks = results.map(i => createBusiness(i, 'created'));

      const uniques = tasks.reduce((acc, item) => {
        const founded = acc.find(i => i.groupUID === item.groupUID);
        if (founded) {
          founded.group.push(item);
        } else {
          acc.push(item);
        }

        return acc;
      }, []);

      setBusinesses(uniques);
    } finally {
      setIsLoadingBusinesses(false);
    }
  }, []);

  return (
    <BusinessesContext.Provider
      value={{
        tasksCreated,
        tasksNew,
        tasksInProgress,
        isLoadingBusinesses,
        isLoadingBusinessesAssigned,
        updateBusinessAssigned,
        fetchBusinesses,
      }}
    >
      {children}
    </BusinessesContext.Provider>
  );
};

BusinessDirectoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useBusinesses = () => {
  const context = React.useContext(BusinessesContext);

  if (!context) {
    throw new Error(
      'useBusinesses must be within an BusinessDirectoryProvider',
    );
  }

  return context;
};

export { BusinessDirectoryProvider, useBusinesses };
