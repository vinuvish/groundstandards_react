import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ZAppBar from './components/ZAppBar';
import ZAppBarDrawer from './components/ZAppBarDrawer';
import { useAppStore } from './models_stores/appStore';
import NotFoundPage from './pages/app/NotFoundPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import SignUpPage from './pages/app/SignUpPage';
import EventsPage from './pages/user/DocumentsPage';
import NotificationPage from './pages/user/NotificationsPage';
import history from './app_utils/History';
import AboutPage from './pages/app/AboutPage';
import OurSolutionPage from './pages/app/OurSolutionPage';
import OurPartnerPage from './pages/app/OurPartnerPage';
import ResourcePage from './pages/app/ResourcePage';
import PressPage from './pages/app/PressPage';

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
  <Route exact path='/' />,
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
