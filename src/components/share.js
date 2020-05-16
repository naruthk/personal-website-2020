import React from "react"
import PropTypes from "prop-types";

import useSiteMetadata from '../hooks/use-site-metadata';

import Link from "./link";
import {
  responsiveFontSizes,
  colors,
  mediaQuery,
  transition
} from "../utils/styles";

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaCodepen
} from 'react-icons/fa';
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const SOCIAL_NETWORK_LINKS_MAP = {
  twitter: {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/nkongurai",
  },
  linkedin: {
    name: "Linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/naruthkongurai",
  },
  github: {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://www.github.com/naruthk",
  },
  codepen: {
    name: "CodePen",
    icon: <FaCodepen />,
    url: "https://www.codepen.io/naruthk"
  }
};

const Wrapper = styled.section`
  ul, li {
    margin: 0;
    padding: 0;
    font-size: ${responsiveFontSizes.medium};
  }

  li {
    vertical-align: middle;
    display: inline;
    margin-right: 20px;
    :last-child {
      margin-right: 0;
    }
    ${({ isFloatingHeaderComponent }) => isFloatingHeaderComponent &&
      css`color: ${colors.mediumGrey}`
    }
  }

  a {
    opacity: 0.7;
    transition: ${transition};
    :hover {
      opacity: 1;
      color: ${colors.blue};
    }
  }
`;

const ArticleSharingWrapper = styled.div`
  font-size: ${responsiveFontSizes.medium};
  ${mediaQuery[2]} {
    margin-right: 20px;
  }
  > * {
    vertical-align: sub;
    margin: 0 5px;
    ${mediaQuery[2]} {
      margin: 10px;
    }}
  }
  button {
    background: transparent;
    padding: 0;
    border: none;
    outline: none;
    color: ${colors.blue};
    font-size: ${responsiveFontSizes.normal};
    cursor: pointer;
  }
  button:hover {
    opacity: 0.6;
  }
  span {
    font-size: ${responsiveFontSizes.small};
    vertical-align: middle;
    color: ${colors.dark};
  }
`;

const renderArticleSharingLinks = url => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;

  return (
    <ArticleSharingWrapper>
      <span className="label">Share:</span>
      <Link
        className="facebook"
        onClick={e => {
          e.preventDefault();
          window.open(
            facebookShareUrl,
            "Share on Facebook",
            "width=626, height=436"
          );
        }}
      >
        <FaFacebook />
      </Link>
      <Link
        className="twitter"
        onClick={e => {
          e.preventDefault();
          window.open(
            twitterShareUrl,
            "Share on Twitter",
            "height=320, width=500"
          );
        }}
      >
        <FaTwitter />
      </Link>
    </ArticleSharingWrapper>
  );
};

const SocialNetworkSharing = ({ isFloatingHeader, pathName }) => {
  const { siteUrl } = useSiteMetadata();
  const currentPageUrl = `${siteUrl}${pathName}`;

  return (
    <Wrapper isFloatingHeaderComponent={isFloatingHeader}>
      {isFloatingHeader ? renderArticleSharingLinks(currentPageUrl) : (
        <ul>
        {Object.values(SOCIAL_NETWORK_LINKS_MAP).map(link => (
          <li key={link.name}>
            <Link isExternal href={link.url} title={`Naruth Kongurai's ${link.name}`}>
              {link.icon}
            </Link>
          </li>
        ))}
        </ul>
      )}
    </Wrapper>
  );
};

SocialNetworkSharing.propTypes = {
  isFloatingHeader: PropTypes.bool,
  pathName: PropTypes.string.isRequired
};

SocialNetworkSharing.propTypes = {
  isFloatingHeader: false
};

export default SocialNetworkSharing;
