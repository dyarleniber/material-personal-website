import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { menuItems } from "../../config/dataApi";
import useStyles from "./styles";
import ListItemLink from "../ListItemLink";

function MenuBar({ children }) {
  const classes = useStyles();

  let location = useLocation();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            id="open-menubar-button"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="overline" display="block">
            {location && location.pathname.replace(/[^a-z0-9]/gi, "")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        id="menubar-drawer"
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton id="close-menubar-button" onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((menuItem) => (
            <ListItemLink
              key={menuItem.to}
              to={menuItem.to}
              primary={menuItem.primary}
              icon={<FontAwesomeIcon icon={menuItem.icon} />}
              handleClick={handleDrawerClose}
            />
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container component="main">{children}</Container>
      </main>
    </div>
  );
}

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuBar;
