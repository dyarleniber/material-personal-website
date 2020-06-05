import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink({ to, primary, icon, handleClick }) {
  const renderLink = useMemo(
    () =>
      forwardRef(function renderLink(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} onClick={handleClick}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  icon: PropTypes.element,
  handleClick: PropTypes.func,
};

export default ListItemLink;
