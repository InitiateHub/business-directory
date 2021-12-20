import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme, lightBlueTheme } from 'themes';
import DirectoryHome from 'containers/DirectoryHome';
import { initializeAction } from 'store/actions/main';
import { loadThemeAction } from 'store/actions/theme';
import Compose from 'hooks/ComposeProvider';
import Footer from 'components/Footer';
import { ErrorBoundary } from 'components/ErrorBoundary';
import NavBar from 'components/NavBar';
import { DirectoryProvider } from 'containers/DirectoryHome/hooks/form-context';

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
    <ThemeProvider
      theme={
        theme === 'light'
          ? lightTheme
          : theme === 'lightBlue'
          ? lightBlueTheme
          : darkTheme
      }
    >
      <ErrorBoundary>
        <Router>
          <NavBar />

          <Box>
            <Compose components={[DirectoryProvider]}>
              <Switch>
                <Route path="/">
                  <DirectoryHome />
                </Route>
              </Switch>
            </Compose>
          </Box>
        </Router>
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
