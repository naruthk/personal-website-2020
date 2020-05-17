import React from "react";

import Link from "../link";
import styled from '@emotion/styled';
import tw from "twin.macro";

const SiteLogo = styled.div`
  ${tw`text-center text-white font-medium text-base px-4 py-2 block bg-black`}
  transition: 1s all;
`;

const Logo = () => (
  <Link href="/" title="Home">
    <SiteLogo>NK</SiteLogo>
  </Link>
);

export default Logo;
