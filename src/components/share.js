import React from "react"
import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import { responsiveFontSizes } from "../utils/styles";
import styled from "@emotion/styled";

const Wrapper = styled.section`
  ul, li {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    margin-right: 20px;
    font-size: ${responsiveFontSizes.xlarge};
  }
`;

const renderSharingLinks = ({ title, description, image }) => (
  <>
    <li><FaFacebook /></li>
    <li><FaTwitter /></li>
    <li><FaLinkedin /></li>
  </>
);

const SocialNetworkSharing = ({ data }) => (
  <Wrapper>
    <ul>
      {data ? renderSharingLinks(data) : (
        <>
          <li><FaGithub /></li>
          <li><FaTwitter /></li>
          <li><FaLinkedin /></li>
        </>
      )}
    </ul>
  </Wrapper>
);

SocialNetworkSharing.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    descrption: PropTypes.string,
    image: PropTypes.string
  }),
};

SocialNetworkSharing.propTypes = {
  data: null
};

export default SocialNetworkSharing;