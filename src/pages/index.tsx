import React from "react"

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import WelcomeText from "../components/ui/welcome-text";
import MovingProfilePicture from "../components/ui/moving-profile-picture";

import { css } from "@emotion/core";
import tw from "twin.macro";

const HomePage = ({ location }) => (
  <Layout showWelcomeText>
    <SEO title="Naruth Kongurai" />
    <Container>
      <div css={css` ${tw`sm:flex`}`}>
        <WelcomeText />
        <MovingProfilePicture />
      </div>
    </Container>
  </Layout>
);

export default HomePage;
