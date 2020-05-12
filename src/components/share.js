import React from "react"
import PropTypes from "prop-types";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen
} from 'react-icons/fa';

import { responsiveFontSizes, colors } from "../utils/styles";
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
  }
  li {
    vertical-align: middle;
    display: inline;
    margin-right: 20px;
    font-size: ${responsiveFontSizes.xlarge};
    :last-child {
      margin-right: 0;
    }
  }

  .label {
    font-size: ${responsiveFontSizes.normal};
    ${({ isDark }) => isDark ?
      css`color: ${colors.dark}` :
      css`color: ${colors.lightGrey}`
    }
  }

  a, a:visited {
    ${({ isDark }) => isDark ?
      css`color: ${colors.dark}` :
      css`color: ${colors.white}`
    }
  }
`;

const renderArticleSharingLinks = ({ title, description, image }) => (
  <>
    <li className="label">Share this item:</li>
    <li><FaFacebook /></li>
    <li><FaTwitter /></li>
    <li><FaLinkedin /></li>
  </>
);

const SocialNetworkSharing = ({ isDark, data }) => (
  <Wrapper isDark={isDark}>
    <ul>
      {data ? renderArticleSharingLinks(data) : (
        Object.values(SOCIAL_NETWORK_LINKS_MAP).map(link => (
          <li>
            <a href={link.url} title={`Naruth Kongurai's ${link.name}`}>
              {link.icon}
            </a>
          </li>
        ))
      )}
    </ul>
  </Wrapper>
);

SocialNetworkSharing.propTypes = {
  isDark: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string,
    descrption: PropTypes.string,
    image: PropTypes.string
  }),
};

SocialNetworkSharing.propTypes = {
  isDark: false,
  data: null
};

export default SocialNetworkSharing;