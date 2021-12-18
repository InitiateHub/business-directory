import React from 'react';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import mainService from 'services/main.service';

const selectFields =
  'AuthorId,Created,Description,EndDate,EventDate,GUID,Id,Shopleiter,Status,Title,FolderUID,GroupUID';

const createBriefing = (task, type) => ({
  id: task.Id,
  guid: task.GUID,
  authorId: task.AuthorId,
  createdAt: parseISO(task.Created),
  description: task.Description,
  endAt: parseISO(task.EndDate),
  eventAt: parseISO(task.EventDate),
  shopManager: task.Shopleiter,
  title: task.Title,
  status: task.Status,
  folderUID: task.FolderUID,
  groupUID: task.GroupUID,
  group: [],
  attachmentsResources: {
    isLoading: false,
    error: null,
    list: null,
  },
  original: { __metadata: { ...task.__metadata } },
  type,
});

const BriefingsContext = React.createContext();

const BriefingsProvider = ({ children }) => {
  const [isLoadingBriefingsCreated, setIsLoadingBriefingsCreated] =
    React.useState(false);
  const [isLoadingBriefingsAssigned, setIsLoadingBriefingsAssigned] =
    React.useState(false);

  const [tasksCreated, setBriefingsCreated] = React.useState([]);
  const [tasksNew, setBriefingsNew] = React.useState([]);
  const [tasksInProgress, setBriefingsInProgress] = React.useState([]);

  const updateBriefingAssigned = React.useCallback((old, newPartial) => {
    const newBriefing = {
      ...old,
      ...newPartial,
    };
    if (old.status === 'created') {
      setBriefingsNew(s => s.filter(i => i.id !== old.id));
    } else if (old.status === 'doing') {
      setBriefingsInProgress(s => s.filter(i => i.id !== old.id));
    }

    if (newBriefing.status === 'created') {
      newBriefing.type = 'new';
      setBriefingsNew(s => [...s, newBriefing]);
    } else if (newBriefing.status === 'doing') {
      newBriefing.type = 'inProgress';
      setBriefingsInProgress(s => [...s, newBriefing]);
    }
  }, []);

  const fetchBriefingsCreated = React.useCallback(async user => {
    if (user) {
      try {
        setIsLoadingBriefingsCreated(true);
        const { results } = await mainService.getItems(
          'ROCCalendarBriefings',
          `?$filter=(Author eq '${user.id}')&$select=${selectFields}`,
        );

        const tasks = results.map(i => createBriefing(i, 'created'));

        const uniques = tasks.reduce((acc, item) => {
          const founded = acc.find(i => i.groupUID === item.groupUID);
          if (founded) {
            founded.group.push(item);
          } else {
            acc.push(item);
          }

          return acc;
        }, []);

        setBriefingsCreated(uniques);
      } finally {
        setIsLoadingBriefingsCreated(false);
      }
    }
  }, []);

  const fetchBriefingsAssigned = React.useCallback(async user => {
    if (user) {
      try {
        setIsLoadingBriefingsAssigned(true);
        const { results } = await mainService.getItems(
          'ROCCalendarBriefings',
          `?$filter=(Shopleiter eq '${user.mail}' and Status ne 'finished')&$select=${selectFields}`,
        );

        setBriefingsNew(
          results
            .filter(i => i.Status === 'created')
            .map(i => createBriefing(i, 'new')),
        );
        setBriefingsInProgress(
          results
            .filter(i => i.Status === 'doing')
            .map(i => createBriefing(i, 'inProgress')),
        );
      } finally {
        setIsLoadingBriefingsAssigned(false);
      }
    }
  }, []);

  const fetchAttachmentsFor = React.useCallback(
    task => {
      if (!task.folderUID) return;
      const tasks = {
        new: [tasksNew, setBriefingsNew],
        inProgress: [tasksInProgress, setBriefingsInProgress],
        created: [tasksCreated, setBriefingsCreated],
      };
      const [state, setState] = tasks[task.type];
      const founded = state.find(i => i.id === task.id);

      if (!founded) return;

      setState(s =>
        s.map(i => {
          if (i.id === founded.id) {
            return {
              ...i,
              attachmentsResources: {
                isLoading: true,
                error: null,
                list: [],
              },
            };
          }

          return i;
        }),
      );

      mainService
        .getFiles(founded.folderUID)
        .then(response => {
          const { results } = response.data.d;
          setState(s =>
            s.map(i => {
              if (i.id === founded.id) {
                return {
                  ...i,
                  attachmentsResources: {
                    isLoading: false,
                    error: null,
                    list: results,
                  },
                };
              }

              return i;
            }),
          );
        })
        .catch(console.error);
    },
    [tasksCreated, tasksInProgress, tasksNew],
  );

  return (
    <BriefingsContext.Provider
      value={{
        tasksCreated,
        tasksNew,
        tasksInProgress,
        isLoadingBriefingsCreated,
        isLoadingBriefingsAssigned,
        updateBriefingAssigned,
        fetchBriefingsCreated,
        fetchAttachmentsFor,
        fetchBriefingsAssigned,
      }}
    >
      {children}
    </BriefingsContext.Provider>
  );
};

BriefingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useBriefings = () => {
  const context = React.useContext(BriefingsContext);

  if (!context) {
    throw new Error('useBriefings must be within an BriefingsProvider');
  }

  return context;
};

export { BriefingsProvider, useBriefings };
