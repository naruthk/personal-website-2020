import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { colors } from "../utils/styles";
import { prettyPrintDate } from "../utils/dates";
import { renderRichTextContent } from "../components/ui/rich-text-renderer";
import {
  LocationPropTypes,
  SinglePagePropTypes,
} from "../utils/types/proptypes";

const AboutPage = ({ data, location }) => {
  const { title, updatedAt, content } = data.contentfulSinglePages;

  return (
    <Layout location={location}>
      <SEO title="About" />
      <Container bg={colors.white}>
        <h1>{title}</h1>
        <article>{renderRichTextContent(content.json)}</article>
        <hr />
        <p>Last updated: {prettyPrintDate({ timestamp: updatedAt })}</p>
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
