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
import { List, ListItem, ListItemText } from "@material-ui/core"
import ZAppBarDrawerTemp from './ZAppBarDrawerTemp';


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

  const manuItems = [
    { title: `home`, path: `/`, },
    { title: `about us`, path: `/aboutUs`, },
    { title: `sign up!`, path: `/signUp`, },
    { title: `our solution`, path: `/ourSolution` },
    { title: `our partners`, path: `/ourPartner` },
    { title: `resources`, path: `/resource` },
    { title: `press`, path: `/press` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },

  ]



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

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position='fixed' elevation={2}>
        <Toolbar>

          <IconButton className={classes.menuButton} onClick={handleTemporaryDrawer} edge='start' color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <div className={classes.sectionDesktop ? classes.navbarLogo : classes.navbarLogoMobile}>
            <img src="http://groundstandards.com/wp-content/uploads/GS-logo-150.png" />
          </div>
          <div className={classes.sectionDesktop}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {manuItems.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label='show more' aria-controls={mobileMenuId} aria-haspopup='true' onClick={handleMobileMenuOpen} color='inherit'>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>


      <ZAppBarDrawerTemp open={drawerTemporary} setOpen={setDrawerTemporary} />
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: 'white'

    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      display: 'none',
      marginRight: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        display: 'flex'
      }, color: 'black'
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
    navbarLogo: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '15%',
      cursor: 'pointer',
      width: '15%',
    },
    navbarLogoMobile: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '5%',
      cursor: 'pointer',
      width: '15%',
    },

    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`

    },
    linkText: {
      textDecoration: `none`,
      textTransform: `capitalize`,
      color: `black`,
      fontWeight: 'bold',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    }
  })
);
