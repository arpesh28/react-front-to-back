import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.PropTypes = {
  branding: PropTypes.object.isRequired
};

export default Header;
