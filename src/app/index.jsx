import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from 'themes';
import { initializeAction } from 'store/actions/main';
import { loadThemeAction } from 'store/actions/theme';
import Compose from 'hooks/ComposeProvider';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { BusinessDirectoryProvider, useBusinesses } from 'hooks/Context';
import DirectoryHome from './pages/DirectoryHome';
import RegisterBusiness from './pages/RegisterBusiness';
import BusinessDetails from './pages/BusinessDetails';

function App() {
  const dispatch = useDispatch();

  // const { fetchBusinesses } = useBusinesses();

  const [theme] = useSelector(state => [state.theme.theme]);

  useEffect(() => {
    dispatch(loadThemeAction());
    // fetchBusinesses();
    dispatch(initializeAction());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
          <Footer />{' '}
        </Compose>
      </Router>
    </ThemeProvider>
  );
}

export default App;
