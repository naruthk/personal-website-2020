import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Introduction from "../components/sections/introduction";
import Employment from "../components/sections/employment";
// import AnimatedPhoto from "../components/animated-photo";

const HomePage = () => (
  <Layout showWelcomeText>
    <SEO title="Naruth Kongurai" />
    <Introduction />
    <Employment />
    {/* <AnimatedPhoto /> */}
  </Layout>
);

export default HomePage;
