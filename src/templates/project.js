import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { prettyPrintDate } from "../utils/dates";
import { renderRichTextContent } from "../utils/RichTextRenderer";

const Project = ({ data }) => {
  const {
    title,
    category,
    url,
    description,
    excerpt,
    heroImage,
    initialStartDate,
    completionDate
  } = data.contentfulProjects;

  return (
    <Layout>
      <SEO title={title} description={excerpt.excerpt} />
      <Container>
        <h1>{title}</h1>
        <section>
          <p>{prettyPrintDate({ timestamp: initialStartDate })}</p>
          <p>{prettyPrintDate({ timestamp: completionDate })}</p>
          <p>{category.map(item => <span>{item}</span>)}</p>
          <p><a href={url} title={title}>GitHub Repo</a></p>
        </section>
        <p><img src={heroImage.fixed.src} alt={heroImage.title} /></p>
        <p>{excerpt.excerpt}</p>
        <section>
          {renderRichTextContent(description.json)}
        </section>
      </Container>
    </Layout>
  )
};

export default Project;

export const pageQuery = graphql`
 query ProjectsBySlug($slug: String!) {
  contentfulProjects(slug: { eq: $slug }) {
    title
    category
    url
    description {
      json
    }
    excerpt {
      excerpt
    }
    heroImage {
      fixed {
        src
      }
    }
    initialStartDate
    completionDate
  }
}
`;
