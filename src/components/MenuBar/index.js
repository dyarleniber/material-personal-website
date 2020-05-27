import React, { useState, useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
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
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faRss,
} from "@fortawesome/free-solid-svg-icons";

import useStyles from "./styles";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef(function renderLink(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const MenuBar = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
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
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
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
          <ListItemLink
            to="/"
            primary="Home"
            icon={<FontAwesomeIcon icon={faHome} />}
          />
          <ListItemLink
            to="/portfolio"
            primary="Portfolio"
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
          />
          <ListItemLink
            to="/blog"
            primary="Blog"
            icon={<FontAwesomeIcon icon={faRss} />}
          />
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Container component="main" maxWidth="xs">
          {children}
        </Container>
      </main>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuBar;
