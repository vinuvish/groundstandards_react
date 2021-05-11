import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import { fireFirebase } from '../firebase/firebase';
import ZAppBarDrawerTemp from './ZAppBarDrawerTemp';
import history from '../app_utils/History';
import { CardMedia } from '@material-ui/core';
export default function ZAppBar() {
  const classes = useStyles();
  const [drawerTemporary, setDrawerTemporary] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleTemporaryDrawer = () => {
    setDrawerTemporary((prev) => !prev);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const signOut = async () => {
    await fireFirebase.auth().signOut();
    history.push('/signIn');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          signOut();
        }}
      >
        Sign Out
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position='fixed' elevation={2}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={handleTemporaryDrawer} edge='start' color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            Ground Standards
          </Typography>
          <CardMedia image="../assets/logo.png" />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' onClick={handleProfileMenuOpen} color='inherit'>
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>

          </div>
        </Toolbar>
      </AppBar>




    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      display: 'none',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        display: 'flex'
      }
    },
    title: {
      display: 'block'
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    sectionMobile: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'flex'
      }
    }
  })
);
