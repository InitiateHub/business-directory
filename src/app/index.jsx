import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from 'themes';
import { initializeAction } from 'store/actions/main';
import { loadThemeAction } from 'store/actions/theme';
import Compose from 'hooks/ComposeProvider';
import Footer from 'components/Footer';
import { ErrorBoundary } from 'components/ErrorBoundary';
import NavBar from 'components/NavBar';
import { BusinessDirectoryProvider } from 'hooks/Context';
import DirectoryHome from './pages/DirectoryHome';
import RegisterBusiness from './pages/RegisterBusiness';
import BusinessDetails from './pages/BusinessDetails';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    padding: theme.spacing(2, 11.5, 8),
  },
  retrieveResContainer: {
    padding: theme.spacing(7, 11.5, 0),
  },
}));

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  // const [theme, isSearchDialogOpened] = useSelector(state => [
  //   state.theme.theme,
  //   state.ui.isSearchDialogOpened,
  // ]);

  const [theme] = useSelector(state => [state.theme.theme]);

  useEffect(() => {
    dispatch(loadThemeAction());
    // dispatch(initializeAction());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ErrorBoundary>
        <Router>
          <NavBar />

          <Box>
            {/* <Compose components={[BusinessDirectoryProvider]}> */}
            <Switch>
              <Route path="/business/:id">
                <BusinessDetails />
              </Route>
              <Route path="/register">
                <RegisterBusiness />
              </Route>
              <Route exact path="/">
                <DirectoryHome />
              </Route>
            </Switch>
            {/* </Compose> */}
          </Box>
          <Footer />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
