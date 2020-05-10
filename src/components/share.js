import React from "react"
import PropTypes from "prop-types";
import { responsiveFontSizes } from "../utils/styles";
import styled from "@emotion/styled";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

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

const Date = styled.div`
  margin-bottom: 10px;
  span {
    font-size: ${responsiveFontSizes.small};
  }
  .date--active {
    font-weight: 700;
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