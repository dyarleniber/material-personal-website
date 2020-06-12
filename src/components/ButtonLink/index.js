import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

function ButtonLink({ to, primary }) {
  const renderLink = useMemo(
    () =>
      forwardRef(function renderLink(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} />;
      }),
    [to]
  );

  return (
    <Button variant="contained" component={renderLink}>
      {primary}
    </Button>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
};

export default ButtonLink;
