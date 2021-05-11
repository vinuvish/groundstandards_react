import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ZAppBar from './components/ZAppBar';
import ZAppBarDrawer from './components/ZAppBarDrawer';
import { useAppStore } from './models_stores/appStore';
import NotFoundPage from './pages/app/NotFoundPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import SignInPage from './pages/auth/SignInPage';
import EventsPage from './pages/user/DocumentsPage';
import NotificationPage from './pages/user/NotificationsPage';
import history from './app_utils/History';
import AboutPage from './pages/app/AboutPage';

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
  <Route exact path='/ourSolution' component={NotificationPage} />,
  <Route exact path='/ourPartner' component={NotificationPage} />,
  <Route exact path='/resource' component={NotificationPage} />,
  <Route exact path='/press' component={NotificationPage} />,
  <Route exact path='/blog' component={NotificationPage} />,
  <Route exact path='/contact' component={NotificationPage} />,
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
