import React from "react"

import Link from "../components/link";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>SOMETHING WENT WRONG</h1>
      <p>Looks like the route you just hit doesn't exist.</p>
      <p><Link href="/" title="Go home">Back to homepage -></Link></p>
    </Container>
  </Layout>
)

export default NotFoundPage;
