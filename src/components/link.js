import React from "react";
import PropTypes from "prop-types";

import { Link as GatsbyLink } from "gatsby";
import { OutboundLink, trackCustomEvent } from "gatsby-plugin-google-analytics";

const Link = ({ children, isExternal, href, title, onClick, className }) => {
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

  if (onClick) return (
    <button
      className={className}
      aria-label={title}
      onClick={e => {
        trackCustomEvent({
          category: "click",
          action: "Click",
          label: "button_click",
          value: title
        });
        onClick(e);
      }}
    >
      {children}
    </button>
  )

  return (
    <GatsbyLink className={className} to={href}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isExternal: PropTypes.bool,
  className: PropTypes.string
}

Link.defaultProps = {
  isExternal: false,
  href: "#",
  className: null,
  onClick: null
};

export default Link;

