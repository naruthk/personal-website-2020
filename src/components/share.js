import React from "react"
import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

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

const SocialNetworkSharing = ({ title, excerpt, heroImage }) => (
  <Wrapper>
    <ul>
      <li><FaFacebook /></li>
      <li><FaTwitter /></li>
      <li><FaLinkedin /></li>
    </ul>
  </Wrapper>
);

SocialNetworkSharing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      isActive: PropTypes.bool,
      initialStartDate: PropTypes.string,
      completionDate: PropTypes.string,
      category: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string
    })
  )
}

export default SocialNetworkSharing;