import React from "react";

import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TITLE = "Not Found";

const NotFoundPage = () => (
  <Layout pageTitle={TITLE}>
    <SEO title={TITLE} />
    <Container>
      <h1>SOMETHING WENT WRONG</h1>
      <p>Looks like the route you just hit does not exist.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
