import React from "react";
import PropTypes from "prop-types";

import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Link = ({ children, isExternal, href, title, className }) => {
  if (isExternal) return (
    <OutboundLink
      href={href}
      title={title}
      className={className}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </OutboundLink>
  );

  return (
    <GatsbyLink className={className} to={href}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  className: PropTypes.string
}

Link.defaultProps = {
  isExternal: false,
  className: null
};

export default Link;
