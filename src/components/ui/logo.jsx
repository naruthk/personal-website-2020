import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Link from "../link";

const SiteLogo = styled.p`
  ${tw`block text-center font-medium text-base block bg-black rounded`}
  ${tw`text-white`}
  ${tw`py-2 w-16 align-middle mb-0`}
  :hover {
    ${tw`rounded-lg`}
  }
  transition: 1s all;
`;

const Logo = () => (
  <Link href="/" title="Home">
    <SiteLogo>NK</SiteLogo>
  </Link>
);

export default Logo;
