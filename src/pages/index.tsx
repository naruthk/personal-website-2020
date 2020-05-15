import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import WelcomeText from "../components/welcome-text";
import Container from "../components/container";
import MovingProfilePicture from "../components/ui/moving-profile-picture";

const HomePage = () => (
  <Layout showWelcomeText>
    <SEO title="Naruth Kongurai" />
    <Container>
      <WelcomeText />
    </Container>
    <MovingProfilePicture />
  </Layout>
);

export default HomePage;
