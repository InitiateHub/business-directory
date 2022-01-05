import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from 'themes';
import { initializeAction } from 'store/actions/main';
import { loadThemeAction } from 'store/actions/theme';
import Compose from 'hooks/ComposeProvider';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { BusinessDirectoryProvider, useBusinesses } from 'hooks/Context';
import config from 'utils/config';
import storageService from 'services/storage.service';
import ReactGA from 'react-ga';
import DirectoryHome from './pages/DirectoryHome';
import RegisterBusiness from './pages/RegisterBusiness';
import BusinessDetails from './pages/BusinessDetails';
import SearchResults from './pages/SearchResults';

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
        <BrowserRouter>
          <Compose components={[BusinessDirectoryProvider]}>
            <NavBar />
            <Box>
              <Routes>
                <Route path="/business/:id" element={<BusinessDetails />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/register" element={<RegisterBusiness />} />
                <Route exact path="/" element={<DirectoryHome />} />
              </Routes>
            </Box>
            <Footer />
          </Compose>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
