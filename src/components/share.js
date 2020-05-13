import React from "react"
import PropTypes from "prop-types";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen
} from 'react-icons/fa';

import {
  responsiveFontSizes,
  colors,
  mediaQuery,
} from "../utils/styles";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const SOCIAL_NETWORK_LINKS_MAP = {
  twitter: {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/nkongurai",
    articleSharingUrl: ""
  },
  linkedin: {
    name: "Linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/naruthkongurai",
    articleSharingUrl: ""
  },
  github: {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://www.github.com/naruthk",
    articleSharingUrl: ""
  },
  codepen: {
    name: "CodePen",
    icon: <FaCodepen />,
    url: "https://www.codepen.io/nkongurai"
  }
};

const Wrapper = styled.section`
  ul, li {
    margin: 0;
    padding: 0;
    font-size: ${responsiveFontSizes.small};

    ${responsiveFontSizes[2]} {
      font-size: ${responsiveFontSizes.normal};
    }
  }

  li {
    vertical-align: middle;
    display: inline;
    margin-right: 20px;
    :last-child {
      margin-right: 0;
    }
    ${({ isFloatingHeader }) => isFloatingHeader &&
      css`color: ${colors.mediumGrey}`
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
    margin: 10px;
  }
  a:hover {
    color: ${colors.blue};
  }
`;

const renderArticleSharingLinks = ({ title, description, image }) => (
  <ArticleSharingWrapper>
    <a className="facebook" href="#"><FaFacebook /></a>
    <a className="twitter" href="#"><FaTwitter /></a>
    <a className="linkedin" href="#"><FaLinkedin /></a>
  </ArticleSharingWrapper>
);

const SocialNetworkSharing = ({ data, isDark, isFloatingHeader }) => (
  <Wrapper isDark={isDark} isFloatingHeader={isFloatingHeader}>
      {data ? renderArticleSharingLinks(data) : (
        <ul>
        {Object.values(SOCIAL_NETWORK_LINKS_MAP).map(link => (
          <li>
            <a href={link.url} title={`Naruth Kongurai's ${link.name}`}>
              {link.icon}
            </a>
          </li>
        ))}
        </ul>
      )}
  </Wrapper>
);

SocialNetworkSharing.propTypes = {
  isDark: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string,
    descrption: PropTypes.string,
    image: PropTypes.string
  }),
  isFloatingHeader: PropTypes.bool
};

SocialNetworkSharing.propTypes = {
  isDark: false,
  isFloatingHeader: false,
  data: null
};

export default SocialNetworkSharing;