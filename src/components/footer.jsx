import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import abstract from "../images/abstract-1.svg";

import Share from "./share/share";
import Container from "./container";

const FooterWrapper = styled.footer`
  ${tw`pt-8 w-full bg-gray-900`}
  p {
    ${tw`text-white text-center`}
  }
  nav {
    ${tw`flex items-center justify-between flex-wrap`}
  }
  .site-wide-navigation {
    ${tw`text-white mr-6`}
  }
  .powered-by-gatsby {
    ${tw`text-sm text-left text-gray-600`}
  }
`;

const AbstractIllustration = styled.div`
  background-image: url(${abstract});
  ${tw`bg-right-bottom bg-no-repeat bg-contain`}
  height: 150px;
`;

const Footer = () => (
  <>
    <AbstractIllustration />
    <FooterWrapper>
      <Container>
        <nav>
          <div className="site-wide-navigation">
            © {new Date().getFullYear()} - Naruth Kongurai 🎸 <br />
            <p className="powered-by-gatsby">Powered by Gatsby.js</p>
          </div>
          <div>
            <Share />
          </div>
        </nav>
      </Container>
    </FooterWrapper>
  </>
);

export default Footer;
