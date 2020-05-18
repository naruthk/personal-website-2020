import React from "react";

import Link from "../link";
import styled from '@emotion/styled';
import tw from "twin.macro";

const SiteLogo = styled.p`
  ${tw`block text-center text-white font-medium text-base block bg-black rounded`}
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
