import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SummaryIcon from '@material-ui/icons/BarChart';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const drawerWidth = 240;

interface PropsTemp {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const ZAppBarDrawerTemp: React.FC<PropsTemp> = ({ open, setOpen }) => {
  const classes = useStyles();
  const history = useHistory();



  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <React.Fragment key={'tempDrawer'}>
      <Drawer className={classes.drawerTemp} anchor='left' open={open} onClose={toggleDrawer(false)}>
        <List className={classes.drawerTempListWidth}>
          <ListItem button component={Link} to='/' >
            <img src="http://groundstandards.com/wp-content/uploads/GS-logo-150.png" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to='/'>
            <ListItemText className={classes.tabText} primary='home' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/aboutUs'>
            <ListItemText className={classes.tabText} primary='about us' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/signUp'>
            <ListItemText className={classes.tabText} primary='sign up!' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/ourSolution'>
            <ListItemText className={classes.tabText} primary='our solution' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/ourPartner'>
            <ListItemText className={classes.tabText} primary='our partners' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/resource'>
            <ListItemText className={classes.tabText} primary='resources' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/press'>
            <ListItemText className={classes.tabText} primary='press' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/blog'>
            <ListItemText className={classes.tabText} primary='blog' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/contact'>
            <ListItemText className={classes.tabText} primary='contact' />
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    drawerTemp: {
      flexShrink: 0,
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'flex'
      }
    },
    drawerTempListWidth: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerContainer: {
      overflow: 'auto'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    icons: {
      fontSize: 22
    },
    tabText: {
      marginLeft: 10,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      textTransform: `capitalize`,
    }
  })
);

export default ZAppBarDrawerTemp;
