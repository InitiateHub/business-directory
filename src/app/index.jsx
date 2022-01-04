import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from 'themes';
import { initializeAction } from 'store/actions/main';
import { loadThemeAction } from 'store/actions/theme';
import Compose from 'hooks/ComposeProvider';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { BusinessDirectoryProvider, useBusinesses } from 'hooks/Context';
import { StyledEngineProvider } from '@mui/material/styles';
import config from 'utils/config';
import storageService from 'services/storage.service';
import ReactGA from 'react-ga';
import DirectoryHome from './pages/DirectoryHome';
import RegisterBusiness from './pages/RegisterBusiness';
import BusinessDetails from './pages/BusinessDetails';

ReactGA.initialize('G-Y0J7S9KCCD');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const dispatch = useDispatch();

  // const { theme, getTheme } = useBusinesses();

  // const [theme] = useSelector(state => [state.theme.theme]);
  const theme = storageService.getItem(config.themeKey);

  useEffect(() => {
    // dispatch(loadThemeAction());
    // fetchBusinesses();
    // dispatch(initializeAction());
  }, [dispatch]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider
        theme={
          theme
            ? theme === 'light'
              ? lightTheme
              : theme === 'dark'
              ? darkTheme
              : lightTheme
            : lightTheme
        }
      >
        <Router>
          <Compose components={[BusinessDirectoryProvider]}>
            <NavBar />
            <Box>
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
            </Box>
            <Footer />
          </Compose>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
