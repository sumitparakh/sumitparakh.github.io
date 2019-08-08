import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {
  ChevronRight,
  Menu,
  Inbox,
  Mail,
} from "@material-ui/icons";

import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginBottom: `4.75rem`,
  },

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
    padding: "0 8px",
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
}));

const Header = ({ siteTitle }) => {

  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [{ themeType, themeActionCss }, setThemeType] = React.useState({ themeType: THEME_LIGHT, themeActionCss: 'far fa-lightbulb' });

  function getPrimaryColor(type) {
    switch (type) {
      case THEME_DARK: return '#303030';
      case THEME_LIGHT: return '#3f51b5';
    }
  }

  const toggleTheme = createMuiTheme({
    palette: {
      type: themeType,
      primary: {
        main: getPrimaryColor(themeType),
      },
      secondary: {
        main: '#303030'
      }
    }
  });

  function toggleUITheme() {
    if (themeType === THEME_LIGHT) {
      setThemeType({ themeType: THEME_DARK, themeActionCss: 'fas fa-lightbulb' });
    }
    if (themeType === THEME_DARK) {
      setThemeType({ themeType: THEME_LIGHT, themeActionCss: 'far fa-lightbulb' });
    }
  }

  function handleDrawerOpen() {
    // setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <>
      <MuiThemeProvider theme={toggleTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" noWrap>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  {siteTitle}
                </Link>
              </Typography>
              <IconButton
                className="toggleThemeMode"
                color="inherit"
                aria-label="open drawer"
                edge="end" onClick={toggleUITheme}
              >
                <i className={themeActionCss}></i>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
          >
            <div className={classes.drawer}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronRight />
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
