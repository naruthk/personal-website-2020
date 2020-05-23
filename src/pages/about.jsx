import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { colors } from "../utils/styles";
import { readableDate } from "../utils/dates";
import { RichTextRenderer } from "../components/renderer/rich-text";
import {
  LocationPropTypes,
  SinglePagePropTypes,
} from "../utils/types/proptypes";

const AboutPage = ({ data, location }) => {
  const { title, updatedAt, content } = data.contentfulSinglePages;

  return (
    <Layout location={location} pageTitle="About">
      <SEO title="About" />
      <Container bg={colors.white}>
        <h1>{title}</h1>
        <article>{RichTextRenderer(content.json)}</article>
        <hr />
        <p>Last updated: {readableDate({ timestamp: updatedAt })}</p>
      </Container>
    </Layout>
  );
};

export default AboutPage;

AboutPage.propTypes = {
  data: SinglePagePropTypes.isRequired,
  location: LocationPropTypes.isRequired,
};

export const pageQuery = graphql`
  {
    contentfulSinglePages(slug: { eq: "about" }) {
      id
      updatedAt
      title
      content {
        json
      }
    }
  }
`;
