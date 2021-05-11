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

const AppRouterRoutes = () => {
  const classes = useStyles();

  return (
    <Router history={history}>
      <>

        <ZAppBar />
        <Grid className={classes.grid}>
          <ZAppBarDrawer />
          <Grid className={classes.containerAuthenticated}>
            <Switch>{[Routes]}</Switch>
          </Grid>
        </Grid>

      </>
    </Router>


  );
};


const Routes = [
  <Route exact path='/' component={EventsPage} />,
  <Route exact path='/documents' component={EventsPage} />,
  <Route exact path='/notifications' component={NotificationPage} />,
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
