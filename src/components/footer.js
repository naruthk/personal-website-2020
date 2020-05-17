import React from "react";

import Share from "./share/share";
import Container from "../components/container";

import styled from "@emotion/styled";
import tw from "twin.macro";

const FooterWrapper = styled.footer`
  ${tw`mt-16 pt-8 w-full bg-gray-900`}
  p {
    ${tw`text-white text-center`}
  }
  span {
    ${tw`font-bold`}
  }
  nav {
    ${tw`flex items-center justify-between flex-wrap`}

    .site-wide-navigation {
      ${tw`flex items-center flex-shrink-0 text-white mr-6 mb-6`}
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Container>
      <nav>
        <div className="site-wide-navigation">
          © {new Date().getFullYear()}<br />
          Built with Gatsby.js + React 🎸 
        </div>
        <div>
          <Share />
        </div>
      </nav>
    </Container>
  </FooterWrapper>
);

export default Footer;
