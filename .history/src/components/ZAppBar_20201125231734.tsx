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
import { List, ListItem, ListItemText } from "@material-ui/core";

import history from '../app_utils/History';

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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton aria-label='account of current user' aria-controls='primary-search-account-menu' aria-haspopup='true' color='inherit'>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
  ]

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position='fixed' elevation={2} color="inherit">

        <Toolbar className={classes.toolBar} >
          <img src="http://groundstandards.com/wp-content/uploads/GS-logo-300.png" alt="logo" className={classes.logo} />

          <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>

        </Toolbar>


      </AppBar>

    </div >
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
    },
    logo: {
      maxWidth: 200,
    },
    toolBar: {
      minHeight: 100,
      alignItems: 'flex',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginLeft: theme.spacing(10),
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: 'black'

    }
  })
);
