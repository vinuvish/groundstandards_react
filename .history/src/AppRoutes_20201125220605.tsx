import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ZAppBar from './components/ZAppBar';
import ZAppBarDrawer from './components/ZAppBarDrawer';
import NotFoundPage from './pages/app/NotFoundPage';
import SignUpPage from './pages/app/SignUpPage';
import history from './app_utils/History';
import AboutPage from './pages/app/AboutPage';
import OurSolutionPage from './pages/app/OurSolutionPage';
import OurPartnerPage from './pages/app/OurPartnerPage';
import ResourcePage from './pages/app/ResourcePage';
import PressPage from './pages/app/PressPage';
import BlockPage from './pages/app/BlockPage';
import ContactPage from './pages/app/ContactPage';
import AppHomePage from './pages/app/AppHomePage';

const AppRouterRoutes = () => {
  const classes = useStyles();

  return (
    <Router history={history}>
      <>
        <ZAppBar />
        <Grid className={classes.grid}>
          <ZAppBarDrawer />
          <Grid className={classes.containerAuthenticated}>
            <Switch>{[AppRoutes]}</Switch>
          </Grid>
        </Grid>

      </>
    </Router>


  );
};


const AppRoutes = [
  <Route exact path='/' component={AppHomePage} />,
  <Route exact path='/aboutUs' component={AboutPage} />,
  <Route exact path='/signUp' component={SignUpPage} />,
  <Route exact path='/ourSolution' component={OurSolutionPage} />,
  <Route exact path='/ourPartner' component={OurPartnerPage} />,
  <Route exact path='/resource' component={ResourcePage} />,
  <Route exact path='/press' component={PressPage} />,
  <Route exact path='/blog' component={BlockPage} />,
  <Route exact path='/contact' component={ContactPage} />,
  <Route component={NotFoundPage} />
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: 'flex'
    },
    containerAuthenticated: {
      margin: 'auto',
      marginTop: 68,
      padding: 20,
      width: `calc(100% - 240px)`,
      [theme.breakpoints.down('md')]: {
        width: '100%'
      }
    },
    containerUnauthenticated: {}
  })
);

export default AppRouterRoutes;
