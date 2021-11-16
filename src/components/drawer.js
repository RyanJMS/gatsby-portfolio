import React, { useLayoutEffect, useState } from "react";
import { Link } from 'gatsby'
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import LaptopIcon from "@material-ui/icons/Laptop";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from '@material-ui/icons/School';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Footer from "./footer";
import Structure from './structure'
import Avatar from '../../static/images/avataaars.svg'


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "#b8edff",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: "10%",
      marginLeft: drawerWidth,
      backgroundColor: "DodgerBlue",
      color: "FloralWhite",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    cursor: "pointer"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#B5DAFF",
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

function ResponsiveDrawer(props) {
  useWindowSize();

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div id="toolbar">
      <div className={classes.toolbar} />
      <img
        src={Avatar}
        alt="avatar"
        style={{ align: "center", width: "80%" }}
      />

      <List>
        <ListItem
          component={Link}
          to="/#"
          style={{ textDecoration: "none" }}
          button
          key="About"
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem
          component={Link}
          to="/#projects"
          style={{ textDecoration: "none" }}
          button
          key="Projects"
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem
          component={Link}
          to="/#skills"
          style={{ textDecoration: "none" }}
          button
          key="Skills"
        >
          <ListItemIcon>
            <LaptopIcon />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem
          component={Link}
          to="/#education"
          style={{ textDecoration: "none" }}
          button
          key="Education"
        >
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem
          component={Link}
          to="/#contact"
          style={{ textDecoration: "none" }}
          button
          key="Contact"
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Footer />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "DodgerBlue" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ display: "inline-block", marginRight: 16 }}
          >
            Ryan Schock
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            style={{ display: "inline-block" }}
          >
            Full Stack Web Developer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="pages">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Structure />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
