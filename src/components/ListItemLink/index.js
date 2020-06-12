import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

function ListItemLink({ to, primary, handleClick }) {
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
        <Typography variant="button" display="block">
          {primary}
        </Typography>
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default ListItemLink;
