import React, { useState } from 'react'
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from '@material-ui/core';
import { logoutAlert } from '../../redux/actions/auth.actions'; 
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import DraftsIcon from '@material-ui/icons/Drafts';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import AlarmIcon from '@material-ui/icons/Alarm';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      drawer: {
          width: drawerWidth,
          flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
        height: '65px'
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
}));

 
function Navbar({ auth: { loading, user_data: { isAuthenticated, user } },logoutAlert }) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = React.useState(false);
    const anchorElOpen = Boolean(anchorEl);

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (status = null) => {
        setAnchorEl(null);
        switch (status) {
            case 'logout':
                logoutAlert()
                break;
            default:
                break;
        }
    };

    const handleDrawer = (status) => {
        setOpen(status);
    };

    if(loading === 'verify'){
        return null;
    }

    return (
        isAuthenticated ? 
        <div className={classes.root}>
            <AppBar position="sticky" color="secondary">
                <Toolbar>
                    <IconButton onClick={() => handleDrawer(true)} color="inherit" edge="start" ><MenuIcon /></IconButton>
                    <Typography className={classes.title} variant="h6">ST. CLARE COLLEGE </Typography>
                    <Typography>{user}</Typography>
                    <IconButton onClick={handleMenu} aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu open={anchorElOpen} onClose={handleClose}anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right'}} keepMountedtransformOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={() => handleClose('logout')}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer variant="temporary" anchor="left" open={open} onClose={() => handleDrawer(false)} classes={{ paper: classes.drawerPaper}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => handleDrawer(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.drawer} component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                        <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                        <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Professors" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Students" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AlarmIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logs" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
        : null
    )   
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutAlert })(Navbar);
