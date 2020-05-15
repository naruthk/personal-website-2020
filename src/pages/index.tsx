import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import MovingProfilePicture from "../components/ui/moving-profile-picture";

const HomePage = () => (
  <Layout showWelcomeText>
    <SEO title="Naruth Kongurai" />
    <MovingProfilePicture />
  </Layout>
);

export default HomePage;
