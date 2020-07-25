import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlaylistAddCheckRoundedIcon from "@material-ui/icons/PlaylistAddCheckRounded";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import Logo from "../../../assets/images/full-logo.png";

import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    heigh: "8rem",
    overflow: "hidden",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  //   appBarShift: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //     transition: theme.transitions.create(['margin', 'width'], {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //   },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItemText: {
    fontSize: "2rem",
    color: "#0466c8",
  },
  icons: {
    fontSize: "3rem",
    color: "#0466c8",
  },
  logo: {
    height: "250px",
    marginLeft: "-3rem",
  },
  toolbar: {
    height: "6rem",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
      style={{boxShadow: '0 0 1px rgba(0,0, 0, .5)'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon className={classes.icons} />
          </IconButton>
          <img className={classes.logo} src={Logo} alt="Any notes logo" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
        <NavLink to="/motivation">
            <ListItem onClick={handleDrawerClose} button>
              <ListItemIcon>
                {" "}
                <LocalLibraryOutlinedIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Motivation"
              />
            </ListItem>
          </NavLink>
          <NavLink to="/todo">
            <ListItem onClick={handleDrawerClose} button>
              <ListItemIcon>
                {" "}
                <PlaylistAddCheckRoundedIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Todo"
              />
            </ListItem>
          </NavLink>
          <NavLink to="/notes">
            <ListItem onClick={handleDrawerClose} button>
              <ListItemIcon>
                {" "}
                <NoteAddIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Notes"
              />
            </ListItem>
          </NavLink>
          <NavLink to="/acount">
            <ListItem onClick={handleDrawerClose} button>
              <ListItemIcon>
                {" "}
                <AccountCircleIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Acount"
              />
            </ListItem>
          </NavLink>
          <NavLink to="/logout">
            <ListItem onClick={handleDrawerClose} button>
              <ListItemIcon>
                {" "}
                <ExitToAppIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Log out"
              />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </div>
  );
}
