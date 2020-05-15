import React from "react";

import Social from "../components/share";
import Container from "../components/container";

import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 200px;
  text-align: center;
  margin-top: 20px;
  p { margin-top: 20px; }
`;

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Social />
      <p>
        © {new Date().getFullYear()}
        <br/>
        Powered by {" "}
        <OutboundLink href="https://www.gatsbyjs.org" title="Gatsby.js">
          gatsby.js
        </OutboundLink>
        <br/>
        Developed by Naruth Kongurai
      </p>
    </Container>
  </FooterWrapper>
);

export default Footer;
