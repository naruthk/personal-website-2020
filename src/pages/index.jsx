import React from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import WelcomeText from "../components/ui/welcome-text";

const HomePage = () => (
  <Layout showWelcomeText>
    <SEO title="Naruth Kongurai" />
    <Container>
      <WelcomeText />
    </Container>
  </Layout>
);

export default HomePage;
