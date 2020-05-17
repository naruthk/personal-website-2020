import React from "react"

import Container from "../components/container";
import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";
import MovingProfilePicture from "../components/ui/moving-profile-picture";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>SOMETHING WENT WRONG</h1>
      <p>Looks like the route you just hit doesn't exist.</p>
      <p><Link href="/" title="Go home">Back to homepage -></Link></p>
      <MovingProfilePicture />
    </Container>
  </Layout>
)

export default NotFoundPage;
